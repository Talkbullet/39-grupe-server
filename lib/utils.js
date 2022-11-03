import crypto from 'node:crypto';

const utils = {};

utils.fileExtension = (url) => {
    // /css/main.css -> css
    // /css/main.min.css -> css
    // /css/base/base.css -> css
    // /css/base/layout.css -> css
    // /js/main.js -> js
    // /js/main.min.js -> js
    // /img/logo.png -> png
    // /favicon.ico -> ico
    // /js/main.js?v=2 -> js
    const urlParts = url.split('?')[0].split('.');
    return urlParts[urlParts.length - 1];
}

utils.parseJsonToObject = (str) => {
    try {
        return JSON.parse(str);
    } catch (error) {
        return {};
    }
}

utils.hash = (str) => {
    try {
        const hash = crypto
            .createHash('sha512')
            .update(str)
            .digest('hex');

        return [false, hash];
    } catch (error) {
        return [true, 'ERROR'];
    }
}

/**
 * 
 * @param {number} size Positive integer
 * @returns 
 */
utils.uuid = (size = 10) => {
    if (typeof size !== 'number' || !isFinite(size)) {
        size = 10;
    }
    if (size < 1) {
        size = 1;
    }
    if (size > 100) {
        size = 100;
    }
    const abc = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let res = '';
    while (size--) {
        res += abc[Math.floor(Math.random() * abc.length)];
    }
    return res;
}

export { utils };
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

export { utils };
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
    const urlParts = url.split('.');
    return urlParts[urlParts.length - 1];
}

export { utils };
import http from 'node:http';
import { utils } from './utils.js';

import { PageHome } from '../pages/PageHome.js';
import { PageAbout } from '../pages/PageAbout.js';
import { PageServices } from '../pages/PageServices.js';
import { Page404 } from '../pages/Page404.js';

const server = {};

server.httpServer = http.createServer((req, res) => {
    const baseURL = `http${req.socket.encryption ? 's' : ''}://${req.headers.host}`;
    const parsedURL = new URL(req.url, baseURL);
    const httpMethod = req.method;
    let trimmedPath = parsedURL.pathname
        .replace(/^\/+|\/+$/g, '')
        .replace(/\/\/+/g, '/');

    console.log(trimmedPath);

    const extension = utils.fileExtension(trimmedPath);
    const textFileExtensions = ['css', 'js'];
    const binaryFileExtensions = ['ico', 'png'];

    const isTextFile = textFileExtensions.includes(extension);
    const isBinaryFile = binaryFileExtensions.includes(extension);
    const isAPI = trimmedPath.indexOf('/api/') === 0;
    const isPage = !isTextFile && !isBinaryFile && !isAPI;

    if (isTextFile) {
        return res.end('STAI TAVO TEKSTINIS FAILAS...');
    }
    if (isBinaryFile) {
        return res.end('STAI TAVO BINARINIS FAILAS...');
    }
    if (isAPI) {
        return res.end('API response...');
    }
    if (isPage) {
        let pageClass = Page404;

        const pageList = {
            '': PageHome,
            'about': PageAbout,
            'services': PageServices,
        };

        if (pageList[trimmedPath]) {
            pageClass = pageList[trimmedPath];
        }

        const HTML = (new pageClass()).render();

        return res.end(HTML);
    }

    return res.end('ERROR...');
});

server.init = () => {
    const PORT = 3917;

    server.httpServer.listen(PORT, () => {
        console.log(`Tavo serveris sukasi: http://localhost:${PORT}`);
    });
}

export { server }





const person = {
    name: 'petras',
    age: 99,
    isMarried: true,
}

person.age;
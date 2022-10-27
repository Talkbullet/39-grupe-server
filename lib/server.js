import http from 'node:http';
import { StringDecoder } from 'node:string_decoder';
import { utils } from './utils.js';
import { file } from './file.js';
import { publicRoutes, userRoutes } from './routes.js';

import APIregister from '../api/register.js';
import APIlogin from '../api/login.js';
import APIpreke from '../api/preke.js';

const server = {};

server.httpServer = http.createServer((req, res) => {
    const baseURL = `http${req.socket.encryption ? 's' : ''}://${req.headers.host}`;
    const parsedURL = new URL(req.url, baseURL);
    const httpMethod = req.method.toLowerCase();
    let trimmedPath = parsedURL.pathname
        .replace(/^\/+|\/+$/g, '')
        .replace(/\/\/+/g, '/');

    const MIMES = {
        html: 'text/html',
        css: 'text/css',
        js: 'text/javascript',
        txt: 'text/plain',
    }

    const extension = utils.fileExtension(trimmedPath);
    const textFileExtensions = ['css', 'js', 'txt', 'markdown', 'webmanifest', 'svg'];
    const binaryFileExtensions = ['ico', 'png', 'jpg'];

    const isTextFile = textFileExtensions.includes(extension);
    const isBinaryFile = binaryFileExtensions.includes(extension);
    const isAPI = trimmedPath.indexOf('api/') === 0;
    const isPage = !isTextFile && !isBinaryFile && !isAPI;

    let buffer = '';
    const stringDecoder = new StringDecoder('utf-8');
    req.on('data', (data) => {
        buffer += stringDecoder.write(data);
    })

    req.on('end', async () => {
        buffer += stringDecoder.end();


        const dataForHandlers = {
            httpMethod,
            payload: utils.parseJsonToObject(buffer),
            queryParams: {},
            user: {
                id: 0,
                isLoggedIn: false,
                email: '',
            },
        }

        if (isTextFile) {
            let [fileError, fileContent] = await file.readPublic(trimmedPath);
            res.writeHead(fileError ? 404 : 200, {
                'Content-Type': MIMES[extension],
                'cache-control': 'max-age=0',
            });
            return res.end(fileError ? 'Tavo norimas failas neegzistuoja...' : fileContent);
        }
        if (isBinaryFile) {
            return res.end('STAI TAVO BINARINIS FAILAS...' + extension);
        }
        if (isAPI) {
            console.log(buffer);

            const apiRoute = trimmedPath.split('/')[1];
            const APIObject = server.API[apiRoute].init;
            return res.end(await APIObject(dataForHandlers));
        }
        if (isPage) {
            const isUserLoggedIn = false;
            const routes = isUserLoggedIn ? userRoutes : publicRoutes;
            let pageClass = routes['404'];

            if (routes[trimmedPath]) {
                pageClass = routes[trimmedPath];
            }

            const pageObject = new pageClass();
            const HTML = pageObject.render();

            res.writeHead(200, {
                'Content-type': 'text/html',
            })
            return res.end(HTML);
        }

        return res.end('ERROR...');
    })
});

server.API = {
    'register': APIregister,
    'login': APIlogin,
    'preke': APIpreke,
}

server.init = () => {
    const PORT = 3917;

    server.httpServer.listen(PORT, () => {
        console.log(`Tavo serveris sukasi: http://localhost:${PORT}`);
    });
}

export { server }
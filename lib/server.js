import http from 'node:http';
import { utils } from './utils.js';
import { file } from './file.js';
import { publicRoutes, userRoutes } from './routes.js';

const server = {};

server.httpServer = http.createServer(async (req, res) => {
    const baseURL = `http${req.socket.encryption ? 's' : ''}://${req.headers.host}`;
    const parsedURL = new URL(req.url, baseURL);
    const httpMethod = req.method;
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
        const apiRoute = trimmedPath.split('/')[1];

        console.log(httpMethod, apiRoute);

        // kuris API? registe, login, ...?
        // http method: get, post, put, delete, ...?
        // turinys: {}
        return res.end('API response...');
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
});

server.init = () => {
    const PORT = 3917;

    server.httpServer.listen(PORT, () => {
        console.log(`Tavo serveris sukasi: http://localhost:${PORT}`);
    });
}

export { server }
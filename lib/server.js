import http from 'node:http';
import { utils } from './utils.js';

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
        const HTMLhome = `<h1>Labas rytas, Lietuva!</h1>
                        <h2>Puslapis: Home</h2>
                        <img src="/img/logo.png" alt="Logo">`;

        const HTMLabout = `<h1>Labas vakaras, Lietuva!</h1>
                        <h2>Puslapis: About</h2>
                        <img src="/img/logo.png" alt="Logo">`;

        const HTMLservices = `<h1>Labas diena, Lietuva!</h1>
                        <h2>Puslapis: Services</h2>`;

        const HTML404 = `<h1>404!</h1>`;

        let HTML = '';
        switch (trimmedPath) {
            case '':
                HTML = HTMLhome;
                break;

            case 'about':
                HTML = HTMLabout;
                break;

            case 'services':
                HTML = HTMLservices;
                break;

            default:
                HTML = HTML404;
                break;
        }

        return res.end(`<!DOCTYPE html>
            <html lang="en">

            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
                <link rel="stylesheet" href="/css/main.css">
            </head>

            <body>
                ${HTML}
                <script src="/js/main.min.js"></script>
            </body>

            </html>`);
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
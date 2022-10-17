import http from 'node:http';
import { utils } from './utils.js';

const server = {};

server.httpServer = http.createServer((req, res) => {
    const URL = req.url;
    const trimmedPath = '';

    const extension = utils.fileExtension(req.url);
    const textFileExtensions = ['css', 'js'];
    const binaryFileExtensions = ['ico', 'png'];

    const isTextFile = textFileExtensions.includes(extension);
    const isBinaryFile = binaryFileExtensions.includes(extension);
    const isAPI = req.url.indexOf('/api/') === 0;
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
        // http://localhost:3917            -> /
        // http://localhost:3917/about      -> /about
        // http://localhost:3917/services   -> /services

        console.log('Nori puslapio:');
        console.log(req.url);

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
        switch (req.url) {
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
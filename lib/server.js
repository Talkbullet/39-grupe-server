import http from 'node:http';
import { utils } from './utils.js';

const server = {};

server.httpServer = http.createServer((req, res) => {


    const extension = utils.fileExtension(req.url);
    const textFileExtensions = ['css', 'js'];
    const binaryFileExtensions = ['ico', 'png'];

    console.log(req.url, '-->', extension);

    const isTextFile = textFileExtensions.includes(extension);
    const isBinaryFile = binaryFileExtensions.includes(extension);
    let isPage = false;
    let isAPI = false;

    // skirtingi dalykai/tipai:
    // - psl HTML
    // - statinio tekstinio failo turinys (css, js, manifest, svg, ....) 
    // - statinio binariniai failo turinys (ico, png, jpg, ttf, ....) 
    // - API
    if (isTextFile) {
        res.end('STAI TAVO TEKSTINIS FAILAS...');
    } else if (isBinaryFile) {
        res.end('STAI TAVO BINARINIS FAILAS...');
    } else if (isAPI) {
        res.end('API response...');
    } else {
        res.end(`<!DOCTYPE html>
            <html lang="en">

            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
                <link rel="stylesheet" href="/css/main.css">
            </head>

            <body>
                <h1>Labas rytas, Lietuva!</h1>
                <img src="/img/logo.png" alt="Logo">

                <script src="/js/main.min.js"></script>
            </body>

            </html>`);
    }

});

server.init = () => {
    const PORT = 3917;

    server.httpServer.listen(PORT, () => {
        console.log(`Tavo serveris sukasi: http://localhost:${PORT}`);
    });
}

export { server }
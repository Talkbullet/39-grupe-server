import http from 'node:http';

const server = {};

server.httpServer = http.createServer((req, res) => {
    console.log('Gavau uzklausa is kliento...');
    res.end(`<!DOCTYPE html>
            <html lang="en">

            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
                <link rel="stylesheet" href="css/main.css">
                <link rel="stylesheet" href="css/button.css">
            </head>

            <body>
                <img src="img/logo.png" alt="">
                <script src="js/main.js"></script>
            </body>

            </html>`);
});

server.init = () => {
    console.log('Pasileidzia serveris...');
    server.httpServer.listen(3917);
}

export { server }
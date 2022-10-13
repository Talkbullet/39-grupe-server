import http from 'node:http';

const server = {};

server.httpServer = http.createServer((req, res) => {
    console.log('Gavau uzklausa is kliento...');
    console.log(req);

    res.end(`<!DOCTYPE html>
            <html lang="en">

            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>

            <body>
                <h1>Labas rytas, Lietuva!</h1>
            </body>

            </html>`);
});

server.init = () => {
    const PORT = 3917;

    server.httpServer.listen(PORT, () => {
        console.log(`Tavo serveris sukasi: http://localhost:${PORT}`);
    });
}

export { server }
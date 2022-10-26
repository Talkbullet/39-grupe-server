const handler = {};

handler.init = (data, callback) => {
    console.log('preke...');
}

handler._handler = {}

handler._handler.get = () => {
    // preke:GET logika...
}

handler._handler.post = () => {
    // preke:POST logika...
}

handler._handler.put = () => {
    // preke:PUT logika...
}

handler._handler.delete = () => {
    // preke:DELETE logika...
}

export default handler;
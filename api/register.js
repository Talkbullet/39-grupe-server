const handler = {};

handler.init = (data, callback) => {
    handler._handler[data.httpMethod]();
}

handler._handler = {}

handler._handler.get = () => {
    console.log('register:GET logika...');
}

handler._handler.post = () => {
    console.log('register:POST logika...');
}

handler._handler.put = () => {
    console.log('register:PUT logika...');
}

handler._handler.delete = () => {
    console.log('register:DELETE logika...');
}

export default handler;
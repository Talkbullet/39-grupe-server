const handler = {};

handler.init = (data, callback) => {
    const allowedMethods = ['get', 'post', 'put', 'delete'];
    if (allowedMethods.includes(data.httpMethod)) {
        return handler._handler[data.httpMethod](data);
    }
    return 'ERROR: neleistinas http metodas';
}

handler._handler = {}

handler._handler.get = (data) => {
    console.log('register:GET logika...');
    return 'GET response';
}

handler._handler.post = (data) => {
    console.log('register:POST logika...');
    console.log(data);
    return 'POST response';
}

handler._handler.put = (data) => {
    console.log('register:PUT logika...');
    return 'PUT response';
}

handler._handler.delete = (data) => {
    console.log('register:DELETE logika...');
    return 'DELETE response';
}

export default handler;
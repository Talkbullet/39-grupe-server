import { file } from "../lib/file.js";

const handler = {};

handler.init = async (data, callback) => {
    const allowedMethods = ['get', 'post', 'put', 'delete'];
    if (allowedMethods.includes(data.httpMethod)) {
        return await handler._handler[data.httpMethod](data);
    }
    return 'ERROR: neleistinas http metodas';
}

handler._handler = {}

handler._handler.get = (data) => {
    console.log('register:GET logika...');
    return 'GET response';
}

handler._handler.post = async (data) => {
    const { payload } = data;
    const { email } = payload;
    const [err, msg] = await file.create('/users', email + '.json', payload);
    return err ? 'Nepavyko sukurti paskyros' : msg;
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
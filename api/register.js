import { file } from "../lib/file.js";
import { IsValid } from "../lib/IsValid.js";

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
    const { username, email, password, repeatPassword } = payload;

    delete payload.repeatPassword;

    const [errUsername, msgUsername] = IsValid.username(username);
    if (errUsername) {
        return msgUsername;
    }

    const [errEmail, msgEmail] = IsValid.email(email);
    if (errEmail) {
        return msgEmail;
    }

    const [errPassword, msgPassword] = IsValid.password(password);
    if (errPassword) {
        return msgPassword;
    }

    if (password !== repeatPassword) {
        return 'Slaptazodziai nesutampa';
    }

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
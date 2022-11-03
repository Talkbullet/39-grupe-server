import { file } from "../lib/file.js";
import { IsValid } from "../lib/IsValid.js";
import { utils } from "../lib/utils.js";

const handler = {};

handler.init = async (data, callback) => {
    const allowedMethods = ['get', 'post', 'put', 'delete'];
    if (allowedMethods.includes(data.httpMethod)) {
        return await handler._handler[data.httpMethod](data);
    }
    return ['ERROR: neleistinas http metodas', 400];
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
        return [msgUsername, 400];
    }

    const [errEmail, msgEmail] = IsValid.email(email);
    if (errEmail) {
        return [msgEmail, 400];
    }

    const [errPassword, msgPassword] = IsValid.password(password);
    if (errPassword) {
        return [msgPassword, 400];
    }

    if (password !== repeatPassword) {
        return ['Slaptazodziai nesutampa', 400];
    }

    const salt = '5er8g4b526er5';
    const [hashErr, hashMsg] = utils.hash(password + salt);
    if (hashErr) {
        return ['Nepavyko sukurti paskyros', 500];
    }

    payload.password = hashMsg;

    const [err, msg] = await file.create('/users', email + '.json', payload);
    if (err) {
        return ['Nepavyko sukurti paskyros', 500];
    }
    return [msg];
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
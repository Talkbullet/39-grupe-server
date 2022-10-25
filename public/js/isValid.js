class IsValid {
    static username(str) {
        str = str.trim();
        if (typeof str !== 'string'
            || str.length < 3
            || str.length > 30) {
            return [true, 'Username turi buti string, kurio ilgis tarp 3 ir 30 simboliu.'];
        }
        return [false, 'OK'];
    }

    static email(str) {
        str = str.trim();
        if (typeof str !== 'string'
            || str.length < 3
            || str.length > 30) {
            return [true, 'Email turi buti string, kurio ilgis tarp 3 ir 30 simboliu.'];
        }
        return [false, 'OK'];
    }

    static password(str) {
        if (typeof str !== 'string'
            || str.length < 3
            || str.length > 30) {
            return [true, 'Password turi buti string, kurio ilgis tarp 3 ir 30 simboliu.'];
        }
        return [false, 'OK'];
    }
}

export { IsValid }
class IsValid {
    static text(str, min, max) {
        return typeof str === 'string' && str.length >= min && str.length <= max;
    }

    static username(str) {
        if (!IsValid.text(str, 2, 30)) {
            return [true, 'Nevalidus username'];
        }
        return [false, 'OK'];
    }

    static email(str) {
        if (!IsValid.text(str, 6, 40)
            || !str.includes('@')
            || !str.includes('.')) {
            return [true, 'Nevalidus email'];
        }
        return [false, 'OK'];
    }

    static password(str) {
        if (!IsValid.text(str, 8, 100)) {
            return [true, 'Nevalidus password'];
        }
        return [false, 'OK'];
    }
}

export { IsValid }
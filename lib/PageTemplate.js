class PageTemplate {
    constructor() {
        this.websiteTitle = 'Server';
        this.pageTitle = '';
    }

    headHTML() {
        let title = this.websiteTitle;
        if (this.pageTitle) {
            title = `${this.pageTitle} | ${title}`;
        }

        return `<head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>${title}</title>
                    <link rel="stylesheet" href="/css/main.css">
                </head>`;
    }

    headerHTML() {
        const isLoggedIn = false;
        let accountHTML = '';
        if (isLoggedIn) {
            accountHTML = `<a href="/account">Account</a>
                            <a href="/logout">Logout</a>`;
        } else {
            accountHTML = `<a href="/register">Register</a>
                            <a href="/login">Login</a>`;
        }

        return `<header>
                    <img src="#" alt="Logo">
                    <nav>
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                        <a href="/services">Services</a>
                        <a href="/contact">Contact us</a>
                        ${accountHTML}                    
                    </nav>
                </header>`;
    }

    footerHTML() {
        return `<footer>Copyright &copy; 2022 - Rimantas</footer>`
    }

    mainHTML() {
        return '<main>CONTENT</main>';
    }

    render() {
        return `<!DOCTYPE html>
                <html lang="en">
                ${this.headHTML()}
                <body>
                    ${this.headerHTML()}
                    ${this.mainHTML()}
                    ${this.footerHTML()}
                    <script src="/js/main.min.js"></script>
                </body>
                </html>`;
    }
}

export { PageTemplate }
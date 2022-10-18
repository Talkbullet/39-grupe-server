import { PageTemplate } from "../lib/PageTemplate.js";

class PageAbout extends PageTemplate {
    constructor() {
        super();
        this.pageTitle = 'About';
    }

    mainHTML() {
        return `<main>
                    <h1>Labas vakaras, Lietuva!</h1>
                    <h2>Puslapis: About</h2>
                    <img src="/img/logo.png" alt="Logo">
                    <img src="/img/logo.png" alt="Logo">
                    <img src="/img/logo.png" alt="Logo">
                    <img src="/img/logo.png" alt="Logo">
                    <img src="/img/logo.png" alt="Logo">
                </main>`;
    }
}

export { PageAbout }
import { PageTemplate } from "../lib/PageTemplate.js";

class PageServices extends PageTemplate {
    constructor() {
        super();
        this.pageTitle = 'Services';
    }

    mainHTML() {
        return `<main>
                    <h1>Labas diena, Lietuva!</h1>
                    <h2>Puslapis: Services</h2>
                </main>`;
    }
}

export { PageServices }
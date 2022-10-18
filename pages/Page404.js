import { PageTemplate } from "../lib/PageTemplate.js";

class Page404 extends PageTemplate {
    constructor() {
        super();
        this.pageTitle = '404';
    }

    mainHTML() {
        return `<main>
                    <h1>404!</h1>
                    <h2>Puslapis nerastas</h2>
                </main>`;
    }
}

export { Page404 }
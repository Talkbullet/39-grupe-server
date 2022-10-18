import { PageTemplate } from "../lib/PageTemplate.js";

class PageHome extends PageTemplate {
    mainHTML() {
        return `<main>
                    <h1>Labas rytas, Lietuva!</h1>
                    <h2>Puslapis: Home</h2>
                    <img src="/img/logo.png" alt="Logo">
                </main>`;
    }
}

export { PageHome }
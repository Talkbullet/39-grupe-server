import { PageTemplate } from "../lib/PageTemplate.js";

class PageAccount extends PageTemplate {
    mainHTML() {
        return `<main>
                    <h1>Labas rytas, Username!</h1>
                    <h2>Puslapis: Account</h2>
                    <p>Cia yra tavo paskyros dashboard'as</p>
                </main>`;
    }
}

export { PageAccount }
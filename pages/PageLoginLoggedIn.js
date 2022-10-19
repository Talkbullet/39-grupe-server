import { PageTemplate } from "../lib/PageTemplate.js";

class PageLoginLoggedIn extends PageTemplate {
    mainHTML() {
        return `<main>
                    <h2>Login</h2>
                    <p>Tu jau prisijunges, jei nori prisijungti su kita paskyra - pirmiausia atsijunk!</p>
                    <a href="/logout">Logout</a>
                </main>`;
    }
}

export { PageLoginLoggedIn }
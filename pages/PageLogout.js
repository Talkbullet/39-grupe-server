import { PageTemplate } from "../lib/PageTemplate.js";

class PageLogout extends PageTemplate {
    mainHTML() {
        return `<main>
                    <h2>Logout</h2>
                    <p>Tu jau atjungtas!</p>
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </main>`;
    }
}

export { PageLogout }
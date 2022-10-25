import { PageTemplate } from "../lib/PageTemplate.js";

class PageLoginNotLoggedIn extends PageTemplate {
    constructor() {
        super();
        this.scripts = ['auth'];
    }

    mainHTML() {
        return `<main>
                    <h2>Login</h2>
                    <form action="/api/user-login" method="POST">
                        <label>Email</label>
                        <input name="email" data-validation="email" type="email">
                        <label>Password</label>
                        <input name="password" data-validation="password" type="password">
                        <button type="submit">Login</button>
                    </form>
                </main>`;
    }
}

export { PageLoginNotLoggedIn }
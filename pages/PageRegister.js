import { PageTemplate } from "../lib/PageTemplate.js";

class PageRegister extends PageTemplate {
    constructor() {
        super();
        this.scripts = ['auth', 'random'];
    }

    mainHTML() {
        return `<main>
                    <h2>Register</h2>
                    <form action="/api/register">
                        <label>Username</label>
                        <input name="username" data-validation="username" type="text">
                        <label>Email</label>
                        <input name="email" data-validation="email" type="email">
                        <label>Password</label>
                        <input name="password" data-validation="password" type="password">
                        <label>Repeat password</label>
                        <input name="repeatPassword" data-validation="password" type="password">
                        <button type="submit">Register</button>
                    </form>
                </main>`;
    }
}

export { PageRegister }
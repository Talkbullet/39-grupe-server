import { PageTemplate } from "../lib/PageTemplate.js";

class PageRegister extends PageTemplate {
    constructor() {
        super();
        this.scripts = ['auth'];
    }

    mainHTML() {
        return `<main>
                    <h2>Register</h2>
                    <form>
                        <label>Username</label>
                        <input name="username" type="text">
                        <label>Email</label>
                        <input name="email" type="email">
                        <label>Password</label>
                        <input name="password" type="password">
                        <label>Repeat password</label>
                        <input name="repeatPassword" type="password">
                        <button type="submit">Register</button>
                    </form>
                </main>`;
    }
}

export { PageRegister }
import { PageTemplate } from "../lib/PageTemplate.js";

class PageRegister extends PageTemplate {
    mainHTML() {
        return `<main>
                    <h2>Register</h2>
                    <form>
                        <label>Username</label>
                        <input type="text">
                        <label>Email</label>
                        <input type="email">
                        <label>Password</label>
                        <input type="password">
                        <label>Repeat password</label>
                        <input type="password">
                        <button type="submit">Register</button>
                    </form>
                </main>`;
    }
}

export { PageRegister }
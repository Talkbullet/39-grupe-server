import { PageTemplate } from "../lib/PageTemplate.js";

class PageLoginNotLoggedIn extends PageTemplate {
    mainHTML() {
        return `<main>
                    <h2>Login</h2>
                    <form>
                        <label>Email</label>
                        <input type="email">
                        <label>Password</label>
                        <input type="password">
                        <button type="submit">Login</button>
                    </form>
                </main>`;
    }
}

export { PageLoginNotLoggedIn }
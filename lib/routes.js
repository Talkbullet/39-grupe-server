import { PageHome } from '../pages/PageHome.js';
import { PageAbout } from '../pages/PageAbout.js';
import { PageServices } from '../pages/PageServices.js';
import { Page404 } from '../pages/Page404.js';
import { PageRegister } from '../pages/PageRegister.js';
import { PageLoginNotLoggedIn } from '../pages/PageLoginNotLoggedIn.js';
import { PageLoginLoggedIn } from '../pages/PageLoginLoggedIn.js';
import { PageAccount } from '../pages/PageAccount.js';
import { PageLogout } from '../pages/PageLogout.js';

const baseRoutes = {
    '': PageHome,
    '404': Page404,
    'about': PageAbout,
    'services': PageServices,
}

const authRoutes = {
    'login': PageLoginNotLoggedIn,
    'register': PageRegister,
    'account': PageLoginNotLoggedIn,
}

const accountRoutes = {
    'login': PageLoginLoggedIn,
    'logout': PageLogout,
    'account': PageAccount,
}

const publicRoutes = { ...baseRoutes, ...authRoutes };
const userRoutes = { ...baseRoutes, ...accountRoutes };

export { publicRoutes, userRoutes }
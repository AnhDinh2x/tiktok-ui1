import config from '~/config';

//Layouts
import { HeaderOnly } from '~/layouts';
import Home from '~/pages/Home';
import Flowing from '~/pages/Flowing';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Seach from '~/pages/Seach';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.flowing, component: Flowing },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.seach, component: Seach, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

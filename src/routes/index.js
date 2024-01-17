//Layouts
import { HeaderOnly } from '~/components/Layout';
import Home from '~/pages/Home';
import Flowing from '~/pages/Flowing';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Seach from '~/pages/Seach';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/flowing', component: Flowing },
    { path: '/@:nickname', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/seach', component: Seach, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

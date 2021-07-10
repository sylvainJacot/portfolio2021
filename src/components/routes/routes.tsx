import {Route, Switch} from 'react-router-dom';
import ErrorPage from '../05-pages/errorpage/ErrorPage';
import FrontendDeveloper from '../05-pages/frontenddeveloper/FontendDevelopper';
import HomePage from '../05-pages/homepage/HomePage';
import PhotoRetoucher from '../05-pages/photoretoucher/PhotoRetoucher';
import UxUiDesigner from '../05-pages/uxuidesigner/UxUiDesigner';
import { skills } from '../data/skills/skills-data';


const RoutesData = [
    {
        path: "/",
        exact: true,
        component: HomePage,
    },
    {
        path: skills[0].SkillRouterPath,
        exact: true,
        component: UxUiDesigner,
    },
    {
        path: skills[1].SkillRouterPath,
        exact: true,
        component: FrontendDeveloper,
    },
    {
        path: skills[2].SkillRouterPath,
        exact: true,
        component: PhotoRetoucher,
    },
];

const Routes = () => {
    return <>
        <Switch>
        {
            RoutesData.map((route, index) =>
                 <Route
                 key={index}
                 path={route.path}
                 exact={route.exact}
                 component={route.component}
                 />
            )
        }
        <Route path="*" component={ErrorPage}/>
        </Switch>

    </>

};


export default Routes;


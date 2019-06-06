import { Provider } from 'mobx-react';
import * as React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { ApplicationStore } from './data/stores/ApplicationStore';
import './overrideStyles.css';
import { HomePage } from './pages/HomePage/HomePage';
import { MyAppPage } from './pages/MyAppPage/MyAppPage';
import { StatsPage } from './pages/StatsPage/StatsPage';

export const Routes = {
    HOME: '/home',
    MY_APP: '/my_app',
    STATS: '/stats',
};

const applicationStore = new ApplicationStore();

export class RouteController extends React.Component {
    public render(): JSX.Element {
        return (
            <Provider applicationStore={applicationStore}>
                <BrowserRouter>
                    <Switch>
                        <Route path={Routes.HOME} exact={true} component={HomePage} />
                        <Route path={Routes.STATS} exact={true} component={StatsPage} />
                        <Route path={Routes.MY_APP} exact={true} component={MyAppPage} />
                        <Redirect exact={true} to={Routes.HOME} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default RouteController;

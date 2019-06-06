import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Routes } from 'src/RouteController';
import { CommonPageWithNavigation } from 'src/sharedComponents/CommonPageWithNavigation';

export class MyAppPage extends React.Component<RouteComponentProps> {
    public render(): JSX.Element {
        return (
            <CommonPageWithNavigation route={Routes.MY_APP} {...this.props}>
                <h1>{'MY APP PAGE'}</h1>
            </CommonPageWithNavigation>
        );
    }
}

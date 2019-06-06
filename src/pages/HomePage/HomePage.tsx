import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Routes } from 'src/RouteController';
import { CommonPageWithNavigation } from 'src/sharedComponents/CommonPageWithNavigation';

export class HomePage extends React.Component<RouteComponentProps> {
    public render(): JSX.Element {
        return (
            <CommonPageWithNavigation route={Routes.HOME} {...this.props}>
                <h1>{'HOME PAGE'}</h1>
            </CommonPageWithNavigation>
        );
    }
}

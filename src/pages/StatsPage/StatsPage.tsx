import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Routes } from 'src/RouteController';
import { CommonPageWithNavigation } from 'src/sharedComponents/CommonPageWithNavigation';

export class StatsPage extends React.Component<RouteComponentProps> {
    public render(): JSX.Element {
        return (
            <CommonPageWithNavigation route={Routes.STATS} {...this.props}>
                <h1>{'STATS PAGE'}</h1>
            </CommonPageWithNavigation>
        );
    }
}

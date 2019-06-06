import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Routes } from 'src/RouteController';

export const NavBarButton = (props: { text: string; isSelected: boolean; onClick: () => void }) => {
    const buttonStyle = { flex: 1, height: `100%`, display: 'flex', justifyContent: 'center', alignItems: 'center' };

    return (
        <div onClick={props.onClick} style={{ ...(props.isSelected ? { borderBottom: '3px solid black' } : {}), ...buttonStyle }}>
            <h1>{props.text}</h1>
        </div>
    );
};

interface Props {
    route: string;
}

export class CommonPageWithNavigation extends React.Component<Props & RouteComponentProps> {
    public render(): JSX.Element {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ display: 'flex', height: 65, width: `100%`, backgroundColor: 'aqua', flexDirection: 'row' }}>
                    <NavBarButton onClick={() => this.props.history.push(Routes.HOME)} text={'Home'} isSelected={this.props.route === Routes.HOME} />
                    <NavBarButton onClick={() => this.props.history.push(Routes.MY_APP)} text={'My App'} isSelected={this.props.route === Routes.MY_APP} />
                    <NavBarButton onClick={() => this.props.history.push(Routes.STATS)} text={'Stats'} isSelected={this.props.route === Routes.STATS} />
                </div>
                {this.props.children}
            </div>
        );
    }
}

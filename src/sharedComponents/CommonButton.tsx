import * as React from 'react';

interface Props {
    text: string;
    onClick: () => void;
}

export class CommonButton extends React.Component<Props, {}> {
    public render(): JSX.Element {
        return <button onClick={this.props.onClick}>{this.props.text}</button>;
    }
}

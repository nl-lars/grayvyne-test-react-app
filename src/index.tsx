import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import RouteController from './RouteController';

ReactDOM.render(<RouteController />, document.getElementById('root') as HTMLElement);
registerServiceWorker();

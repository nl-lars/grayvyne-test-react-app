import { observable } from 'mobx';

export class ApplicationStore {
    @observable public appBackgroundColor: string = 'blue';

    public updateAppBackground(color: string) {
        this.appBackgroundColor = color;
    }
}

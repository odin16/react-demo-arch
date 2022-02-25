import { makeObservable, observable } from 'mobx';

export class DashboardStore {
  @observable hello: string = 'world';

  constructor() {
    makeObservable(this);
  }
}

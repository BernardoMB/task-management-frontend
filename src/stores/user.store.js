import { observable, action } from "mobx";

export default class UserStore {
  @observable username = null;

  constructor(authService) {
    this.authService = authService;
  }

  @action
  async signin(key, password) {
    this.username = await this.authService.signin(key, password);
  }

  @action
  async signup(username, email, password) {
    return this.authService.signup(username, email, password);
  }

  @action
  signout() {
    this.username = null;
    this.authService.removeToken();
  }
}

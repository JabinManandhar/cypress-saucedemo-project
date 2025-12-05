class LoginPage {
  username = '[data-test="username"]';
  password = '[data-test="password"]';
  loginBtn = '[data-test="login-button"]';
  errorMsg = '[data-test="error"]';

  //getters for username, password, error message

  getUsername() {
    return cy.get(this.username);
  }
  getPassword() {
    return cy.get(this.password);
  }
  getLoginBtn() {
    return cy.get(this.loginBtn);
  }
  getErrorMsg() {
    return cy.get(this.errorMsg);
  }
}

export default new LoginPage();

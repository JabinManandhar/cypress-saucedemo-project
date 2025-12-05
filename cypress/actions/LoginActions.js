import LoginPage from "../pages/LoginPage";

class LoginActions {
  login(username, password) {
    LoginPage.getUsername().type(username);
    LoginPage.getPassword().type(password);
    LoginPage.getLoginBtn().click();
  }
}

export default new LoginActions();

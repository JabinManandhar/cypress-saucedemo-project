import LoginActions from "../actions/LoginActions";
import InventoryPage from "../pages/InventoryPage";
import LoginPage from "../pages/LoginPage";

describe("Login Tests", () => {
  beforeEach(function () {
    cy.fixture("loginData").as("data");
    cy.visit("/"); //base URL saved in cypress config file (cypress.config.js)
  });

  it("should login successfully with valid credentials", function () {
    LoginActions.login(
      this.data.validUser.username,
      this.data.validUser.password
    );

    InventoryPage.getTitle().should("contain", "Products");
    cy.url().should("include", "inventory.html"); //Must be in inventory page after successful login
  });

  it("should show Epic sadface error on invalid login", function () {
    LoginActions.login(
      this.data.invalidUser.username,
      this.data.invalidUser.password
    );

    LoginPage.getErrorMsg().should("contain", "Epic sadface");
  });
});

import LoginActions from "../actions/LoginActions";

Cypress.Commands.add("login", (username, password) => {
  cy.visit("/");
  LoginActions.login(username, password);
});

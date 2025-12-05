class CheckoutPage {
  firstName = '[data-test="firstName"]';
  lastName = '[data-test="lastName"]';
  postalCode = '[data-test="postalCode"]';
  continueBtn = '[data-test="continue"]';

  getFirstName() {
    return cy.get(this.firstName);
  }
  getLastName() {
    return cy.get(this.lastName);
  }
  getPostalCode() {
    return cy.get(this.postalCode);
  }
  getContinueBtn() {
    return cy.get(this.continueBtn);
  }
}

export default new CheckoutPage();

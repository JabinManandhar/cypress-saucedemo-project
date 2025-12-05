class CheckoutCompletePage {
  successMsg = ".complete-header";

  getSuccessMsg() {
    return cy.get(this.successMsg);
  }
}

export default new CheckoutCompletePage();

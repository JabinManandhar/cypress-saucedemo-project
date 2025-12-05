class CheckoutOverviewPage {
  finishBtn = '[data-test="finish"]';

  getFinishBtn() {
    return cy.get(this.finishBtn);
  }
}

export default new CheckoutOverviewPage();

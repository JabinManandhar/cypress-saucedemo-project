class CartPage {
  checkoutBtn = '[data-test="checkout"]';

  getCheckoutBtn() {
    return cy.get(this.checkoutBtn);
  }
}

export default new CartPage();

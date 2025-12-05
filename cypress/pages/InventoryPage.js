class InventoryPage {
  title = ".title";
  addBackpack = '[data-test="add-to-cart-sauce-labs-backpack"]';
  addBikeLight = '[data-test="add-to-cart-sauce-labs-bike-light"]';
  cartIcon = ".shopping_cart_link";

  getTitle() {
    return cy.get(this.title);
  }
  getAddBackpack() {
    return cy.get(this.addBackpack);
  }
  getAddBikeLight() {
    return cy.get(this.addBikeLight);
  }
  getCartIcon() {
    return cy.get(this.cartIcon);
  }
}

export default new InventoryPage();

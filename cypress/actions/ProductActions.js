import InventoryPage from "../pages/InventoryPage";

class ProductActions {
  // Adding two items to the cart
  addTwoProducts() {
    InventoryPage.getAddBackpack().click();
    InventoryPage.getAddBikeLight().click();
  }

  // Click cart icon, later we can check the items added to the cart
  openCart() {
    InventoryPage.getCartIcon().click();
  }
}

export default new ProductActions();

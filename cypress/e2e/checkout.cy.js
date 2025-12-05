import ProductActions from "../actions/ProductActions";
import CartPage from "../pages/CartPage";
import CheckoutActions from "../actions/CheckoutActions";
import CheckoutCompletePage from "../pages/CheckoutCompletePage";

describe("Checkout Flow", () => {
  beforeEach(function () {
    cy.fixture("loginData").then((data) => {
      this.data = data;
      cy.login(data.validUser.username, data.validUser.password);
    });
  });

  it("should complete checkout successfully", function () {
    ProductActions.addTwoProducts();
    ProductActions.openCart();

    CartPage.getCheckoutBtn().click();

    CheckoutActions.fillCheckoutForm(
      this.data.checkoutData.firstName,
      this.data.checkoutData.lastName,
      this.data.checkoutData.postalCode
    );

    CheckoutActions.finishOrder();

    CheckoutCompletePage.getSuccessMsg().should(
      //After the checkout, we must get the "Thank you" message.
      "contain",
      "Thank you for your order!"
    );
  });
});

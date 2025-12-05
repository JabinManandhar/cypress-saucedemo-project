import CheckoutPage from "../pages/CheckoutPage";
import CheckoutOverviewPage from "../pages/CheckoutOverviewPage";

class CheckoutActions {
  fillCheckoutForm(first, last, postal) {
    CheckoutPage.getFirstName().type(first);
    CheckoutPage.getLastName().type(last);
    CheckoutPage.getPostalCode().type(postal);
    CheckoutPage.getContinueBtn().click();
  }

  finishOrder() {
    CheckoutOverviewPage.getFinishBtn().click();
  }
}

export default new CheckoutActions();

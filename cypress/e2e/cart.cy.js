import ProductActions from "../actions/ProductActions";

describe("Add to Cart Tests", function () {
  beforeEach(function () {
    cy.fixture("loginData").then((data) => {
      this.data = data;
      cy.login(this.data.validUser.username, this.data.validUser.password);
    });
  });

  it("should add two products to cart", function () {
    ProductActions.addTwoProducts();
    ProductActions.openCart();

    cy.get(".cart_item").should("have.length", 2); //We have already added two items in the cart, so checking 2 in the cart.
  });
});

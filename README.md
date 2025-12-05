# E2E Automation Suite for SauceDemo Website using Cypress

SauceDemo Website URL: https://www.saucedemo.com

## Objective

This project is an E2E automation suite for testing the SauceDemo website using **Cypress**, using a hybrid approach. (POM + Action-Oriented Approach + Fixtures + Custom Commands).
![Login and checkout ](https://github.com/user-attachments/assets/6151bea4-aefa-4c45-86b4-f44df5fe0fc0)

### 📁Project File Structure

```
└── 📁cypress
    └── 📁actions
        ├── CheckoutActions.js
        ├── LoginActions.js
        ├── ProductActions.js
    └── 📁e2e
        ├── cart.cy.js
        ├── checkout.cy.js
        ├── login.cy.js
    └── 📁fixtures
        ├── loginData.json
    └── 📁pages
        ├── CartPage.js
        ├── CheckoutCompletePage.js
        ├── CheckoutOverviewPage.js
        ├── CheckoutPage.js
        ├── InventoryPage.js
        ├── LoginPage.js
    └── 📁support
        ├── commands.js
        └── e2e.js
```

## 🧪 What This Project Tests

### ✔ Login Tests

- Successful login using valid credentials
- Error validation with the message **"Epic sadface"** for invalid login
- URL assertion to `/inventory.html` after successful login

### ✔ Add to Cart Tests

- Add 2 items to the cart using action methods
- Assert the cart item number
- Validate that the cart count updates correctly

### ✔ Checkout Tests

- Fill out the checkout form (First name, Last name, ZIP) using fixtures
- Validate the order completion
- Assert the success message: **"Thank you for your order!"** after a successful checkout

## Technologies Used

- **Cypress** (v15.7.1)
- **JavaScript** (ES6)
- **Node.js** (v22.14.0)
- **Git** / **GitHub**

## Instructions to Run This Project Locally

1. Clone the repository
   `git clone https://github.com/<your-username>/<your-repo>.git`
2. Navigate into the project directory
   `cd <your-repo>`
3. Install all dependencies
   `npm install`
4. Open Cypress Test Runner
   `npx cypress open`

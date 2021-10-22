const { Given, When, Then } = require('cucumber');

const homePage = require('../../pages/amazon.page.js');
const home = new homePage();


Given(/^I am on the Amazon homepage$/, () => {
    home.openamazonHomepage();
});

When(/^I click on Amazon basics link$/, () => {
    home.selectBasics();
});

Then(/^I landed on the Amazon basics page$/, () => {
    home.verifyBasics();
});


Given(/^I have selected Our Brands category on Amazon basics page$/, () => {
    home.openamazonHomepage();
    home.selectBasics();
    home.verifyBasics();
    home.selectourBrand();
   
});

When(/^I select a product (.*) from the results$/, (product) => {
    home.selectProduct(product);
});

Then(/^the selected product (.*) page is displayed$/, (product) => {
    home.checkTitle(product);
});

Then(/^the size of the product is as expected (.*)$/, (size) => {
    home.sheetcount(size);
});



Given(/^product is added to cart$/, () => {
    home.openamazonHomepage();
    home.selectBasics();
    home.verifyBasics();
    home.selectourBrand();
    home.selectProduct();
    
});

When(/^I check the items in cart$/, () => {
    home.addtocart();
});

Then(/^the cart shows count 1$/, () => {
    home.cartcount()
});


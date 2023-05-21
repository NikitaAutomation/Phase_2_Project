$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/AddToCart.feature");
formatter.feature({
  "name": "This feature will be used to test the Add to Cart Functionality of Swag Labs Application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@AddToCart"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_have_launched_the_application()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\n\tat stepdefs.LoginStepDef.i_have_launched_the_application(LoginStepDef.java:18)\n\tat ✽.I have launched the application(file:///home/nikitamotwanith/eclipse-workspaces/Phase2Project/src/test/java/features/AddToCart.feature:5)\n",
  "status": "failed"
});
formatter.step({
  "name": "I enter username as \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_enter_username_as(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter password as \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_enter_password_as(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should land on homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_should_land_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@AddToCart"
    }
  ]
});
formatter.step({
  "name": "I click on product name as \"Sauce Labs Backpack\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.AddToCartStepDef.i_click_on_the_Product_name_as(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on the Add to Cart Button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.AddToCartStepDef.i_click_on_the_Add_to_cart_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on shopping cart link",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.AddToCartStepDef.i_click_on_shopping_cart_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I verify the item on cart page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.AddToCartStepDef.i_verify_the_item_on_cart_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});
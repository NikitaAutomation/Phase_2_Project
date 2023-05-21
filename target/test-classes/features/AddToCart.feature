@AddToCart
Feature: This feature will be used to test the Add to Cart Functionality of Swag Labs Application

  Background: 
    Given I have launched the application
    When I enter username as "standard_user"
    And I enter password as "secret_sauce"
    And I click on login button
    Then I should land on homepage

  Scenario: 
    When I click on product name as "Sauce Labs Backpack"
    And I click on the Add to Cart Button
    And I click on Shopping cart link
    Then I verify the item on cart page

    Scenario: Add multiple products to the cart
    When I add the following products to the cart:
      | product                  |
      | Sauce Labs Onesie        |
      | Sauce Labs Bolt T-Shirt  |
      | Sauce Labs Fleece Jacket |
    And I click on Shopping cart link
    Then the cart should contain the added products
      | product                  |
      | Sauce Labs Onesie        |
      | Sauce Labs Bolt T-Shirt  |
      | Sauce Labs Fleece Jacket |
@Login
Feature: This feature will will be used to test the login functionality of Swag Labs application

  Background: 
    Given I have launched the application

  @sanity
  Scenario: Validate the Login sucess scenario using parameters
    When I enter username as "standard_user"
    And I enter password as "secret_sauce"
    And I click on login button
    Then I should land on homepage

  @regression
  Scenario Outline: Validate the Login failure scenario using parameters
    When I enter username as "<UserName>"
    And I enter password as "<Password>"
    And I click on login button
    Then I should get the error message as "<Error>"

    Examples: 
      | UserName        | Password     | Error                                                                     |
      | standard_user   |        12345 | Epic sadface: Username and password do not match any user in this service |
      | locked_out_user | secret_sauce | Epic sadface: Sorry, this user has been locked out.                       |

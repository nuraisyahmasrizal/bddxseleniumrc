Feature: Greeting

  Scenario: open website
    When open the website
    Then I should find the landing page

  Scenario: Landing on dvwa website
    Given I logged in as admin
    When I clicked about button
    Then I should find the dvwa landing page

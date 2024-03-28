Feature: Greeting

  Scenario: open website
    When open the website
    Then I should find the landing page

  Scenario: Landing on merchant dashboard website
    Given I logged in as admin
    Then I should see dashboard

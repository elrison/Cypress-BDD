Feature:Login in application

    As a valid use
    I want to log into Application

    Scenario: Valid Login
        Given I open login page
        When I submit login
        Then I should see homepage
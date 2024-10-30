Feature:Login in application

    Scenario: Valid Login
        Given I open login page
        When I submit login
        Then I should see homepage
Feature: Feature name


    @login
    Scenario Outline: To Test the login functionality
        Given User is in login page
        When user enter userName and Password
        Then User clicks on login button and logged in sucessfully
        Examples:
            | TestID    |
            | Login_001 |
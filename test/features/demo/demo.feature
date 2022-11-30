Feature: Demo Feature
    @demo
    Scenario Outline: Run First Demo Feature
        Given Google page is opened
        When Search with <SeachItem>
        Then click on the first SeachItem
        Then search URL should be <ExpectedUrl>


        Examples:
            | TestID     | SeachItem | ExpectedUrl           |
            | Demo_TC001 | WDIO      | https://webdriver.io/ |


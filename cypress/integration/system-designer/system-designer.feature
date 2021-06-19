Feature: System Designer

    Scenario Outline: Users can create a system

        Given Users have opened System Designer
        When Users have closed the information Dialog
        And Users click to create a system
        And Users enter system name as '<systemname>'
        And Users click on system create button
        Then Users is able to see the system '<systemname>'
        Examples:
            | systemname |
            | starwars   |

    Scenario Outline: Users can create a schema

        Given Users have opened System Designer
        When Users click on schema tab
        And Users click to create a schema
        And Users enter schema name as '<schemaname>'
        And Users click on schema create button
        Then Users is able to see the schema '<schemaname>'
        Examples:
            | schemaname |
            | Jedi       |

    Scenario: Users can create a component

        Given Users have opened System Designer
        When Users click on component tab
        And Users click to create a component
        Then Users is able to see the component
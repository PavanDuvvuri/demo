Feature: Select top rated course from Udemy
@Scenario2
Scenario: Ensure searching and finding a top rated course in udemy site is successful
Given I am on the udemy homepage
And search for BDD with cucumber courses in that website
When I find the highest rated course
Then I am able to access the course

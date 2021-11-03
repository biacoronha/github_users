# GitHub Users Search

This project was created to search GitHub users by their username. It displays user data such as username, name and repositories.

## Instructions

### To run the project:

`npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### To run tests: 

`npm test`

## Design

For the design of the pages, I was inspired by some existing sites.

For the Search Page, I wanted to have something similar to search engines like Google. That means that I followed a minimalist approach, with only the search bar and a small text to tell the user what to do.

In the User Page, we have the user information on top and the repositories as a list of cards. This was inspired by Instagram design, with the repositories cards in my application acting as the pictures posted by the user.

## Important Information

I tried to think of all possible scenarios and because of that my solution captures the following:
 - User is found with all information
 - User is found and doesn't have repositories (or any other information that is displayed)
 - User is not found 



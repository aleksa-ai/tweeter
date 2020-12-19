# Tweeter Project

Tweeter is a simple, single-page Twitter clone. Using AJAX requests to the server, it allows users to submit a message to the feed, after which a tweet frame with avatar, name, handle, and tweet age are dynamically generated to be added to the page. It follows mobile-first design and uses media queries to reformat the layout of the page to better suit wider desktop screens.

This repository is built within the framework of Lighthouse Lab's 4th week of bootcamp to showcase our newly acquired HTML, CSS, JS, jQuery and AJAX front-end skills, as well as our Node, Express and MongoDB back-end skills.

Additional features include:

* A Tweet form which can be toggled by clicking on the prompt in the top right corner of the app
* A reactive counter showing the count of characters left until reaching limit
* Dynamic error messages that alert the user if empty tweets are to be submitted or are exceeding the character limit
* An auto-expanding text field (to contain multiple lines)

## Final Product

!["Writing Tweet in Mobile - Screeshot"](https://github.com/aleksa-ai/tweeter/blob/master/public/images/Tweeter%20Screenshot%201.png)
!["Submitted Tweet - Screeshot"](https://github.com/aleksa-ai/tweeter/blob/master/public/images/Tweeter%20Screenshot%202.png)
!["Character Limit Exceeded in Desktop - Screeshot"](Uhttps://github.com/aleksa-ai/tweeter/blob/master/public/images/Tweeter%20Screenshot%203.pngRL)

## Dependencies

- Express
- Node 5.10.x or above
- Body-Parser
- Chance
- MD5

## Getting started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

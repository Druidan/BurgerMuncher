# Burger Muncher
Burger Muncher is a restaurant app that will allow users to input the names of burgers they would like to eat, and then track them as they eat them.

## Overview and Goals
Our goal with Burger Muncher is to make a fun app to amuse our customers and keep them engaged with our products. To do that we are harnessing the natural impulses we all have. As the user eats more burgers, they will see it as a record of their accomplishment and desire to keep adding to the list of different kinds of burgers they have eaten, and so they will keep coming back for more. To fully realize this, our app needs to be friendly and easy to use, as well as keep a record of their burgers over time.

## Deployment
_We are not yet deployed. Deployment is planned to go on Heroku_

## MVP
As our app is run, it must be able to do the following:
* Allow the user to input the name of any burger.
* Display their chosen burger on the left side of the screen with a "Munch it!" button.
* When the "Munch it!" button is clicked, the burger will move to the right side of the page.
* Our app will store every user-created burger, and whether it has been munched or not, in a database.

## Dependancies
We will be using the following NPM for our app:
* [MySQL](https://www.npmjs.com/package/mysql) - We will be using MySQL for our database system.
* [Express](https://www.npmjs.com/package/express) - Express will handle our routing and server.
* [Handlebars](https://www.npmjs.com/package/express-handlebars) - We will be using handlebars for server-side rendering.
* [DotEnv](https://www.npmjs.com/package/dotenv) - DotEnv will keep our mysql password secret and safe.

## Active Bugs and Issues

##Future Features
Once our MVP is done, we will focus on first adding some charm to the app to encourage our users to keep using it and to make the process fun. Secondly, we will add multiple user functionality (as if it wasn't a class project ;P ).
* Since we are using the "Muncher" from Word Munchers as our application's mascot, it would be fun if, whenever a burger is munched, our little figure actually munches it. So either a gif, or something we make on our own to show him munching would be nice. Especially if we could add a burger to his mouth in the animation.
* Add a munching sound whenever a burger is munched.
* Restructure the databases so that there can be multiple users that track each of their eaten burgers.

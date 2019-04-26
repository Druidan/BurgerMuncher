# Burger Muncher Pseudo Code
This file contains all of my Pseudo Code and checklisting for this project. If you are looking for the README file, you just missed it. [CLICK HERE](https://github.com/Druidan/burger-muncher/blob/master/README.md) to proceed to that file. This file is pretty much for my own use to help guide me in the development process. 

## MVP Pseudo Code
- [X] Initialize a package.json file.
- [X] Install all dependancies:
  - [X] dotenv
  - [X] mysql
  - [X] express
  - [X] express-handelbars

- [X] Inside our burger-muncher directory, create the following folders and files that follow this outline pattern:
  - [X] db
    - [X] schema.sql
    - [X] seeds.sql
  - [X] config
    - [X] connection.js
    - [X] orm.js
  - [X] controllers
    - [X] burger_controller.js
  - [X] models
    - [X] burger_model.js
  - [X] public
    - [X] css
      - [X] burger_style.css
    - [X] assets
      - [X] images
      - [X] sounds
  - [X] server.js
  - [X] burger_master.js
  - [X] views
    - [X] index.handlebars
    - [X] layouts
      - [X] main.handelbars

- [ ] Write the scheme sql file so that it does the following:
  - [X] Create a MySQL Database called "burgers_db."
  - [X] Create a table inside the database called "burgers." It will include the following fields:
    - [X] id (auto-incrementing, primary key)
    - [X] burger_name (string)
    - [X] munched (boolean)
- [X] Write the seeds sql to insert queries into the burgers table with three entries.
- [X] Set up mysql with these files from the command line.
  - [X] login to mysql
  - [X] establish our scheme as the source file
  - [X] run the seeds file.
  - [X] exit mysql

- [X] Config Setup
  - [X] inside connection.js set up the code to connect Node to MySQL.
    - [X] export the connection.
  - [X] inside the orm file:
    - [X] require connection.js
    - [X] create the following methods:
      - [X] selectAll()
      - [X] insertBurger()
      - [X] updateBurger()
    - [X] export ORM.

- [X] Model setup
  - [X] inside burger_model.js
    - [X] require orm.js
    - [X] create code that will call ORM functions using the burger specific input for the ORM.
    - [X] export burger_model

- [ ] Controller setup
  - [ ]inside burgers_controller.js:
    - [ ] require Express
    - [ ] require burger_model.js
    - [ ] create the router for the app.
    - [ ] export the router.

- [ ] View setup
  - [ ] set up the main.handlebars file so its useable by Handlebars.
  - [ ] set up index.handlebars with a template Handlebars can render onto.
  - [ ] create a button in the index that will submit user input to the database.

- [ ] Deploy on Heroku (use MySQL Heroku Deployment Guide)

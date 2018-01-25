MVP
===========
```
* Database
* Need a database that can hold all variant game controls for best FPS games
* User has to be able to login
* User has to be able to logout
* User has to be able to register
* User has to be able to have a profile
* User has to be able to make a new configuration with the control variants provided
* User has to be able to use the instructions provided for the new configuration
* User has to be able to make a post
* User has to be able to make a comment
* User has to be able to view the homepage to see how the app works
```
After MVP
============
```
User is able to edit thier profile page(photo,name, email, phone number etc)
User is able to like posts
```
Stretch
=============
```
* Making U/I responsive for mobile phones (bootstrap)
* Sending new mapping instruction to phone
* Animation for mapping configuration
```
Still to figure out
==============
```
How to output the new configuration in the right form (not just the instructions)
ERD diagram
```

Look and Feel
==============
```
* User-interface should look somewhat like microsoft xbox one app (sleek)
```

Limitations due to xbox controller and platform
================
```
* We can only map infantry settings for in game matches (use config 1 for interface controls and vehicles controls and config two for specialized controls)
  - user must use configuration one for xbox interface and game interface
  - user can use configuration 2 for their specialized mappings
```
Games control schemas for database
====================
```
* battlefield one
* halo 5
* Gears of war 4
* destiny 2
* PUBG?
* rainbow six siege
* call of duty
```

User stories
============
```
As a user
I want to find out how the app works
because I need to know how to use it

As a user
I want to use the app
because I want to make special configurations
given that i'm using the app
When I submit the changes
then show me my special configurtions

As a user
I want to register and login to the app

As a user that's logged in
I want to be able to make posts, comment on posts and like posts in the forums section
because I waant to express my opinions
given that I liked a post
when I tap the like button
then it adds one like to the post

As a user that's logged in
I want change my settings ex: profile picture
bcs I want to have a nice profile
```

Routes
=======
```
 * Get '/' (homepage)
 * Get '/login' (login page)
 * Post 'login' (login page)
 * Get '/register' (signup)
 * post '/register' (signup)
 * Get '/user/:id' (profile page)
 * Post '/user/:id' (profile page)
 * Get '/config' (configurations)
 * Post '/config' (configurations)
 * Get '/topics' (Show all topics)
 * Post '/topics' (create a topic)
 * Get '/topics/:id' (show a topic)
 * Put '/topics/:id' (edit a topic)
 * Post '/topics/:id/comments' (add a comment to a topic)
 * Delete '/topics/:id' (delete a post)
 * Delete '/topics/:id/comments/:id'
 ```

Data
======
```
* getting from games
* seeding game controls
* seeding forum data
```

Deployment
===========
```
* Local host || Heroku
```

Database
=======
```
* postgresSQL
* Knex
```

Server Framework
===============
```
* Nodejs
* Express
```

User interface && Front-end framework
=====================================
```
* Bootstrap 4 && Jquery
* Css && Scss
```

Tech Stack
==============
```
* Postgres
* knex
* Express
* Jquery
* Bootstrap 4
* Css
* Scss
* Nodejs
* Heroku || localhost
```







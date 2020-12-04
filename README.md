## CovidBites (Title)

* [General info](#general-info)
* [Authors](#authors)
* [Technologies](#technologies)
* [Contents](#content)

## General Info
This web application was designed to help users find Covid-friendly restaurants. 
This browser based web application to help users find covid-friendy restaurants near their location. 

## Authors
* John Ryue
* Sam Yoo	
* Kat Sukkau

## Technologies
Technologies used for this project:
* HTML, CSS
* JavaScript
* Bootstrap 
* firebase
* firestore
	
## Content
Content of the project folder:

```
 Top level of project folder: 
├── .firebaserc
├── .gitignore                  # Git ignore file
├── 404.html 404 page
├── firebase.json 
├── firestore.indexes.json
├── firestore.rules
├── home_page.html              # main search page of app 
├── index.html                  # landing HTML file, this is what users see when you come to url
├── login_page.html user login  # login page
├── README.md
├── restaurant_cards.html       # displays search results (restaurant cards)
├── restuarant_profile.html     # takes you to the restaurant's profile page
├── review.html                 # where users can leave reviews
└──  user_profile.html          # the user's profile page - when they click on settings/profile.


It has the following subfolders and files:
├── .firebase                # hosting cache
├── .vscode                  # settings
    /settings.json
├── .git                     # Folder for git repo
├── images                   # Folder for images (non-copyrighted images downloaded from pexels.com, pixabay.com)
    /boombeer.jpg            # 
    /Daeji_4883_Burnaby_BC.png
    /dark.png                #
    /earls.jpg               #
    /heart.png               #
    /innout.jpg              #
    /light.png               #
    /mcdonalds.jpg           # 
    /orange.jpg              #
    /pizza.jpg               #
    /popeyes.jpg             #
    /starbucks.jpg           #
    /sushi.jpg               #
    /yellow.png              #
├── scripts                  # Folder for scripts
    /favorite.js             # When user clicks on the heart image on the restaurant's profile, it adds the  
                               restaurant's name to the user's favorites list
    /firebase_api.js         # 
    /login.js                # Set up user login
    /map.js                  # 
    /rating.js               # 
    /restaurant_profile_JR.js#
    /RestaurantCard_grid.js  # Dynamically creates a grid of restaurant cards pulled from FireBase
    /review.js               # Allows user to write a review of the restaurant and adds it to the 
                               "review" collection in FireBase
    /User_info.js            # 
├── styles                   # Folder for styles
    /bootstrap.css           #
    /JohnSearchbar.css       #
    /login.css               #
    /Navbar_and_map.css      #
    /rating.css              #
    /restaurant_profile_JR.css 
    /review.css              # Stylesheet for review.html

Firebase hosting files: 
├── .firebaserc...


```

Tips for file naming files and folders:
* use lowercase with no spaces
* use dashes (not underscore) for word separation


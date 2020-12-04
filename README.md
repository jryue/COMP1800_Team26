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
├── restaurant-cards.html       # displays search results (restaurant cards)
├── restuarant-profile.html     # takes you to the restaurant's profile page
├── review.html                 # where users can leave reviews
└──  user-profile.html          # the user's profile page - when they click on settings/profile.


It has the following subfolders and files:
├── .firebase                # hosting cache
├── .vscode                  # settings
    /settings.json
├── .git                     # Folder for git repo
├── images                   # Folder for images (non-copyrighted images downloaded from pexels.com, pixabay.com)
    /boombeer.jpg            # restaurant image for Boom Beer
    /daeji.png               # restaurant image for Dae-ji
    /dark.png                # Logo icon with dark color
    /earls.jpg               # restaurant image for Earls
    /innout.jpg              # restaurant image for In N Out
    /mcdonalds.jpg           # restaurant image for McDonald's
    /pizza.jpg               # restaurant image for Pizza Hut
    /popeyes.jpg             # restaurant image for Pop Eye's
    /starbucks.jpg           # restaurant image for Starbucks
    /sushi.jpg               # restaurant image for Sushi California
├── scripts                  # Folder for scripts
    /favorite.js             # When user clicks on the heart image on the       restaurant's profile, it adds the  
                               restaurant's name to the user's favorites list
    /firebase-api.js         # Firebase API for firestore database
    /login.js                # Set up user login
    /map.js                  # Javascript for map
    /rating.js               # Javascript for review modal
    /restaurant-profile.js   # Javascript for restaurant profile page
    /restaurant-card-grid.js # Dynamically creates a grid of restaurant cards pulled from FireBase
    /review.js               # Allows user to write a review of the restaurant and adds it to the 
                               "review" collection in FireBase
    /user_info.js            # Get signed-in user information
├── styles                   # Folder for styles
    /bootstrap.css           # Our own bootstrap stylsheet
    /searchbar.css           # Stylesheet for search bar
    /login.css               # Stylesheet for login page
    /rating.css              # Stylesheet for modal
    /restaurant-profile.css  # Stylesheet for restaurant-profile.html
    /review.css              # Stylesheet for review.html

Firebase hosting files: 
├── .firebaserc...


```

Tips for file naming files and folders:
* use lowercase with no spaces
* use dashes (not underscore) for word separation


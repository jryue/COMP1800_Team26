window.addEventListener("load", function(event) { console.log("anonymous load function called."); }, false);

// search bar input tracking function
var textTypedAction = function(event) {
  if(event instanceof KeyboardEvent) {
      console.log("Key event with the key value: " + event.key);
  }
}
// for text input
//window.addEventListener("keydown", textTypedAction, false); // this also works
//document.getElementById("myInput").addEventListener("keydown", textTypedAction, false);

// for clicking on the hamburger icon
//document.getElementById("hamburger-icon").addEventListener("click",
//function(event) { console.log("hambuger icon was clicked on with event: " + event); }, false);

// for clicking on the home icon
//document.getElementById("home-icon").addEventListener("click",
//function(event) { console.log("home icon was clicked on with event: " + event); }, false);

// for clicking on the search icon
//document.getElementById("search-icon").addEventListener("click",
//function(event) { console.log("search icon was clicked on with event: " + event); }, false);

// for clicking on the heart icon
//document.getElementById("heart-icon").addEventListener("cl add . 
// for clicking on the history icon
//document.getElementById("history-icon").addEventListener("click",
//function(event) { console.log("history icon was clicked on with event: " + event); }, false);

//Add a new document to collection retaurant
/* db.collection("Restaurants").doc("Restaurant04").set({
  Name: "daji" ,
  Address: "123 main st Vancouver" ,
  Business_hours: "9-5 mon- fri",
  Masks_required: "yes" ,
  Count: "45" 
})

.then(function(){
  console.log("document successfully written");
})

.catch(function(error){
  console.error("error writing document: ", error);
}) */


  


//edit existing restaurant profiles
db.collection("Restaurants").doc("Restaurant09").set({
  Address: "12345 123 St, Burnaby, BC" ,
  Business_hours: "Mon - Sat: 8AM - 10PM" ,
  Count: "33" ,
  Masks_required: "Yes",
  Name: "In N Out" ,
  Image: "innout.jpg"
});



function getUser() {
  firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
          console.log("user is signed in");
          db.collection("user")
              .doc(user.uid)
              .get()
              .then(function (doc) {
                  var n = doc.data().name;
                  var e = doc.data().email;
                  //console.log(n);
                  $("#user").text(n);
                  $("#username").text(n);
                  $("#email").text(e);

                  
              })
      } else {
          console.log("no user is signed in");
      }
  })
}
getUser();

//---------------------------------------------------------------
// This function will check if the user is signed in.
// If yes, then 
//     1) the "login" text will change to "logout"
//     2) and, the href will go to "index.html" where any logged in 
//        users will be logged out.
//----------------------------------------------------------------
function disableLoginLink() {
  firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
          //console.log("change it to logout");
          document.getElementById("loginbtn").href = "login.html";
          document.getElementById("loginbtn").innerHTML = "Logout";
      }
  })
}
disableLoginLink();
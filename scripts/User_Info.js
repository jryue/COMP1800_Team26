// search bar input tracking function
var textTypedAction = function (event) {
  if (event instanceof KeyboardEvent) {
    console.log("Key event with the key value: " + event.key);
  }
}


//edit existing restaurant profiles 
db.collection("Restaurants").doc("Restaurant09").set({
  Address: "12345 130 Ave, Coquitlam, BC",
  Business_hours: "Mon - Sat: 8AM - 10PM",
  Count: "23",
  Masks_required: "Yes",
  Name: "In N Out" ,
  Image: "innout.jpg"
});

//------------------------------------------------------
//
// Gets logged in users data for displaying on profile
//
//------------------------------------------------------

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
          var fave = doc.data().faves;
          //console.log(n);
          $("#user").text(n);
          $("#username").text(n);
          $("#email").text(e);
          $("#fav-list").text(fave);


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
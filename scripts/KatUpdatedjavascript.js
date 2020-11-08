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
//document.getElementById("heart-icon").addEventListener("click",
//function(event) { console.log("heart icon was clicked on with event: " + event); }, false);

// for clicking on the history icon
//document.getElementById("history-icon").addEventListener("click",
//function(event) { console.log("history icon was clicked on with event: " + event); }, false);

//Add a new document to collection retaurant
db.collection("Restaurants").doc("restaurant02").set({
  Name: "Daji" ,
  Address: "123 main Vancouver" ,
  Business_hours: "9-5 mon- fri",
  Masks_required: "yes" ,
  Count: "25" 
})

.then(function(){
  console.log("document successfully written");
})

.catch(function(error){
  console.error("error writing document: ", error);
})

function readQuote(){
  db.collection("Restaurants").doc("Restaurant01")
  .onSnapshot(function(snap){
    console.log(snap.data());  //prints the document fields of "01"
    console.log(snap.data().Name);
    document.getElementById("abc").innerText = snap.data().Name;
  })
}

var searchBar = document.getElementById("formGroupExampleInput");

var userInput;

searchBar.oninput = function () {
    updateUserInput();
}

function updateUserInput() {
    userInput = searchBar.value;
    console.log(userInput);
}

searchBar.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        showResult(e);
    }
})

function showResult(e) {
    var queryString = decodeURIComponent(window.location.search);
    var queries = queryString.split("?");
    var restID = queries[1];
    var userInputValue = userInput;
    db.collection("Restaurants").doc(restID).get().then(function (doc) {
        var id = doc.id;
        localStorage.setItem("userInput", userInputValue);
        console.log(localStorage.getItem("userInput"));

        window.location.replace("restuarant_profile.html?" + id);
    })
}
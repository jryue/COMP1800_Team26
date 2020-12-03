// Constants for DOM

const btn = document.querySelector("#submit");
const post = document.querySelector(".post");
const text = document.querySelector(".review-text");
const footer = document.querySelector(".modal-footer");
const modalTitle = document.querySelector(".modal-title");

// Onclick event listener for submit button
function addReviewListener() {
    btn.onclick = e => {
        storeReview();
    }
}

addReviewListener();
// Store data to firestore when the user submit a review
function storeReview() {
    var review = document.querySelector(".userReview").value;
    console.log("storereview");
    //set review date as today's date
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    var r = document.getElementById("restName").innerText;
    today = mm + '/' + dd + '/' + yyyy;

    // hide buttons if hit submit
    text.style.display = "none";
    post.style.display = "block";
    btn.style.display = "none";

    db.collection("review").doc().set({
            userReview: review,
            reviewDate: today,
            restaurantName: r,
            userId: localStorage.getItem("signedInUserID")
        })
        .then(function () {
            console.log("Document successfully written!");
        })
        .catch(function (error) {
            console.error("Error writing document: ", error);
        });
}
const btn = document.querySelector("#submit");
const post = document.querySelector(".post");
const text = document.querySelector(".review-text")
const widget = document.querySelector(".star-rating");
const footer = document.querySelector(".modal-footer");
const container = document.querySelector('.rating');
const items = container.querySelectorAll('.rating-item');

function addReviewListener() {
    btn.onclick = e => {
        storeReview();
    }
}

addReviewListener();

function storeReview() {
    var review = document.querySelector(".userReview").innerText;
    console.log("storereview");
    //set review date as today's date
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    var r = document.getElementById("restName").innerText;
    today = mm + '/' + dd + '/' + yyyy;

    // hide buttons if submit
    text.style.display = "none";
    widget.style.display = "none";
    post.style.display = "block";
    container.style.display = "none";
    btn.style.display = "none";

    db.collection("review").doc().set({
            userReview: review,
            reviewDate: today,
            restaurantName: r,
            restaurantAddress: a
        })
        .then(function () {
            console.log("Document successfully written!");
        })
        .catch(function (error) {
            console.error("Error writing document: ", error);
        });
}

// container.onclick = e => {
//     const elClass = e.target.classList;
//     if (!elClass.contains('active')) {
//         items.forEach(
//             item => item.classList.remove('active')
//         );
//         console.log(e.target.getAttribute("data-rate"));
//         elClass.add('active');
//     }
// }

// // Initial Ratings
// const ratings = {
//     userRate: 4.5
// }

// // Total Stars
// const starsTotal = 5;

// // Run getRatings when DOM loads
// document.addEventListener('DOMContentLoaded', getRatings);

// // Get ratings
// function getRatings() {
//     for (let rating in ratings) {
//         // Get percentage
//         const starPercentage = (ratings[rating] / starsTotal) * 100;

//         // Round to nearest 10
//         const starPercentageRounded = `${Math.round((starPercentage / 10) * 10)}%`;

//         // Set width of stars-inner to percentage
//         document.querySelector('.stars-inner').style.width = starPercentageRounded;
//     }
// }
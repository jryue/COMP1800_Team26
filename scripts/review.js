// function getReview() {
//     db.collection("Restaurants")
//         .where("Name", "==", "Dae-Ji")
//         .get()
//         .then(function (snap) {
//             snap.forEach(function (doc) {
//                 console.log(doc.data());
//                 var name = doc.data().Name;
//                 var address = doc.data().Address;

//                 var restaurantName = $('.restuarnt-name').append(name);
//                 var restaurantAddress = $('.restaurant-address').append(address);
//             })
//         })
// }

// getReview();

// function getRestaurantImage() {
//     db.collection("image")
//         .doc("pic")
//         .get()
//         .then(function (snap) {
//             snap.forEach(function (doc) {
//                 var img = doc.data().img_url;
//             })
//         })
// }

// getRestaurantImage;

// const reviewSection = document.querySelector("review");

// function getReview() {
//     let reviews = document.createElement('div').setAttribute("class", "reviews");
//     let userReview = document.createElement('div').setAttribute("class", "userReview");
//     // let reviewDate = document.createElement('div');
//     reviewSection.appendChild(reviews);
//     reviews.appendChild(userReview);

//     // reviews.setAttribue("class", "reviews");
//     // userReview.setAttribute("class", "userReview");
//     // reviewDate.setAttribute("class", "reviewDate");

//     db.collection("review").get().then(function (querySnapshot) {
//         querySnapshot.forEach(function (doc) {
//             document.querySelector(".userReview").innerText = doc.data().userReview;
//             // document.querySelector(".reviewDate").innerText = doc.data().reviewDate;
//         });
//     });
// }

// getReview();

const reviewList = document.querySelector(".user-reviews");

// function getReview(doc) {
//     let reviews = document.createElement('div');
//     let userReview = document.createElement('div');
//     let date = document.createElement('div');

//     reviews.setAttribute("class", "card-body");
//     date.setAttribute("class", ".card-text");
//     userReview.setAttribute("class", "desc-review");

//     date.innerText = doc.data().reviewDate;
//     userReview.innerText = doc.data().userReview;

//     reviews.appendChild(date);
//     reviews.appendChild(userReview);

//     reviewList.appendChild(reviews);
// }

// db.collection("review").get().then(function (snapshot) {
//     snapshot.forEach(function (doc) {
//         getReview(doc);
//     })
// })

function getReview(doc) {
    let review = document.createElement("div");
    let restImg = document.createElement("img");
    let body = document.createElement("div");
    let restName = document.createElement("p");
    let restAddress = document.createElement("p");
    let userName = document.createElement("h5");
    let date = document.createElement("p");
    let ul = document.createElement("ul");
    let li = document.createElement("li");

    review.setAttribute("class", "card mt-3");
    restImg.setAttribute("class", "card-img-top");
    body.setAttribute("class", "card-body");
    restName.setAttribute("class", "rest-name");
    restAddress.setAttribute("class", "rest-address");
    userName.setAttribute("class", "card-title");
    date.setAttribute("class", "card-text");
    ul.setAttribute("class", "list-group list-group-flush");
    li.setAttribute("class", "list-group-item");


    date.innerText = doc.data().reviewDate;
    li.innerText = doc.data().userReview;

    review.appendChild(restImg);
    review.appendChild(body);
    review.appendChild(ul);
    body.appendChild(restName);
    body.appendChild(restAddress);
    body.appendChild(userName);
    body.appendChild(date);
    ul.appendChild(li);

    reviewList.appendChild(review);
}

db.collection("review").orderBy('reviewDate', 'desc').get().then(function (snapshot) {
    snapshot.forEach(function (doc) {
        getReview(doc);
    })
})
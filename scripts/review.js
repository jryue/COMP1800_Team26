const reviewList = document.querySelector(".user-reviews");

// Read review data from firestore
// Create a card on review page
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
    let userId = doc.data().userId;

    db.collection('user').doc(userId).get().then(function (doc) {
        let user = doc.data().name;
        userName.setAttribute("class", "card-title");
        userName.textContent = user;
    })

    review.setAttribute("class", "card mt-3");
    restImg.setAttribute("class", "card-img-top");
    body.setAttribute("class", "card-body");
    restName.setAttribute("class", "rest-name");
    restAddress.setAttribute("class", "rest-address");
    date.setAttribute("class", "card-text");
    ul.setAttribute("class", "list-group list-group-flush");
    li.setAttribute("class", "list-group-item");
    review.setAttribute("id", "review-body");

    date.innerText = doc.data().reviewDate;
    li.innerText = doc.data().userReview;
    restName.innerText = doc.data().restaurantName;

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

// Sort the review list by review date
db.collection("review").orderBy('reviewDate', 'desc').get().then(function (snapshot) {
    snapshot.forEach(function (doc) {
        getReview(doc);
    })
})
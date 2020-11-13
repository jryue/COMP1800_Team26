function getRestaurantInfo() {
    db.collection("Restaurants")
        .doc("Restaurant02")
        .get()
        .then(function(doc) {
            console.log("The data for this restaurant is:", doc.data());
            //parseDetails(doc);
            })

        var count = 0;

        doc.forEach(function(x) {
            $("#restaurant").append('<div id="info"> <div class="masks">' + count
            + '"</div><div class="hours">"' + count + '</div><div class="contact">'
            + count + '</div><div class="person-counter">' + count + '</div>');
        }
        /* function parseDetails(doc) {
            let maskreq = document.createElement('masks');
            let hour = document.createElement('hour');
            let contact = document.createElement('contact');
            let person = document.createElement('counter');

            mask.textContent(''); */
        


//getRestaurantInfo()
function getRestaurantCard() {
    db.collection("Restaurants")
        .get()
        .then(function(snap) {
            snap.forEach(function(doc) {
                var m = doc.data().message;
                //console.log(m);
                var d1 = $('#restaurant').append('<div class="rest-container">');
                var i = d1.append('<div id="pic">');
                var image1 = i.append('<img src="/images/DaeJi_4883_Burnaby_BC.png" alt="Dae-Ji restaurant">');
                var title = d1.append('<h1 class="display-4"></h1>');
                document.getElementByClass("display-4").innerText = snap.data(m).title;
                var info = d1.append('<div id="info">');
                var maskreq = info.append('<div class="masks">' + m + '</div>');
                var hoursop = info.append('<div class="hours">' + m + '</div>');
                var contactinfo = info.append('<div class="contact">' + m + '</div>');
                var pplcount = info.append('<div class="person-counter">' + m + '</div>');
            

        //.where('where maches text').get()
        })
    })
}
getRestaurantCard();

function getSpecificRestaurantCard() {
    db.collection("Restaurants")
        .where("Name", "==", "Boom Beer")
        .get()
        .then(function(snap) {
            snap.forEach(function(doc) {
                var m = doc.data().message;
                //console.log(m);
                var d1 = $('#restaurant').append('<div class="rest-container">');
                var i = d1.append('<div id="pic">');
                var image1 = i.append('<img src="/images/DaeJi_4883_Burnaby_BC.png" alt="Dae-Ji restaurant">');
                var title = d1.append('<h1 class="display-4">' + m + '</h1>');
                var info = d1.append('<div id="info">');
                var maskreq = info.append('<div class="masks">' + m + '</div>');
                var hoursop = info.append('<div class="hours">' + m + '</div>');
                var contactinfo = info.append('<div class="contact">' + m + '</div>');
                var pplcount = info.append('<div class="person-counter">' + m + '</div>');
            

        //.where('where maches text').get()
        })
    })
}
getSpecificRestaurantCard();
function getRestaurantCard() {
    db.collection("Restaurants")
        .get()
        .then(function(snap) {
            snap.forEach(function(doc) {
                var m = doc.data().message;
                //console.log(m);
                var d1 = $('.card-container').append('<div class="cards">');
                var d2 = d1.append('<div class="card" id="card1">');
                var i = d2.append('<div class="img" id="img">')
                var image1 = i.append('<img src="/images/orange.png" alt="Dae-Ji restaurant"/>');
                var title = d2.append('<div class="name">');
                var name = title.append('<h1>name here</h1>');
                document.getElementById("display-4").innerText = snap.data(m).title;
                var info = d2.append('<div id="info">');
                var maskreq = info.append('<div id="mask">' + m + '</div');
                var hours = info.append('<div id="hours">' + m + '</div>');
                var contactinfo = info.append('<div id="contact">' + m + '</div>');
                var pplcount = info.append('<div id="person-counter">' + m + '</div>');
                var ratings = d2.append('<div id="ratings">');
                var star1 = ratings.append('<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">');
                var path1 = ratings.append('<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />');
                var star2 = ratings.append('<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">');
                var path2 = ratings.append('<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />');
                var star3 = ratings.append('<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">');
                var path3 = ratings.append('<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />');
                var star4 = ratings.append('<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">');
                var path4 = ratings.append('<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />');
                var star5 = ratings.append('<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">');
                var path5 = ratings.append('<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />');

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
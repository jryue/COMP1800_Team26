function getRestaurantProfile() {
    db.collection("Restaurants")
        .where("Name", "==", "Dae-Ji")
        .get()
        .then(function(snap) {
            snap.forEach(function(doc) {
                console.log(doc.data());
                var name = doc.data().Name;
                var address = doc.data().Address;
                var hours = doc.data().Business_hours;
                var count = doc.data().Count;
                var masks = doc.data().Masks_required;
                //d1 is the div container with class = "card"
                var d1 = $('#card-container').append('<div class="card" id="inside-card" style="width: 25rem;">');
                var imgdiv = $('.card').append('<div id="img-container">');
                var i = $('#img-container').append('<img class="card-img-top" src="/images/DaeJi_4883_Burnaby_BC.png" alt="Card image cap">');
                var heart = $('#img-container').append('<img class="heart-icon" src="/images/heart.png" alt="favorite">');
                var d2 = d1.append('<div class="card-body">');
                d2.append('<h5 class="card-title">' + name + '</h5>');
                d2.append('<p class="card-text"> Address: ' + address + '</p>');
                d2.append('<p class="card-text"> Hours of Operation: ' + hours + '</p>');
                d2.append('<p class="card-text"> People currently inside the restaurant: ' + count + '</p>');
                d2.append('<p class="card-text"> Masks required: ' + masks + '</p>');
                
                var ratings = d1.append("<div class='ratings'>");
                var star1 = ratings.add('<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">');
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
getRestaurantProfile();
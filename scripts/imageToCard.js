function imgToCards(image) {
    db.collection("image")
        .where("Rest_name", "==", "Boom Beer")
        .get()
        .then(function (snap) {
            
            snap.forEach(function (doc) {
                console.log(doc.data());
                var imgurl = doc.data().img_url;
                
                $(card).append("<img class='card-img-top' src='" + imgurl + "' alt='Card image cap'>");
                    
            })
        })
}
imgToCards("image");
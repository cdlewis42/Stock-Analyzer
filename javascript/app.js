//This will need to be put in an on click function

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://amazon-price1.p.rapidapi.com/search?keywords=puppies&marketplace=ES",
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "amazon-price1.p.rapidapi.com",
        "x-rapidapi-key": "b020bd5f68msh487b6bb38cdb49ep14a0f7jsne8efb0f47c5d"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
    for (i = 0; i < response.length; i++) {

        imageDiv = $("<div>")
        titleDiv = $("<div>")
        priceDiv = $("<div>")
        productDiv = $("<div>")
        $(titleDiv).append(response[i].title)
        $(imageDiv).append(response[i].imageurl)
        $(priceDiv).append(response[i].price)
        $(productDiv).append(titleDiv)
        $(productDiv).append(priceDiv)
        $(productDiv).append(imageDiv)
    }
});
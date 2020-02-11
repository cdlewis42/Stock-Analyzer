//start the document - so it's ready for loading
$(document).ready(function () {
    // have a starting array of example buttons the user can load with
    var stock = ['Apple', 'Google', 'Face Book'];

    // create the fuction that will create buttons to dump into the array
    // need a form to get this entry to run
    function stockButton() {
        $(".button").empty();
        // for loop used to run through the array and add buttons and add values to the button 
        for (var i = 0; i < stock.length; i++) {
            var button = $("<button>");
            button.addClass("btn btn-primary");
            button.attr("data-name", stock[i]);
            button.text(stock[i]);
            $("#btn").append(button);
        }

    }
    // run button function
    stockButton();

    // need to create a div with a form id of stockEntry similar to below (in the HTML)
    //<div class="btnContainer"
    //     <form id="stockEntry">
    //     <lable for="stockSymbol">What stock Symbol do you want to see info on?</lable>
    //     <input type="text" id="stockSymbol">

    //     <input id="addSuperStr" type="submit" value="Search Stock Symbol">

    // </form>
        // </div>
        // this is the on click to add new buttons?

    $("#stockEntry").on("submit", function (event) {
        event.preventDefault()
        alert($("#stockSymbol").val().trim())
        stock.push($("#stockSymbol").val().trim())
        stockButton();

    })

    // need an onclick listener to start the function
    $(document).on("click", ".superStar", function () {

        var athlete = $(this).attr("data-name");
        // get results to verify i'm getting the input fron onclick
        console.log(athlete);

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + athlete + "&api_key=NFZvIxAVw9n0UEj3BFzwe6mKbE58SUF2&limit=10";
        console.log(queryURL);
        // need to create an api call, url and key -- see previous activities in class
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            // the promise for your jQuery Ajax api call
            .then(function (response) {
                var results = response.data;
                console.log(results)
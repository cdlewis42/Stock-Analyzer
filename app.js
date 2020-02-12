$(document).ready(function () {
    // var firebaseConfig = {

    //     apiKey: "AIzaSyAqrxz9cVwxBcDv7lxISU2BGXI7fFj0yMg",
    //     authDomain: "stockanalyser-73716.firebaseapp.com",
    //     databaseURL: "https://stockanalyser-73716.firebaseio.com",
    //     projectId: "stockanalyser-73716",
    //     storageBucket: "stockanalyser-73716.appspot.com",
    //     messagingSenderId: "243750173140",
    //     appId: "1:243750173140:web:ee97836b0fe030ee257e41"
    //   };
    //   // Initialize Firebase
    //   firebase.initializeApp(firebaseConfig);

    var stock = ['Apple', 'Google', 'Facebook']

    function stockButton() {
        $(".button").empty();
        for (var i = 0; i < stock.length; i++) {
            var button = $("<a>");
            var font = $("<i>");
            button.addClass("btn btn-primary");
            font.addClass("fa fa-" + stock[i].toLowerCase());
            button.attr("data-name", stock[i]);
            button.attr("role", "button");
            button.append(font);
            button.append(stock[i]);
            $("#btn").append(button);
        }
    }

    // run button function
    stockButton();
    // need to create a div with a form id of stockEntry similar to below (in the HTML)
    //<div class="btnContainer"
    //     <form id="stockEntry">
    //     <lable for="stockSymbol">What stock Symbol do you want to see info on?</lable>
    //     <input type="text" id="stockSymbol"
    //     <input id="addSuperStr" type="submit" value="Search Stock Symbol">
    // </form>
    // </div>
    // this is the on click to add new buttons?
    $("#add").on("submit", function (event) {
        event.preventDefault()
        alert($("#stock").val().trim())
        stock.push($("#stock").val().trim())
        stockButton();
    })
});

//TO DO: This is where we grab the data name to use as a search for the ajax call. 

$(document).on("click", ".btn-primary", function () {
    //Something is wrong here
    var stock = $(this).attr("data-name");
    console.log(stock);
    var queryURL = "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=" + stock + "&apikey=6OWUHCRKZBKLS6YY";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var results = response.data
        console.log(results)
        //We could not get it to call so the names of the results may have to be changed.
        
        //price=results.price

        //url=results.websiteurl

        //ratio=results.ratio

        //newCell1=$("<td>")

        //newCell1.append(price)

        //newCell2=$("<td>")

        //newCell2.append(url)

        //newCell3=$("<td>"")

        //newCell3.append(ratio)

        //newRow=$("<tr>")

        //newRow.append(newCell1)

        //newRow.append(newCell2)

        //newRow.append(newCell3)

        //displayDiv.append(newRow)

    })




})
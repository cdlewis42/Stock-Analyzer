$(document).ready(function(){
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

   var stock =['Apple','Google','Facebook']

   function stockButton(){
       $(".button").empty();
       for(var i = 0; i < stock.length; i++){
           var button =$("<a>");
           var font =$("<i>");
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

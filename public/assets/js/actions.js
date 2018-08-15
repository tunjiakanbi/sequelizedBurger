// console.log("Im Here!");

$(".burgerAvailable").on('click', function () {
    // console.log("should go away");
    //grab the value of form ; and do ajax post call to the route
    var id = $(this).data("id");


    var status = {
        devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: status
    }).then(
        function () {
            console.log("changed status to", status);
            // Reload the page to get the updated list
            location.reload();
        }
    );

});

$("#addburger").on('click', function (event) {

    //grab the value of form ; and do ajax post call to the route
    event.preventDefault();
  

    var newBurger = {
        name: $("#burger").val().trim(),
    };
    console.log("click");
    // Send the POST request.
    
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function () {
            console.log("created new Burger");
            // Reload the page to get the updated list
            location.reload();
        }
    );

})
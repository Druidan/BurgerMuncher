// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".change-munched").on("click", function (event) {
        var id = $(this).data("id");
        var determineMunched = $(this).data("determineMunched");

        var changeMunchedState = {
            munched: determineMunched
        };

        // Send the PUT request.
        $.ajax("/api/cats/" + id, {
            type: "PUT",
            data: changeMunchedState
        }).then(
            function () {
                console.log("changed sleep to", determineMunched);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newCat = {
            name: $("#ca").val().trim(),
            sleepy: $("[name=sleepy]:checked").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/cats", {
            type: "POST",
            data: newCat
        }).then(
            function () {
                console.log("created new cat");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

});
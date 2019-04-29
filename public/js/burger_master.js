// const Sound = require('../assets/sounds/MunchMunchMunch.mp3');

// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".change-munched").on("click", function (event) {
        const id = $(this).data("id");
        const determineMunched = $(this).data("munch");

        const changeMunchedState = {
            munched: determineMunched
        };

        // Send the PUT request.
        $.ajax(`/api/burgers/${id}`, {
            type: "PUT",
            data: changeMunchedState
        }).then(
            function () {
                console.log("changed munched to", determineMunched);
                // Reload the page to get the updated list
                if(determineMunched) {
                    const munchMunch = new Sound("../assets/sounds/MunchMunchMunch2.mp3");
                    munchMunch.play();
                    const muncher = document.querySelectorAll('.muncher');
                    const muncherShow = ['../assets/images/muncher1.png', '../assets/images/muncher2.png', '../assets/images/muncher3.png', '../assets/images/muncher4.png']
                    animate(muncher, muncherShow, 3);
                    setTimeout(() => {
                        location.reload();
                    }, 1050);
                } else {
                    location.reload();
                }
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        const newBurger = {
            name: $("#burg").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".delete-burger").on("click", function (event) {
        const id = $(this).data("id");
        // Send the DELETE request.
        $.ajax(`/api/burgers/${id}`, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted burger: ", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

});
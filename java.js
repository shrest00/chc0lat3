$(document).ready(function () {
    // Chocolate data array
    const chocolates = [
        {
            name: "Plain Milk",
            calories: "110 calories",
            ingredients: "Ingredients: cocoa butter, milk, sugar",
            imgSrc: "images/plain_milk.png"
        },
        {
            name: "Plain Dark",
            calories: "100 calories",
            ingredients: "Ingredients: cocoa butter, milk, sugar",
            imgSrc: "images/plain_dark.png"
        },
        {
            name: "Plain Hybrid",
            calories: "105 calories",
            ingredients: "Ingredients: cocoa butter, milk, sugar",
            imgSrc: "images/plain_hybrid.png"
        },
        {
            name: "Nutter Butter Cup",
            calories: "130 calories",
            ingredients: "Ingredients: cocoa butter, milk, sugar, peanut butter filling",
            imgSrc: "images/butter.png"
        },
        {
            name: "Bailey's Cup",
            calories: "90 calories",
            ingredients: "Ingredients: cocoa butter, milk, sugar, Bailey's Cream filling",
            imgSrc: "images/baileys_cup.png"
        },
        {
            name: "Rum Barrel",
            calories: "110 calories",
            ingredients: "Ingredients: cocoa butter, milk, sugar, rum, coconut",
            imgSrc: "images/rum_barrel.png"
        },
        {
            name: "Orange Fondant",
            calories: "125 calories",
            ingredients: "Ingredients: cocoa butter, milk, sugar, orange cream, orange zest",
            imgSrc: "images/orange_fondant.png"
        },
        {
            name: "Cappuccino Cup",
            calories: "130 calories",
            ingredients: "Ingredients: cocoa butter, milk, sugar, coffee-vanilla cream, grated coffee beans",
            imgSrc: "images/cappuccino_cup.png"
        },
        {
            name: "Pistachio Diamond",
            calories: "140 calories",
            ingredients: "Ingredients: cocoa butter, milk, sugar, nut butter, pistachio",
            imgSrc: "images/pistachio_diamond.png"
        },
        {
            name: "Toffee Crunch",
            calories: "130 calories",
            ingredients: "Ingredients: cocoa butter, milk, sugar, toffee, salt, toffee brittle",
            imgSrc: "images/toffee_crunch.png"
        }
    ];

    // Function to display chocolates on the page
    function displayChocolates() {
        const chocolateContainer = $('.chocolates');
        chocolates.forEach((chocolate, index) => {
            // Create a chocolate card element
            const card = $(`
                <div class="chocolate-card" id="chocolate-${index + 1}" style="background-color: cream;">
                    <img src="${chocolate.imgSrc}" alt="${chocolate.name}">
                    <h3>${chocolate.name}</h3>
                    <p class="info" style="display:none;">${chocolate.calories}</p>
                    <p class="ingredients" style="display:none;">${chocolate.ingredients}</p>
                </div>
            `);
            // Append the card to the container
            chocolateContainer.append(card);
        });
    }

    // Call display function on page load
    displayChocolates();

    // Function to pick a random chocolate sample
    $('#randomSample').click(function () {
        const randomIndex = Math.floor(Math.random() * chocolates.length); // Get a random index
        const randomChocolate = chocolates[randomIndex]; // Get the random chocolate

        // Change background color of the selected card
        $(`#chocolate-${randomIndex + 1}`).css('background-color', 'yellow');

        // Generate a random code between 1 and 50
        const randomCode = Math.floor(Math.random() * 50) + 1;
        alert('Your free sample is: ' + randomChocolate.name + '\nGive this code to the cashier: ' + randomCode);
    });

    // Function to toggle calorie and ingredient information
    $('#toggleInfo').click(function () {
        $('.info').toggle(); // Toggle the visibility of calorie info
        $('.ingredients').toggle(); // Toggle the visibility of ingredient info
    });
});

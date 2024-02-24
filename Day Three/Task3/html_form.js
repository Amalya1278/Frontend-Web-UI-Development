
    var form = document.getElementById("form");

    form.addEventListener("submit", function(event) {
        var nameInput = document.getElementById("Name");
        var emailInput = document.getElementById("Email");

        var nameError = document.getElementById("nameError");
        var emailError = document.getElementById("emailError");

        nameError.textContent = "";
        emailError.textContent = "";

        
        if (nameInput.value.trim() === "") {
            nameError.textContent = "Please enter your name";
            event.preventDefault();
        }

        
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            emailError.textContent = "Plaease enter yout email";
            event.preventDefault();
        }
    });

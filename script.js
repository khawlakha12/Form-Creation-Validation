document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

       
        let isValid = true;
        let messages = [];

        
        if (username.length < 3) {
            isValid = false;
            messages.push("Le nom d’utilisateur doit contenir au moins 3 caractères.");
        }

        
        if (!email.includes("@") || !email.includes(".")) {
            isValid = false;
            messages.push("Veuillez entrer une adresse e-mail valide.");
        }

        
        if (password.length < 8) {
            isValid = false;
            messages.push("Le mot de passe doit contenir au moins 8 caractères.");
        }

      
        feedbackDiv.style.display = "block";

        if (isValid) {
            feedbackDiv.textContent = "✅ Registration successful!";
            feedbackDiv.style.color = "#28a745"; 
            feedbackDiv.style.backgroundColor = "#d4edda";
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545"; 
            feedbackDiv.style.backgroundColor = "#f8d7da";
        }
    });
});

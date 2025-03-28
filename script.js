document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();
        
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;
        let responseElement = document.getElementById("form-response");
        
        if (name && email && message) {
            responseElement.textContent = "Thank you for contacting us, " + name + "! We will get back to you soon.";
            responseElement.style.color = "green";
            document.getElementById("contact-form").reset();
        } else {
            responseElement.textContent = "Please fill out all fields correctly.";
            responseElement.style.color = "red";
        }
    });

    // Smooth scrolling for navigation
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            let targetId = this.getAttribute("href").substring(1);
            let targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});

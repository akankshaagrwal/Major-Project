document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling effect for navigation links
    var scroll = new SmoothScroll('a[href*="#"]');

    // Form submission handling
    var contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        // Form validation
        if (validateForm()) {
            // Simulate form submission (replace this with actual form submission logic)
            setTimeout(function() {
                $('#contactModal').modal('hide'); // Hide the modal
                alert("Form submitted successfully!");
                window.location.href = "#home"; // Redirect to home section
            }, 1000);
        }
    });

    // Function to validate form fields
    function validateForm() {
        var name = document.getElementById("name").value.trim();
        var email = document.getElementById("email").value.trim();
        var message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return false;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return false;
        }

        return true;
    }

    // Function to validate email address
    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
});

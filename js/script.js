// Contact form validation
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        if (name === "" || email === "" || message === "") {
            document.getElementById("result").innerHTML =
                "Please fill in all fields.";
        } else {
            document.getElementById("result").innerHTML =
                "Message sent successfully!";
        }
    });
}

// Dark mode toggle
const darkModeBtn = document.getElementById("darkModeBtn");

if (darkModeBtn) {
    darkModeBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
}

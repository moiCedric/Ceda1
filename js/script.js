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

// Persistent dark mode
const darkModeBtn = document.getElementById("darkModeBtn");

if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
}

if (darkModeBtn) {
    darkModeBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.setItem("darkMode", "disabled");
        }
    });
}

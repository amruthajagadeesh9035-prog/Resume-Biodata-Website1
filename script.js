
document.addEventListener("DOMContentLoaded", function () {

    // Display current year
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    // Mobile navigation
    const menuButton = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuButton && navLinks) {

        menuButton.addEventListener("click", function () {

            const isOpen = navLinks.classList.toggle("open");

            menuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            menuButton.textContent = isOpen ? "✕" : "☰";

        });

    }


    // Typing text animation
    const typing = document.getElementById("typing-text");

    if (typing) {

        const phrases = [
            "Software Developer",
            "Web Developer",
            "Technology Learner"
        ];

        let phraseIndex = 0;

        setInterval(function () {

            phraseIndex = (phraseIndex + 1) % phrases.length;

            typing.style.opacity = "0";

            setTimeout(function () {

                typing.textContent = phrases[phraseIndex];

                typing.style.opacity = "1";

            }, 220);

        }, 2300);

        typing.style.transition = "opacity .2s";

    }


    // Contact form validation
    const form = document.getElementById("contactForm");

    if (form) {

        form.addEventListener("submit", function (event) {

            event.preventDefault();

            const feedback =
                document.getElementById("formFeedback");

            if (!form.checkValidity()) {

                feedback.textContent =
                    "Please enter valid details in all fields.";

                feedback.classList.add("error");

                form.reportValidity();

                return;

            }

            const visitor =
                document.getElementById("visitorName").value.trim();

            feedback.classList.remove("error");

            feedback.textContent =
                "Thank you, " + visitor +
                "! Your sample message has been submitted successfully.";

            form.reset();

        });

    }


    // jQuery smooth scrolling
    if (window.jQuery) {

        $("a[href^='#']").on("click", function (event) {

            const target = $(this.getAttribute("href"));

            if (target.length) {

                event.preventDefault();

                $("html, body").animate({

                    scrollTop: target.offset().top - 82

                }, 450);

            }

        });

    }

});

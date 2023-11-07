document.addEventListener("DOMContentLoaded", function () {
    // ...

    // Show PDF resume when clicking on "Resume" link
    const resumeLink = document.getElementById("resume");

    resumeLink.addEventListener("click", function (e) {
        e.preventDefault();
        window.open('Pranay_Pinjarkar_Resume.pdf', '_blank');
    });

    // Show "Contact" section when clicking on "Contact" link
    const contactLink = document.getElementById("contact-link");
    const contactSection = document.getElementById("contact");

    contactLink.addEventListener("click", function (e) {
        e.preventDefault();
        // Scroll to the "Contact" section
        contactSection.scrollIntoView({ behavior: "smooth" });
    });
});


 document.addEventListener("DOMContentLoaded", function () {
            const hireMeButton = document.getElementById("hire-me-button");

            hireMeButton.addEventListener("click", function () {
                const subject = "Hiring Request"; // Subject for the email
                const body = "I'm interested in hiring you for a project. Please provide more details."; // Email body

                // Compose the email link with the "mailto" protocol
                const emailLink = `mailto:pinjarkarpranay8@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

                // Open the user's default email client with the pre-filled email
                window.location.href = emailLink;
            });
        });



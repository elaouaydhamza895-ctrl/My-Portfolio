


/* Close mobile menu after clicking a link */

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("open");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});




/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    const scrollPosition =
        window.scrollY + 150;

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop;

        const sectionHeight =
            section.offsetHeight;

        const sectionId =
            section.getAttribute("id");

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            navLinks.forEach(link => {

                link.classList.remove("active");

            });

            const activeLink =
                document.querySelector(
                    `.navbar a[href="#${sectionId}"]`
                );

            if (activeLink) {

                activeLink.classList.add("active");

            }

        }

    });

});


/* =========================================================
   BACK TO TOP
========================================================= */

const backToTop =
    document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const subject =
        document.getElementById("subject").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (!name || !email || !subject || !message) {

        formMessage.textContent =
            "Veuillez remplir tous les champs.";

        return;

    }


    formMessage.textContent =
        "Merci ! Votre message a été préparé avec succès.";

    /*
       Pour l'instant le formulaire est côté Front-End.

       Plus tard, nous pouvons le connecter à :
       - PHP
       - Node.js
       - Formspree
       - EmailJS
       - une API personnalisée
    */

    contactForm.reset();

});


/* =========================================================
   CURRENT YEAR
========================================================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const body =
        "Nom : " + name + "\n" +
        "Email : " + email + "\n\n" +
        "Message :\n" + message;

    const gmailUrl =
        "https://mail.google.com/mail/?view=cm&fs=1" +
        "&to=elaouaydhamza895@gmail.com" +
        "&su=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

    window.open(gmailUrl, "_blank");

    document.getElementById("formMessage").textContent =
        "Gmail a été ouvert pour envoyer votre message.";
});
// CONTACT FORM VALIDATION
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(e){
    e.preventDefault(); // prevent default form submission

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if(name === "" || email === "" || message === ""){
        formMessage.style.color = "red";
        formMessage.textContent = "Please fill in all fields.";
        return;
    }

    // simple email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        formMessage.style.color = "red";
        formMessage.textContent = "Please enter a valid email.";
        return;
    }

    // success message
    formMessage.style.color = "gold";
    formMessage.textContent = "Thank you! Your message has been sent.";

    // reset form
    contactForm.reset();
});


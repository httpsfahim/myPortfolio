const contactForm = document.querySelector("#contacts form");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (name === "") {
        alert("Please enter your name.");
        nameInput.focus();
        return;
    }

    if (email === "") {
        alert("Please enter your email.");
        emailInput.focus();
        return;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        emailInput.focus();
        return;
    }

    if (message === "") {
        alert("Please enter your message.");
        messageInput.focus();
        return;
    }

    contactForm.submit();
});
const form = document.getElementById("contactForm");

let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

form.addEventListener("submit", function(e) {
    e.preventDefault(); // prevent page reload

    // Get the actual input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Create a contact object with actual values
    const contact = { name, email, message, date: new Date().toISOString() };

    // Push to contacts array
    contacts.push(contact);

    // Save to localStorage
    localStorage.setItem("contacts", JSON.stringify(contacts));

    alert("Thank you for your time.");
    form.reset();

    console.log(contacts); // check saved contacts
});

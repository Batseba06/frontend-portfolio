const form = document.getElementById("contactForm");

let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

form.addEventListener("submit", function(e) {
    e.preventDefault(); 

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    
    const contact = { name, email, message, date: new Date().toISOString() };

    contacts.push(contact);

    localStorage.setItem("contacts", JSON.stringify(contacts));

    alert("Thank you for your time.");
    form.reset();

    console.log(contacts);
});
v 
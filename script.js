

function sendEmail(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let subject = "Message from " + name;

    let body = "Name: " + name +
               "\nEmail: " + email +
               "\n\nMessage:\n" + message;

    let mailLink = "mailto:chadbooth@my.capilanou.ca,masaharunagamine@my.capilanou.ca,ivanchien@my.capilanou.ca" +
                   "?subject=" + encodeURIComponent(subject) +
                   "&body=" + encodeURIComponent(body);

    alert("There is a secret hidden somewhere on our website! Can you find it? 🐾");

    window.location.href = mailLink;
}
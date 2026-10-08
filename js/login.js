document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (savedUser === null) {

        document.getElementById("loginMessage").innerText =
            "No account found. Please sign up first.";

        return;
    }

    if (
        email === savedUser.email &&
        password === savedUser.password
    ) {

        document.getElementById("loginMessage").innerText =
            "Login successful!";

        setTimeout(function() {
            window.location.href = "index.html";
        }, 1000);

    } else {

        document.getElementById("loginMessage").innerText =
            "Incorrect email or password.";

    }

});
document.getElementById("signupForm").addEventListener("submit", function(event) {

    event.preventDefault();

    // Get values from the form
    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Check if passwords match
    if (password !== confirmPassword) {

        document.getElementById("signupMessage").innerText =
            "Passwords do not match!";

        return;
    }

    // Create user object
    const user = {
        name: name,
        email: email,
        password: password
    };

    // Save user in Local Storage
    localStorage.setItem("user", JSON.stringify(user));

    // Show success message
    document.getElementById("signupMessage").innerText =
        "Account created successfully!";

});
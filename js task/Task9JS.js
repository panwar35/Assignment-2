document.addEventListener("DOMContentLoaded", function () {
    const userForm = document.getElementById("userForm");
    const userTableBody = document.getElementById("userTableBody");

    // Handle form submission
    if (userForm) {
        userForm.addEventListener("submit", function (event) {
            event.preventDefault();

            // Get user input values
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const contact = document.getElementById("contact").value;
            const address = document.getElementById("address").value;

            // Create user object
            const user = { name, email, contact, address };

            // Get existing users from localStorage
            let users = JSON.parse(localStorage.getItem("users")) || [];

            // Add new user to array
            users.push(user);

            // Save updated users back to localStorage
            localStorage.setItem("users", JSON.stringify(users));

            // Reset form
            userForm.reset();
            alert("User registered successfully!");
        });
    }

    // Display users on view.html
    if (userTableBody) {
        let users = JSON.parse(localStorage.getItem("users")) || [];

        users.forEach(user => {
            const row = `<tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.contact}</td>
                <td>${user.address}</td>
            </tr>`;
            userTableBody.innerHTML += row;
        });
    }
});

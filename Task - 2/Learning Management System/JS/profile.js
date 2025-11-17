(function () {
    const sessionKey = "lms_session";
    const usersKey = "lms_users";

    // Get logged-in user session
    const sess = JSON.parse(localStorage.getItem(sessionKey));

    // If not logged in → go back
    if (!sess) {
        window.location.href = "index.html";
        return;
    }

    // Load users from localStorage
    function readUsers() {
        return JSON.parse(localStorage.getItem(usersKey) || "[]");
    }
    function saveUsers(u) {
        localStorage.setItem(usersKey, JSON.stringify(u));
    }

    // Display Profile
    const profileBox = document.getElementById("profile-data");
    profileBox.innerHTML = `
        <p><strong>Name:</strong> ${sess.name}</p>
        <p><strong>Email:</strong> ${sess.email}</p>
        <p><strong>Role:</strong> ${sess.role}</p>
    `;

    // Change Password Logic
    document.getElementById("change-pass").addEventListener("click", () => {
        const oldPass = document.getElementById("old-pass").value;
        const newPass = document.getElementById("new-pass").value;

        if (!oldPass || !newPass) {
            alert("Please enter all fields");
            return;
        }

        const users = readUsers();

        // Find current user
        const user = users.find(u => u.email === sess.email);

        if (!user) {
            alert("User not found!");
            return;
        }

        // Check old password
        if (user.password !== oldPass) {
            alert("Old password is incorrect!");
            return;
        }

        // Update password
        user.password = newPass;
        saveUsers(users);

        alert("Password changed successfully!");

        // Optional: Clear fields
        document.getElementById("old-pass").value = "";
        document.getElementById("new-pass").value = "";
    });

})();

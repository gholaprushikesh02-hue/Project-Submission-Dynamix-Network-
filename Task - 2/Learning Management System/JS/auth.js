// Simple localStorage-based auth
(function () {
    const usersKey = 'lms_users';
    const sessionKey = 'lms_session';


    // helpers
    function readUsers() { return JSON.parse(localStorage.getItem(usersKey) || '[]'); }
    function saveUsers(u) { localStorage.setItem(usersKey, JSON.stringify(u)); }


    // DOM
    const loginBox = document.getElementById('login-box');
    const regBox = document.getElementById('register-box');
    const showRegisterBtn = window.showRegister = () => { loginBox.classList.add('hidden'); regBox.classList.remove('hidden'); };
    const showLoginBtn = window.showLogin = () => { regBox.classList.add('hidden'); loginBox.classList.remove('hidden'); };


    document.getElementById('reg-btn').addEventListener('click', () => {
        const name = document.getElementById('reg-name').value.trim();
        const email = document.getElementById('reg-email').value.trim().toLowerCase();
        const pass = document.getElementById('reg-pass').value;
        const role = document.getElementById('reg-role').value;
        if (!name || !email || !pass) { alert('Fill all fields'); return; }
        const users = readUsers();
        if (users.find(u => u.email === email)) { alert('User exists'); return; }
        users.push({ id: Date.now(), name, email, password: pass, role, enrolled: [], progress: {} });
        saveUsers(users);
        alert('Registered. Please login');
        showLoginBtn();
    });


    document.getElementById('login-btn').addEventListener('click', () => {
        const email = document.getElementById('login-email').value.trim().toLowerCase();
        const pass = document.getElementById('login-pass').value;
        const users = readUsers();
        const user = users.find(u => u.email === email && u.password === pass);
        if (!user) { alert('Invalid credentials'); return; }
        localStorage.setItem(sessionKey, JSON.stringify({ email: user.email, role: user.role, name: user.name }));
        // redirect
        window.location.href = 'dashboard.html';
    });


    // auto fill demo user (optional)
    if (!readUsers().length) {
        saveUsers([
            { id: 1, name: 'Demo Student', email: 'student@lms.com', password: '1234', role: 'student', enrolled: [], progress: {} },
            { id: 2, name: 'Demo Teacher', email: 'teacher@lms.com', password: '1234', role: 'teacher', enrolled: [], progress: {} }
        ]);
    }
})();




const pass = document.getElementById("login-pass");
const toggle = document.getElementById("togglePassword");

toggle.addEventListener("click", () => {
    if (pass.type === "password") {
        pass.type = "text";
        toggle.textContent = "🙈";
    } else {
        pass.type = "password";
        toggle.textContent = "👁️";
    }
});

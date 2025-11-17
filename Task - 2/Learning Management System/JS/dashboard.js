(function () {
    const sessionKey = "lms_session";
    const usersKey = "lms_users";
    const coursesKey = "lms_courses";

    // Storage Helpers
    function readUsers() {
        return JSON.parse(localStorage.getItem(usersKey) || "[]");
    }
    function saveUsers(u) {
        localStorage.setItem(usersKey, JSON.stringify(u));
    }
    function readCourses() {
        return JSON.parse(localStorage.getItem(coursesKey) || "[]");
    }
    function saveCourses(c) {
        localStorage.setItem(coursesKey, JSON.stringify(c));
    }

    // ---------------------------
    // SESSION CHECK
    // ---------------------------
    const sess = JSON.parse(localStorage.getItem(sessionKey));

    if (!sess) {
        window.location.href = "index.html"; // Not logged in
        return;
    }

    document.getElementById("dash-user").innerText =
        `${sess.name} (${sess.role})`;

    // ---------------------------
    // LOGOUT
    // ---------------------------
    document.getElementById("logout-btn").addEventListener("click", () => {
        localStorage.removeItem(sessionKey);
        window.location.href = "index.html";
    });

    // ---------------------------
    // DASHBOARD UI
    // ---------------------------
    const studentView = document.getElementById("student-view");
    const teacherView = document.getElementById("teacher-view");

    if (sess.role === "student") {
        studentView.classList.remove("hidden");
        loadStudentDashboard();
    } else {
        teacherView.classList.remove("hidden");
        loadTeacherDashboard();
    }

    // ---------------------------
    // STUDENT DASHBOARD LOGIC
    // ---------------------------
    function loadStudentDashboard() {
        const users = readUsers();
        const courses = readCourses();

        const student = users.find(u => u.email === sess.email);

        // Enrolled courses
        const enrolledBox = document.getElementById("enrolled-list");
        enrolledBox.innerHTML = "";

        student.enrolled.forEach(id => {
            const course = courses.find(c => c.id === id);
            if (!course) return;

            enrolledBox.innerHTML += `
                <div class="card-item">
                    <h4>${course.title}</h4>
                    <p>${course.desc}</p>
                    <p>Progress: ${student.progress[id] || 0}%</p>
                    <button onclick="continueCourse(${course.id})">Continue</button>
                </div>
            `;
        });

        // Available courses
        const availableBox = document.getElementById("available-list");
        availableBox.innerHTML = "";

        courses.forEach(course => {
            if (!student.enrolled.includes(course.id)) {
                availableBox.innerHTML += `
                    <div class="card-item">
                        <h4>${course.title}</h4>
                        <p>${course.desc}</p>
                        <button onclick="enroll(${course.id})">Enroll</button>
                    </div>
                `;
            }
        });

        // Progress List
        const progressBox = document.getElementById("progress-list");
        progressBox.innerHTML = "";

        Object.keys(student.progress).forEach(cid => {
            const course = courses.find(c => c.id == cid);
            if (!course) return;

            progressBox.innerHTML += `
                <div class="progress-item">
                    <strong>${course.title}</strong>: ${student.progress[cid]}%
                </div>
            `;
        });
    }

    // Enroll Course
    window.enroll = function (courseId) {
        const users = readUsers();
        const courses = readCourses();

        const student = users.find(u => u.email === sess.email);

        if (!student.enrolled.includes(courseId)) {
            student.enrolled.push(courseId);
            student.progress[courseId] = 0;
            saveUsers(users);
            alert("Enrolled Successfully!");
            loadStudentDashboard();
        }
    };

    // Continue Course
    window.continueCourse = function (courseId) {
        alert(`Course ${courseId} - continue learning...`);
        // Open lessons page or quiz page here
    };

    // ---------------------------
    // TEACHER DASHBOARD LOGIC
    // ---------------------------
    function loadTeacherDashboard() {
        const courses = readCourses();
        const manageBox = document.getElementById("manage-courses");

        manageBox.innerHTML = "";

        courses.forEach(course => {
            manageBox.innerHTML += `
                <div class="card-item">
                    <h4>${course.title}</h4>
                    <p>${course.desc}</p>
                    <button onclick="deleteCourse(${course.id})">Delete</button>
                </div>
            `;
        });

        // Add course event
        document.getElementById("add-course")
            .addEventListener("click", () => {
                const title = document.getElementById("course-title").value.trim();
                const desc = document.getElementById("course-desc").value.trim();

                if (!title || !desc) {
                    alert("Enter all fields");
                    return;
                }

                courses.push({
                    id: Date.now(),
                    title,
                    desc
                });

                saveCourses(courses);
                alert("Course Added!");
                loadTeacherDashboard();
            });
    }

    // Delete Course
    window.deleteCourse = function (courseId) {
        let courses = readCourses();
        courses = courses.filter(c => c.id !== courseId);
        saveCourses(courses);
        alert("Course Deleted!");
        loadTeacherDashboard();
    };

})();

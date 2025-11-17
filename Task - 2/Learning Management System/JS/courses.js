(function () {
    const coursesKey = 'lms_courses';

    function readCourses() {
        return JSON.parse(localStorage.getItem(coursesKey) || '[]');
    }

    function saveCourses(courses) {
        localStorage.setItem(coursesKey, JSON.stringify(courses));
    }

    // Default demo courses (auto added if empty)
    const defaultCourses = [
        { id: 1, title: "HTML Basics", description: "Learn the structure of web pages." },
        { id: 2, title: "CSS Fundamentals", description: "Style your website like a pro." },
        { id: 3, title: "JavaScript Beginner", description: "Learn scripting and logic." }
    ];

    // Load courses or create default
    let courses = readCourses();
    if (courses.length === 0) {
        saveCourses(defaultCourses);
        courses = defaultCourses;
    }

    const listBox = document.getElementById("courses-list");

    // Display all courses
    function showCourses() {
        listBox.innerHTML = "";
        courses.forEach(course => {
            const div = document.createElement("div");
            div.className = "course-card";
            div.innerHTML = `
                <h3>${course.title}</h3>
                <p>${course.description, course.desc}</p>
                <button onclick="enroll(${course.id})">Enroll</button>
            `;
            listBox.appendChild(div);
        });
    }

    window.enroll = function (id) {
        alert("You enrolled in course ID: " + id);
    };

    showCourses();

})();

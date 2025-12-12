const message = document.getElementById("message");
const button = document.getElementById("btn").addEventListener("click", (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username === "admin" && password === "admin123") {
        message.textContent = "Admin Login Successful.";
        message.style.color = "green";
        localStorage.setItem("admin","true");
        setTimeout(() => {
            window.location.href = "/admin/dashboard";
        },500)
    } else if (password.includes("'") && password.toLowerCase().includes("or")) {
        message.textContent = "SQL Injection attempt blocked.";
        message.style.color = "red";
    } else {
        message.textContent = "You are not the admin.";
        message.style.color = "red";
    }
})


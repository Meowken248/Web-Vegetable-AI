// App Global Logic (Static UI Version)

// Get mock user role
function getUserRole() {
    return localStorage.getItem("userRole") || "user";
}

// Global Logout
function logout() {
    localStorage.removeItem("userRole");
    window.location.href = "/login.html";
}

// Sidebar Active Navigation Highlighting
document.addEventListener("DOMContentLoaded", () => {
    const path = window.location.pathname;
    
    // Mark active link in sidebar
    const currentFile = path.substring(path.lastIndexOf("/") + 1);
    const sidebarLinks = document.querySelectorAll(".sidebar-link");
    sidebarLinks.forEach(link => {
        const href = link.getAttribute("href");
        if (href && (href.endsWith(currentFile) || (currentFile === "" && href.endsWith("dashboard.html")))) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });

    // Logout Action Hooks
    const logoutBtns = document.querySelectorAll(".btn-logout-trigger");
    logoutBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            logout();
        });
    });
});

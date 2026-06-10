// ------------- Fade-in on scroll using IntersectionObserver -------------
const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Unobserve after it becomes visible so it only animates once
            io.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll(".fade-in").forEach(el => io.observe(el));

// ------------ Toggle details for experiences/education -------------
document.querySelectorAll(".toggle-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const id = btn.dataset.target;
        const node = document.getElementById(id);
        if (!node) return;

        const expanded = btn.getAttribute("aria-expanded") === "true";
        // Toggle accessibility state
        btn.setAttribute("aria-expanded", String(!expanded));

        // Toggle visibility via class list
        if (node.classList.contains("hidden")) {
            node.classList.remove("hidden");
            node.style.display = "block";
        } else {
            node.classList.add("hidden");
            node.style.display = "none";
        }
    });
});
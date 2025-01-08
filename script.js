document.addEventListener("DOMContentLoaded", function () {
    const greetings = document.querySelector(".hero p");
    const date = new Date();
    const hours = date.getHours();
    let greetingText = "Selamat Pagi!";

    if (hours >= 12 && hours < 18) {
        greetingText = "Selamat Siang!";
    } else if (hours >= 18 && hours < 22) {
        greetingText = "Selamat Sore!";
    } else if (hours >= 22 || hours < 5) {
        greetingText = "Selamat Malam!";
    }

    greetings.textContent = greetingText;

    const heroSection = document.querySelector(".hero");
    for (let i = 0; i < 10; i++) {
        const circle = document.createElement("div");
        circle.className = "circle";
        circle.style.left = Math.random() * 100 + "vw";
        circle.style.top = Math.random() * 100 + "vh";
        circle.style.width = Math.random() * 50 + 20 + "px";
        circle.style.height = circle.style.width;
        circle.style.background = `rgba(255, 255, 255, ${Math.random()})`;
        circle.style.animationDuration = Math.random() * 5 + 3 + "s";
        heroSection.appendChild(circle);
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});

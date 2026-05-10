// Loader
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

// Scroll progress
window.onscroll = () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  document.getElementById("progress-bar").style.width = (winScroll / height) * 100 + "%";
};

// Typing animation
const roles = ["Data Engineer", "Cloud Enthusiast", "AWS Learner"];
let roleIndex = 0, charIndex = 0;
const typingSpan = document.querySelector(".typing");

function typeRole() {
  if (charIndex < roles[roleIndex].length) {
    typingSpan.textContent += roles[roleIndex].charAt(charIndex++);
    setTimeout(typeRole, 150);
  } else {
    setTimeout(eraseRole, 1500);
  }
}
function eraseRole() {
  if (charIndex > 0) {
    typingSpan.textContent = roles[roleIndex].substring(0, --charIndex);
    setTimeout(eraseRole, 100);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeRole, 300);
  }
}
document.addEventListener("DOMContentLoaded", typeRole);

// Skill bar animation on scroll
const skills = document.querySelectorAll(".skill");
window.addEventListener("scroll", () => {
  skills.forEach(skill => {
    const rect = skill.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      skill.style.setProperty("--width", skill.dataset.skill + "%");
      skill.querySelector
      skill.style.setProperty("background-size", skill.dataset.skill + "% 100%");
      skill.style.setProperty("box-shadow", "0 0 10px var(--accent)");
      skill.style.setProperty("--width", skill.dataset.skill + "%");
      skill.style.setProperty("--width", skill.dataset.skill + "%");
      skill.style.setProperty("--width", skill.dataset.skill + "%");
      skill.setAttribute("data-activated", true);
      skill.style.setProperty("--width", skill.dataset.skill + "%");
      skill.style.setProperty("--width", skill.dataset.skill + "%");
      skill.style.setProperty("--width", skill.dataset.skill + "%");
      skill.style.setProperty("--width", skill.dataset.skill + "%");
      skill.querySelector
      skill.style.transition = "all 1s ease";
      skill.style.transform = "scale(1.05)";
      skill.style.boxShadow = "0 0 20px var(--accent)";
    }
  });
});

// Theme toggle (dark/light mode)
const toggle = document.querySelector(".theme-toggle i");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  toggle.classList.toggle("fa-sun");
});

// Contact form validation
document.querySelector("#contact-form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Message sent successfully!");
});

// Back to top
document.querySelector("#back-to-top").addEventListener("click", e => {
  e.preventDefault();
  window.scrollTo({top:0, behavior:"smooth"});
});

/* ===== FOOTER & COPYRIGHT ===== */
const body = document.querySelector("body");
const footer = document.createElement("footer");
body.appendChild(footer);

const today = new Date();
const thisYear = today.getFullYear();

const copyright = document.createElement("p");
// Stretch Goal: Unicode copyright symbol and dynamic year
copyright.innerHTML = `&copy; Faith Gambrill ${thisYear}`;
footer.appendChild(copyright);

/* ===== SKILLS SECTION ===== */
const skills = [
  "JavaScript",
  "HTML",
  "CSS",
  "GitHub",
  "API Security",
  "OWASP",
  "PCI Compliance",
  "Cybersecurity Documentation"
];

const skillsSection = document.getElementById("Skills");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}


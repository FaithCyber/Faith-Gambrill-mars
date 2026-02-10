/***********************
 * ADD FOOTER ELEMENT
 ***********************/

// Select body
const body = document.querySelector("body");

// Create footer
const footer = document.createElement("footer");
body.appendChild(footer);

/******************************
 * COPYRIGHT TEXT IN FOOTER
 ******************************/

// Get current date and year
const today = new Date();
const thisYear = today.getFullYear();

// Create paragraph
const copyright = document.createElement("p");
copyright.innerHTML = `© Faith Gambrill ${thisYear}`;

// Append to footer
footer.appendChild(copyright);

/******************************
 * SKILLS SECTION
 ******************************/

// Skills array
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

// Select skills section and ul
const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");

// Loop through skills
for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}

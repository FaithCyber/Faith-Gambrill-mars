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

/* MESSAGE FORM HANDLING
******************************/
const messageForm = document.querySelector('form[name="leave_message"]');

messageForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Retrieve form field values
  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;

  // Log variables to console
  console.log("Name:", usersName, "Email:", usersEmail, "Message:", usersMessage);

  // Select the messages section and list
  const messageSection = document.getElementById("messages");
  const messageList = messageSection.querySelector("ul");

  // Create a new list item
  const newMessage = document.createElement("li");
  newMessage.innerHTML = `
    <a href="mailto:${usersEmail}">${usersName}</a>
    <span> wrote: ${usersMessage} </span>
  `;

  // Create Remove button
  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";

  removeButton.addEventListener("click", () => {
    const entry = removeButton.parentNode;
    entry.remove();
  });

  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

  messageForm.reset();
});

/******************************
 * FETCH + DISPLAY GITHUB REPOS
 ******************************/

fetch("https://api.github.com/users/FaithCyber/repos")
  .then((response) => {
    return response.json();
  })
  .then((repositories) => {
    console.log("Repositories:", repositories);

    const projectSection = document.getElementById("Projects");
    const projectList = projectSection.querySelector("ul");

    for (let i = 0; i < repositories.length; i++) {
      const project = document.createElement("li");
      project.innerText = repositories[i].name;
      projectList.appendChild(project);
    }
  })
  .catch((error) => {
    console.error("Error fetching GitHub repos:", error);

    const projectSection = document.getElementById("Projects");
    const projectList = projectSection.querySelector("ul");
    const errorItem = document.createElement("li");
    errorItem.innerText = "Unable to load projects right now.";
    projectList.appendChild(errorItem);
  });

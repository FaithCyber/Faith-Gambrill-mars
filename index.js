/******************************
 * MESSAGE FORM HANDLING
 ******************************/
const messageForm = document.querySelector('form[name="leave_message"]');

messageForm.addEventListener('submit', (event) => {
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

  // Create a new list item (li)
  const newMessage = document.createElement("li");
  newMessage.innerHTML = `
    <a href="mailto:${usersEmail}">${usersName}</a>
    <span> wrote: ${usersMessage} </span>
  `;

  // Create Remove button
  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";

  removeButton.addEventListener('click', () => {
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

// 1. Fetch repos from GitHub
// Replace {GITHUB_USERNAME} with FaithCyber
fetch("https://api.github.com/users/FaithCyber/repos")
  // 2. Chain then() to return the response JSON
  .then((response) => {
    return response.json(); 
  })
  // 3. Chain another then() to handle the parsed data
  .then((repositories) => {
    // 4. Console log to see the data structure
    console.log("Repositories:", repositories);

    // 5. Select the projects section by ID
    const projectSection = document.getElementById("Projects");
    
    // 6. Select the UL inside the projectSection
    const projectList = projectSection.querySelector("ul");

    // 7. Loop through repositories Array
    for (let i = 0; i < repositories.length; i++) {
      // Create a new list item
      const project = document.createElement("li");
      
      // Set inner text to the current repo's name property
      project.innerText = repositories[i].name;
      
      // Append the project to the list
      projectList.appendChild(project);
    }
  })
  // 8. Chain catch() to handle errors
  .catch((error) => {
    console.error("Error fetching GitHub repos:", error);
    const projectSection = document.getElementById("Projects");
    const projectList = projectSection.querySelector("ul");
    const errorItem = document.createElement("li");
    errorItem.innerText = "Unable to load projects right now.";
    projectList.appendChild(errorItem);
  });
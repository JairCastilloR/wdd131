
const lastModified = new Date(document.lastModified);

const formattedDate = lastModified.toLocaleString(); 
const currentYear = new Date().getFullYear();

document.getElementById("currentyear").textContent = "© " + currentYear;

document.getElementById("lastmodified").textContent = "Last Modification: " + formattedDate;

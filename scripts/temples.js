
const lastModified = new Date(document.lastModified);

const formattedDate = lastModified.toLocaleString(); 
const currentYear = new Date().getFullYear();

document.getElementById("currentyear").textContent = "© " + currentYear;

document.getElementById("lastmodified").textContent = "Last Modification: " + formattedDate;

const openBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");

openBtn.addEventListener("click", () => {
  document.getElementById("myLinks").style.width = "100%";
});

closeBtn.addEventListener("click", () => {
  document.getElementById("myLinks").style.width = "0%";
});

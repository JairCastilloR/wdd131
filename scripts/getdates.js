// Fecha de última modificación del documento
const lastModified = new Date(document.lastModified);

// Formatear fecha y hora
const formattedDate = lastModified.toLocaleString(); 
// Ejemplo: "27/9/2025, 14:35:22"

// Insertar en el span
document.getElementById("lastmodified").textContent = "Last Modification: " + formattedDate;

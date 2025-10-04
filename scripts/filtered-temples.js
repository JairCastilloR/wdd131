
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



const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Trujillo Peru",
    location: "Trujillo, Peru",
    dedicated: "2015, June, 21",
    area: 28200,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/trujillo-peru-temple/trujillo-peru-temple-3712.jpg"
  },
  {
    templeName: "Arequipa Peru",
    location: "Arequipa, Peru",
    dedicated: "2019, December, 15",
    area: 26969,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/arequipa-peru-temple/arequipa-peru-temple-7186-main.jpg"
  },
  {
    templeName: "Mesa Arizona",
    location: "Mesa, Arizona, United States",
    dedicated: "1927, October, 23-26",
    area: 75000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/mesa-arizona-temple/mesa-arizona-temple-22546.jpg"
  },
  {
    templeName: "San Diego California",
    location: "San Diego, California, United States",
    dedicated: "1993, April, 25-30",
    area: 72000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/san-diego-california-temple/san-diego-california-temple-9060.jpg"
  }
  // Add more temple objects here...
];

createTempleCards(temples);
const homeBtn = document.getElementById("homeBtn");
const oldBtn = document.getElementById("oldBtn");
const newBtn = document.getElementById("newBtn");
const smallBtn = document.getElementById("smallBtn");
const largeBtn = document.getElementById("largeBtn");

homeBtn.addEventListener("click", () => {
  createTempleCards(temples);
});
oldBtn.addEventListener("click", () => {
  createTempleCards(temples.filter(temple => {
    const dedicatedYear = new Date(temple.dedicated).getFullYear();
    return dedicatedYear < 1900;
  }));
});
newBtn.addEventListener("click", () => {
  createTempleCards(temples.filter(temple => {
    const dedicatedYear = new Date(temple.dedicated).getFullYear();
    return dedicatedYear > 2000;
  }));
});
smallBtn.addEventListener("click", () => {
  createTempleCards(temples.filter(temple => {
    return temple.area < 10000;
  }));
});
largeBtn.addEventListener("click", () => {
  createTempleCards(temples.filter(temple => {
    return temple.area >= 90000;
  }));
});

function createTempleCards(Filteredtemples) {
    document.querySelector(".temples").innerHTML = "";
    Filteredtemples.forEach((temple) => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let location = document.createElement("p");
        let dedicated = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".temples").appendChild(card);
    });
}


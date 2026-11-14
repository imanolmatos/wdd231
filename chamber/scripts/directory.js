//DATES
let current = document.querySelector("#currentyear");
let lastM = document.querySelector("#last");

let today = new Date();
let lastModif = new Date(document.lastModified);
let formatedLast = lastModif.toLocaleString("en-US", { timeZoneName: "short" });

current.innerHTML = today.getFullYear();
lastM.innerHTML = formatedLast;

// Hamburguer 

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
const title = document.querySelector("#page-title");


hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
    title.classList.toggle("open");
});


//navegation updated

const navegationUpdated = document.querySelectorAll(".nav-link");
navegationUpdated.forEach(link =>
    link.addEventListener("click", () => {
        navegationUpdated.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    })
);


// directory

const url = "data/members.json";
const cards = document.querySelector("#directory");
// Create an async function named "getProphetData" that uses await fetch() to fetch data from the JSON source URL.
async function getMembersData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data.members);  
    displayMembers(data.members);
}

getMembersData();

const displayMembers = (members) => {
    members.forEach((member) => {
        const card = document.createElement("section");
        const name = document.createElement("h3");
        const img = document.createElement("img");
        const information = document.createElement("div");
        const address = document.createElement("p");
        const phone = document.createElement("p");
        const url = document.createElement("p");
        const level = document.createElement("p");
        const email = document.createElement("p");
        name.textContent = `${member.name}`;
        address.textContent = `Address: ${member.address}`;
        phone.textContent = `Phone: ${member.phone}`;
        url.textContent = `Url: ${member.url}`;
        level.textContent = `Level: ${member.level}`;
        email.textContent = `Email: ${member.email}`;
        img.setAttribute("src", member.photo);
        img.setAttribute("alt", `a photo of ${member.name}`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "120");
        img.setAttribute("height", "160");
        card.appendChild(name);
        card.appendChild(img);
        card.appendChild(information);
        information.appendChild(email);
        information.appendChild(address);
        information.appendChild(phone);
        information.appendChild(url);
        information.appendChild(level);

        cards.appendChild(card);
    });

}

const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const directory = document.querySelector("#directory");


gridButton.addEventListener("click", () => {
    directory.classList.remove("filterList");
    gridButton.classList.add("buttonActivated");
    listButton.classList.remove("buttonActivated");

});



listButton.addEventListener("click", () => {
    directory.classList.add("filterList");
    gridButton.classList.remove("buttonActivated");
    listButton.classList.add("buttonActivated");

});



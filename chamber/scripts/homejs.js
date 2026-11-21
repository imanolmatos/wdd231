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
const title = document.querySelector(".page-title");


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





const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('.weather-icon');
const captionDesc = document.querySelector('figcaption');
const forecast = document.querySelector('#forecast');

const myKey = "f97a905164354e2e72e3fe063c61ca5e";
const MyLat = 18.4532
const MyLong =  -70.7349
const imgUrl = "https://openweathermap.org/img/wn/"

const urlApi = `https://api.openweathermap.org/data/2.5/weather?lat=${MyLat}&lon=${MyLong}&appid=${myKey}&units=imperial`
const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${MyLat}&lon=${MyLong}&appid=${myKey}&units=imperial`;

async function apiFetch() {
    try {
        const response = await fetch(urlApi);
        if (response.ok) {
           const data = await response.json();
           console.log(data)
           displayResults(data); 
        } else {
            throw Error(await response.text());
        } 
        }catch (error) {
            console.log(error);
        }
    }


async function apiForecast() {
    try {
        const response = await fetch(urlForecast);
        if (response.ok) {
           const data = await response.json();
           console.log(data)
           displayForecast(data); 
        } else {
            throw Error(await response.text());
        } 
        }catch (error) {
            console.log(error);
        }
    }


function displayResults(data) {

    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    weatherIcon.setAttribute("src", `${imgUrl}${data.weather[0].icon}@2x.png`);
     weatherIcon.setAttribute("alt", data.weather[0].description);
    captionDesc.innerHTML = data.weather[0].description;
}

function displayForecast(data) {
    const forecastDays = data.list.filter(item => (item.dt_txt.includes("12:00:00"))).slice(0,3);
    forecastDays.forEach(day => {
    const date = new Date(day.dt*1000);
    const dayName = date.toLocaleString("en-US", {weekday: "long"});
   const p = document.createElement("p");
     p.innerHTML = `${dayName}:${day.main.temp} &deg;F`;
   forecast.appendChild(p);
    });

}

    apiFetch();
    apiForecast();

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
        const randomMembers = members.filter(member => member.level.includes("Gold") || member.level.includes("Silver"));
       const  randomMembersSort = randomMembers.sort(() => Math.random() - 0.5).slice(0,3);
        randomMembersSort.forEach((member) => {
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

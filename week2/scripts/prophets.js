const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');
// Create an async function named "getProphetData" that uses await fetch() to fetch data from the JSON source URL.
async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data.prophets);  
    displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        const card = document.createElement("section");
        const fullName = document.createElement("h2");
        const dateBirth = document.createElement("h3");
        const placeBirth = document.createElement("h3");
        const portrait = document.createElement("img");
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        dateBirth.textContent =`Date of Birth: ${prophet.birthdate}`;
        placeBirth.textContent =`Place of Birth: ${prophet.birthplace}`;
        portrait.setAttribute("src",prophet.imageurl);
        portrait.setAttribute("alt",`a portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute("loading","lazy");
        portrait.setAttribute("width","340");
        portrait.setAttribute("height","440");
        card.appendChild(fullName);
        card.appendChild(dateBirth);
        card.appendChild(placeBirth);    
        card.appendChild(portrait);     
        cards.appendChild(card);
    });

}



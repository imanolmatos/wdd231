const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const myKey = "f97a905164354e2e72e3fe063c61ca5e";
const MyLat = 49.75010025157265
const MyLong =  6.637036198357556
const imgUrl = "https://openweathermap.org/img/wn/"

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${MyLat}&lon=${MyLong}&appid=${myKey}&units=imperial`


async function apiFetch() {
    try {
        const response = await fetch(url);
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


function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    weatherIcon.setAttribute("src", `${imgUrl}${data.weather[0].icon}@2x.png`);
     weatherIcon.setAttribute("alt", data.weather[0].description);
    captionDesc.innerHTML = data.weather[0].description;
}





    apiFetch();

// async function fetchImage() {
//     try {
//         const response = await fetch("flowers.jpg");
//         if (!response.ok) {
//             throw new Error("Nework response was not OK");    
//         }
//         const myBlob = await response.blob();
//         myImage.src = URL.createObjectURL(myBlob);
//     } catch (error) {
//         conseole.error("There has been a problem with your fetch operation:",error);
//     }
// }


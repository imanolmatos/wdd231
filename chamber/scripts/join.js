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



hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});


//navegation updated

const navegationUpdated = document.querySelectorAll(".nav-link");
navegationUpdated.forEach(link =>
    link.addEventListener("click", () => {
        navegationUpdated.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    })
);

// Join 

const timestamp = document.getElementById("timestamp");
const lastOpen = new Date();
timestamp.value = lastOpen.toLocaleString("en-US", { timeZoneName: "short" });
// NP
const modalNp = document.querySelector("#modal-np");
const openModalN = document.querySelector('[data-modal="modal-np"]');
const closeModalN = document.querySelector("#modal-np .close-modal-button");

openModalN.addEventListener("click",() => {
    modalNp.showModal();
});

closeModalN.addEventListener("click",() => {
    modalNp.close();
})

// Bronze
const modalBronze = document.querySelector("#modal-bronze");
const openModalB = document.querySelector('[data-modal="modal-bronze"]');
const closeModalB = document.querySelector("#modal-bronze .close-modal-button");

openModalB.addEventListener("click",() => {
    modalBronze.showModal();
});

closeModalB.addEventListener("click",() => {
    modalBronze.close();
})

//Silver
const modalSilver = document.querySelector("#modal-silver");
const openModalS = document.querySelector('[data-modal="modal-silver"]');
const closeModalS = document.querySelector("#modal-silver .close-modal-button");

openModalS.addEventListener("click",() => {
    modalSilver.showModal();
});

closeModalS.addEventListener("click",() => {
    modalSilver.close();
})


//Gold
const modalGold = document.querySelector("#modal-gold");
const openModalG = document.querySelector('[data-modal="modal-gold"]');
const closeModalG = document.querySelector("#modal-gold .close-modal-button");

openModalG.addEventListener("click",() => {
    modalGold.showModal();
});

closeModalG.addEventListener("click",() => {
    modalGold.close();
})


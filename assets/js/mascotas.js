let dataMascotas = {
    1: {
        imgUrl: "./assets/img/perrito1.jpg",
        name: "Firulais",
        age: "5 meses",
        personality: "Juguetón y alegre",
        story: "Firulais solía vivir con una familia grande, pero ahora busca un hogar tranquilo donde disfrutar sus días sin estrés.",
    },
    2: {
        imgUrl: "../img/gato1.jpg",
        name: "Luna",
        age: "6 meses",
        personality: "Curiosa y cariñosa",
        story: "Luna fue rescatada de las calles y ahora busca un hogar lleno de amor y cuidados.",
    },
    3: {
        imgUrl: "../img/perrito2.jpg",
        name: "Rocky",  
        age: "1 año",
        personality: "Protector y leal",
        story: "Rocky es un perro que ha vivido en un refugio y está listo para encontrar a su familia definitiva.",
    },
    4: {
        imgUrl: "../img/gato2.jpg",
        name: "Bella",
        age: "6 meses",
        personality: "Juguetona y traviesa",
        story: "Bella es una gatita llena de energía que busca un hogar donde pueda explorar y jugar todo el día.",
    },
    5: {
        imgUrl: "../img/perrito3.jpg",
        name: "Mia",
        age: "7 meses",
        personality: "Amigable y sociable",
        story: "Mia es un perrita que adora la compañía humana y está buscando una familia que le brinde mucho cariño.",
    },
    6: {
        imgUrl: "../img/gato3.jpg",
        name: "Kira",
        age: "1 año",
        personality: "Tranquilo y observador",
        story: "Kira es un gatita que disfruta de la tranquilidad del hogar y busca un lugar donde pueda sentirse seguro.",
    },
    7: {
        imgUrl: "../img/perrito4.jpg",
        name: "Coco",    
        age: "6 meses", 
        personality: "Curioso y juguetón",
        story: "Toby es un cachorro lleno de energía que está listo para encontrar a su familia para toda la vida.",
    },
    8: {
        imgUrl: "../img/gato4.jpg",
        name: "Mango",
        age: "8 meses",
        personality: "Cariñosa y dulce",
        story: "Mango es una gato que busca un hogar donde pueda recibir mucho amor y atención.",
    },
    9: { 
        imgUrl: "../img/perrito5.jpg",
        name: "Casper",
        age: "6 meses",
        personality: "jugueton y travieso",
        story: "casper es un perro que ha vivido con una familia, pero ahora busca un nuevo hogar donde pueda sentirse amado.",
    },
    10: {
        imgUrl: "../img/gato5.jpg",
        name: "Bob",
        age: "2 años",
        personality: "Juguetón y curioso",
        story: "Bob es un gato que adora explorar y jugar, y está buscando una familia que le brinde un hogar lleno de amor.",
    },
    11: {
        imgUrl: "../img/perrito6.jpg",
        name: "Rex",
        age: "1 año",
        personality: "Amigable y sociable",
        story: "Rex es un perro que disfruta de la compañía humana y está buscando una familia que le brinde mucho cariño.",
    },
    12: {
        imgUrl: "../img/gato6.jpg",
        name: "Figaro",
        age: "3 años",
        personality: "Tranquilo y observador",
        story: "Figaro es un gato que disfruta de la tranquilidad del hogar y busca un lugar donde pueda sentirse seguro.",
    },
};

let selectedDogId = parseInt(localStorage.getItem("selectedDogId"));

// console.log(dataMascotas[selectedDogId]);

function displayDogInfo(dogId) {
    document.getElementById("dog-img").src = dataMascotas[dogId].imgUrl;
    document.getElementById("dog-name").innerText = `🐾 ${dataMascotas[dogId].name}`;
    
}

displayDogInfo(selectedDogId);
let dataMascotas = {
    1: {
        imgUrl: "../img/perrito1.jpg",
        name: "Firulais",
        age: "5 meses",
        personality: "Juguetón y alegre",
        history: "Firulais solía vivir con una familia grande, pero ahora busca un hogar tranquilo donde disfrutar sus días sin estrés.",
    },
    2: {
        imgUrl: "../img/gato1.jpg",
        name: "Luna",
        age: "3 años",
        personality: "Curiosa y cariñosa",
        history: "Luna fue rescatada de la calle y ahora busca un hogar donde pueda recibir todo el amor que merece.",
    },
    3: {
        imgUrl: "../img/perrito2.jpg",
        name: "Rocky",
        age: "1 año",
        personality: "Protector y leal",
        history: "Rocky es un perro valiente que siempre está dispuesto a cuidar de su familia. Busca un hogar donde pueda sentirse seguro.",
    },
    4: {
        imgUrl: "../img/gatito2.jpg",
        name: "Bella",
        age: "6 meses",
        personality: "Dulce y juguetona",
        history: "Bella es una gatita llena de energía que adora jugar con pelotas y perseguuir luces. Busca un hogar donde pueda divertirse y recibir mucho cariño.",
    },
    5: {
        imgUrl: "../img/perrita3.jpg",
        name: "Max",
        age: "2 años",
        personality: "Tranquilo y amigable",
        history: "Max es un perro calmado que disfruta de paseos largos y momentos de relajación. Busca un hogar donde pueda vivir en paz.",
    },
    6: {
        imgUrl: "../img/gatito3.jpg",
        name: "Milo",
        age: "4 años",
        personality: "Independiente pero cariñoso",
        history: "Milo es un gato que sabe lo que quiere. Aunque es independiente, le encanta acurrucarse en las noches. Busca un hogar donde pueda ser él mismo.",
    },
    7: {
        imgUrl: "../img/perrito4.jpg",
        name: "Toby",
        age: "8 meses",
        personality: "Curioso y juguetón",
        history: "Toby es un cachorro lleno de energía que adora explorar su entorno. Busca un hogar donde pueda crecer y aprender.",
    },
    8: {
        imgUrl: "../img/gatitonaranja.png",
        name: "Simba",
        age: "1 año",
        personality: "Valiente y juguetón",
        history: "Simba es un gato aventurero que siempre está buscando nuevas experiencias. Busca un hogar donde pueda sentirse libre y amado.",
    },
    9: {
        imgUrl: "../img/perrito5.jpg",
        name: "Charlie",
        age: "3 años",
        personality: "Amigable y sociable",
        history: "Charlie es un perro que se lleva bien con todos. Le encanta hacer nuevos amigos y busca un hogar donde pueda compartir su alegría.",
    },
    10: {
        imgUrl: "../img/gatito5.jpg",
        name: "Nala",
        age: "2 años",
        personality: "Cariñosa y juguetona",
        history: "Nala es una gata que adora recibir mimos y jugar con sus dueños. Busca un hogar donde pueda sentirse segura y querida.",
    },
    11: {
        imgUrl: "../img/perrito6.jpg",
        name: "Buddy",
        age: "4 años",
        personality: "Leal y protector",
        history: "Buddy es un perro que siempre está atento a su entorno. Busca un hogar donde pueda cuidar de su familia y sentirse amado.",
    },
    12: {
        imgUrl: "../img/gatito6.jpg",
        name: "Coco",
        age: "5 meses",
        personality: "Juguetona y curiosa",
        history: "Coco es una gatita llena de energía que adora explorar y jugar. Busca un hogar donde pueda crecer feliz y saludable.",
    },
};

let selectedDogId = parseInt(localStorage.getItem("selectedDogId"));

// Si no hay nada en localStorage, usamos 1 como valor por defecto
if (!selectedDogId) {
    selectedDogId = 1;
}

// Función que muestra la info
function displayDogInfo(dogId) {
    let mascota = dataMascotas[dogId];

    if (!mascota) {
        document.getElementById("dog-info").innerHTML = "<p>Mascota no encontrada 🐾</p>";
        return;
    }

    document.getElementById("dog-img").src = mascota.imgUrl;
    document.getElementById("dog-name").innerText = `🐾 ${mascota.name}`;
    document.getElementById("dog-age").innerText = `Edad: ${mascota.age}`;
    document.getElementById("dog-personality").innerText = `Personalidad: ${mascota.personality}`;
    document.getElementById("dog-history").innerText = `Historia: ${mascota.history}`;
}

// 👇 en lugar de mostrar siempre la 1, mostramos la que esté guardada
displayDogInfo(selectedDogId);

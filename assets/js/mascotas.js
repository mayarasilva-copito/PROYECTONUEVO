let dataMascotas = {
    1: {
        imgUrl: "../img/perrito1.jpg",
        name: "Firulais",
        age: "5 meses",
        personality: "Juguetón y alegre",
        story: "Firulais solía vivir con una familia grande, pero ahora busca un hogar tranquilo donde disfrutar sus días sin estrés.",
        status: "Disponible para adopción 💕",
    },
    2: {
        imgUrl: "../img/gato1.jpg",
    }
}

let selectedDogId = parseInt(localStorage.getItem("selectedDogId"));

// console.log(dataMascotas[selectedDogId]);

function displayDogInfo(dogId) {
    document.getElementById("dog-img").src = dataMascotas[dogId].imgUrl;
    document.getElementById("dog-name").innerText = `🐾 ${dataMascotas[dogId].name}`;
    
}

displayDogInfo(selectedDogId);
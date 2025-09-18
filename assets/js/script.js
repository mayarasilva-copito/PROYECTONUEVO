let dogsData = [
    {
        id: 1,
        imgUrl: "./assets/img/perrito1.jpg",
        name: "Firulais",
    },
    {
        id: 2,
        imgUrl: "./assets/img/gato1.jpg",
        name: "Luna",
    },
    {
        id: 3,
        imgUrl: "./assets/img/perrito2.jpg",
        name: "Rocky",
    },
    {
        id: 4,
        imgUrl: "./assets/img/gatito2.jpg",
        name: "Bella",
    },
    {
        id: 5,
        imgUrl: "./assets/img/perrita3.jpg",
        name: "Mia",
    },
    {
        id: 6,
        imgUrl: "assets/img/gatito3.jpg",
        name: "Kira",
    },
    {
        id: 7,
        imgUrl: "./assets/img/perrito4.jpg",
        name: "Coco",
    },
    {
        id: 8,
        imgUrl: "./assets/img/gatitonaranja.png",
        name: "Mango",
    },
    {
        id: 9,
        imgUrl: "./assets/img/perrito5.jpg",
        name: "Casper",
    },
    {
        id: 10,
        imgUrl: "./assets/img/gatito5.jpg",
        name: "Bob",
    },
    {
        id: 11,
        imgUrl: "./assets/img/perrito6.jpg",
        name: "Rex",
    },
    {
        id: 12,
        imgUrl: "./assets/img/gatito6.jpg",
        name: "Figaro",
    },

]

let cardContainer = document.getElementById("dog-card-container");

for (let i = 0; i < dogsData.length; i++) {
    cardContainer.innerHTML += `
        <div class="col-12 col-md-3">
            <div class="card perri">
                <img
                    src="${dogsData[i].imgUrl}"
                    class="card-img-top"
                    alt="${dogsData[i].name}"
                />
                <div class="card-body text-center">
                <h5 class="card-title">${dogsData[i].name}</h5>
                <a
                    href="./assets/html/mascotas.html"
                    class="btn btn-primary dog-btn"
                    id="perro-${dogsData[i].id}"
                    >Adoptame</a
                >
                </div>
            </div>
        </div>

    `;
}

document.querySelectorAll(".dog-btn").forEach(button => {
    button.addEventListener("click", () => {
        // console.log("Botón clickeado:", button.id);
        let dogId = button.id.split("-")[1];
        localStorage.setItem("selectedDogId", dogId);
    })
})

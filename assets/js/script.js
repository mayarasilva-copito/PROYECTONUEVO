let dogsData = [
    {
        id: 1,
        imgUrl: "../img/perrito1.jpg",
        name: "Firulais",
    },
    {
        id: 2,
        imgUrl: "../img/perrito2.jpg",
        name: "Luna",        
    },
    {
        id: 3,
        imgUrl: "../img/perrito3.jpg",  
        name: "Rocky",
    },
    {
        id: 4,
        imgUrl: "../img/perrito4.jpg", 
        name: "Bella",     
    },
    {
        id: 5,
        imgUrl: "../img/perrito5.jpg", 
        name: "Mia",     
    },
    {
        id: 6,
        imgUrl: "../img/perrito6.jpg",
        name: "Kira",
    },
    {
        id: 7,  
        imgUrl: "../img/perrito7.jpg",
        name: "Coco",
    },
    {
        id: 8,
        imgUrl: "../img/perrito8.jpg",
        name: "Mango",
    },
    {
        id: 9,  
        imgUrl: "../img/perrito9.jpg",
        name: "Casper",
    },
    {
        id: 10, 
        imgUrl: "../img/perrito10.jpg",
        name: "Bob",
    },
    {
        id: 11,
        imgUrl: "../img/perrito11.jpg",
        name: "Rex",
    },
    {
        id: 12,
        imgUrl: "../img/perrito12.jpg",
        name: "Figaro",
    },

]

document.querySelectorAll(".dog-btn").forEach(button => {
    button.addEventListener("click", () => {
        // console.log("Botón clickeado:", button.id);
        let dogId = button.id.split("-")[1];
        localStorage.setItem("selectedDogId", dogId);
    })
})

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
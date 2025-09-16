let dogsData = [
    {
        id: 1,
        imgUrl: "../img/perrito1.jpg",
        name: "Firulais",
    }
]

document.querySelectorAll(".dog-btn").forEach(button => {
    button.addEventListener("click", () => {
        // console.log("Botón clickeado:", button.id);
        let dogId = button.id.split("-")[1];
        localStorage.setItem("selectedDogId", dogId);
    })
})


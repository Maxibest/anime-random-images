 const btn = document.querySelector("#btn");
const anime_img = document.getElementById("img");

btn.addEventListener("click", () => {
    fetch("https://api.nekosapi.com/v3/images/random?limit=1")
    .then(res => res.json())
    .then(data => {
        const imageUrl = data.items[0].image_url;
        anime_img.src = imageUrl;
    })
    .catch(error => console.error('Erreur lors de la récupération des données :', error));
});
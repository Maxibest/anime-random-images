 const btn = document.querySelector("#btn");
const anime_img = document.getElementById("img");

btn.addEventListener("click", () => {
    fetch("https://nekos.best/api/v2/hug?amount=1", {
        method: "GET",
    }).then(res => res.json())
    .then(data => {
        const imageUrl = data.results[0].url;
        anime_img.src = imageUrl;
    })
    .catch(error => console.error('Erreur lors de la récupération des données :', error));
});
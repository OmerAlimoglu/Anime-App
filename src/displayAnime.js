import { fetchData } from "./fetchData.js";

const animeDivElement = document.createElement("div");
animeDivElement.classList.add("anime-div");
document.body.appendChild(animeDivElement);

export function displayAnime(animeList) {
  animeDivElement.innerHTML = ""; // clearAnimeDisplay();   // clear the previous anime list
  animeList.forEach((anime) => {
    const animeImg = anime.images.jpg.image_url;
    const animeName = anime.title_english || anime.title;
    const animeScore = anime.score;
    const animeSynopsis = anime.synopsis;
    const animeTrailer = anime.trailer_url;
    const animeItem = `
    <div class= "render-genre">
    <img src="${animeImg}" alt="anime image"/>
    <h2>${animeName}</h2>
    <p class="score">Score: ${animeScore}</p>
    <h3>Synopsis</h3>
    <p class="synopsis">${animeSynopsis}</p>             
    <p class="trailer">For trailer click: <a href="${animeTrailer}">here</a>.</p>
    </div>
    `;

    animeDivElement.innerHTML += animeItem;
  });
}

export function clearAnimeDisplay() {
  animeDivElement.innerHTML = "";
}

export function initializeAnimeDisplay() {
  console.log("called");
  const url = "https://api.jikan.moe/v4/top/anime";
  fetchData(url)
    .then((data) => {
      const animeList = data.data;
      displayAnime(animeList);
    })
    .catch((error) => {
      const errorElement = document.getElementById("error");
      errorElement.textContent = "Error: Network or HTTP error!";
    });
}

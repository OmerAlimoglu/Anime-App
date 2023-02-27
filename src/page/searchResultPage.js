import { fetchData } from "../fetchData.js";

export function renderClickedGenreResult() {
  let searchResultElement =
    document.document.querySelectorAll(".search-result");
  searchResultElement.addEventListener("click", () => {
    const animeId = searchResultElement.dataset.animeId;
    const animeUrl = `https://api.jikan.moe/v3/anime/${animeId}`;
    fetchData(animeUrl)
      .then((data) => {
        const anime = data;
        console.log(anime);
        const animeImg = anime.image_url;
        const animeName = anime.title_english || anime.title;
        const animeScore = anime.score;
        const animeHistory = anime.background;
        const animeSynopsis = anime.synopsis;
        const animeTrailer = anime.trailer_url;
        const searchResultPageElement = document.createElement("div");
        searchResultPageElement.classList.add("search-clicked-anime");
        document.body.appendChild(searchResultPageElement);
        searchResultPageElement.innerHTML = `
            <img src="${animeImg}" alt="anime image"/>
            <h2>${animeName}</h2>
            <p>Score: ${animeScore}</p>
            <p>Synopsis: ${animeSynopsis}</p>
            <p>Background: ${animeHistory}</p>           
            <p>For trailer click <a href="${animeTrailer}">here</a>.</p>
            `;
      })
      .catch((error) => {
        console.log(error);
      });
  });
}

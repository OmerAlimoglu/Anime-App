import { fetchData } from "./fetchData.js";
import { clearAnimeDisplay } from "./displayAnime.js";
import { renderClickedGenreResult } from "./page/searchResultPage.js";

function getSearchUrl(query) {
  return `https://api.jikan.moe/v4/anime?q=${query}`;
}

let searchResultsElement = document.getElementsByClassName("search-results")[0];

export function searchQuery(query) {
  const searchUrl = getSearchUrl(query);

  fetchData(searchUrl)
    .then((data) => {
      const animeList = data.data;

      searchResultsElement.innerHTML = "";
      animeList.forEach((anime) => {
        let searchResultElement = document.createElement("div");
        const animeName = anime.title_english || anime.title;
        const animeImage = anime.images.jpg.image_url;
        searchResultElement.classList.add("search-result");
        searchResultElement.innerHTML = `
        <img src="${animeImage}" alt="anime image"/>
        <div class="content">${animeName}</div>`;
        searchResultElement.addEventListener("click", () => {
          searchResultsElement.innerHTML = "";
          clearAnimeDisplay();
          renderClickedGenreResult(anime);
        });
        searchResultsElement.appendChild(searchResultElement);
      });
    })
    .catch((error) => {
      const errorElement = document.getElementById("error");
      errorElement.textContent = "Type error: undefined property!";
    });
}

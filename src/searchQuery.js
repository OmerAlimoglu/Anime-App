import { fetchData } from "./fetchData.js";

function getSearchUrl(query) {
  return `https://api.jikan.moe/v4/anime?q=${query}`;
}

let searchResultsElement = document.getElementsByClassName("search-results")[0];

export function searchQuery(query) {
  const searchUrl = getSearchUrl(query);
  // console.log(searchUrl);
  fetchData(searchUrl)
    .then((data) => {
      const animeList = data.data;
      const searchResults = animeList.map((anime) => {
        const animeName = anime.title_english || anime.title;
        // console.log(animeName);
        const animeImage = anime.images.jpg.image_url;
        // console.log(animeImage);
        return { name: animeName, image: animeImage };
      });
      // console.log(searchResults);
      searchResultsElement.innerHTML = "";
      searchResults.forEach((anime) => {
        let searchResultElement = document.createElement("div");
        searchResultElement.classList.add("search-result");
        searchResultElement.innerHTML = `
        <img src="${anime.image}" alt="anime image"/>
        <div class="content">${anime.name}</div>`;
        searchResultsElement.appendChild(searchResultElement);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

import { fetchData } from "./fetchData.js";

function getSearchUrl(query) {
  return `https://api.jikan.moe/v4/anime?q=${query}`;
}

export function searchQuery(query) {
  const searchUrl = getSearchUrl(query);
  fetchData(searchUrl)
    .then((data) => {
      const animeList = data.data;
      const searchResults = animeList.map((anime) => {
        const animeName = anime.title_english || anime.title;
        const animeImage = anime.images.jpg.image_url;
        return { name: animeName, image: animeImage };
      });
      console.log(searchResults);
      let searchResultsElement =
        document.getElementsByClassName("search-results")[0];
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

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
        return anime.title_english || anime.title;
      });
      console.log(searchResults);
      // Display search results in the UI
    })
    .catch((error) => {
      console.log(error);
    });
}

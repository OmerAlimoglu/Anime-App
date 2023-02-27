const BASE_URL = "https://api.jikan.moe/v4/anime";

export async function fetchData(url = BASE_URL) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }
  const data = await response.json();
  console.log(data);
  return data;
}

export async function fetchGenreData(url) {
  // const url = `https://api.jikan.moe/v4/anime?genres=${genreId}&limit=10`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }
  const genreData = await response.json();
  console.log(genreData);
  return genreData;
}

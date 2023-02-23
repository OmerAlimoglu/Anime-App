const url = "https://api.jikan.moe/v4/anime";
fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

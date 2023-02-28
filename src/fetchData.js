const BASE_URL = "https://api.jikan.moe/v4/anime";

export async function fetchData(url = BASE_URL) {
  const response = await fetch(url);
  try {
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    const errorElement = document.getElementById("error");
    errorElement.textContent = `Error: ${response.status} ${response.statusText}`;
  }
}

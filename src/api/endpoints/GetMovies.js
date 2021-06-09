import apiRequest from "../apiRequest.js";

async function getMovies() {
    const response = await apiRequest("http://localhost:5000/api/movie", "GET");
    if(response.ok && response.status !== 204) {
        return response.json();
    }
    return [];
}

export default getMovies;
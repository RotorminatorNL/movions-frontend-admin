import apiRequest from "../ApiRequest.js";

async function getMovies() {
    const response = await apiRequest("http://localhost:5000/api/movie", "GET");
    if(response.ok) {
        return response.json();
    }
    return null;
}

export default getMovies;
import apiRequest from "../ApiRequest.js";

async function getMovie(id) {
    const response = await apiRequest(`http://localhost:5000/api/movie/${id}`, "GET");
    if(response.ok) {
        return response.json();
    }
    return [];
}

export default getMovie;
import apiRequest from "../apiRequest.js";

async function getGenres() {
    const response = await apiRequest("http://localhost:5000/api/genre", "GET");
    if(response.ok && response.status !== 204) {
        return response.json();
    }
    return [];
}

export default getGenres();
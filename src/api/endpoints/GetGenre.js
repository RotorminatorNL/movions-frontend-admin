import apiRequest from "../ApiRequest.js";

async function getGenre(id) {
    const response = await apiRequest(`http://localhost:5000/api/genre/${id}`, "GET");
    if(response.ok) {
        return response.json();
    }
    return [];
}

export default getGenre;
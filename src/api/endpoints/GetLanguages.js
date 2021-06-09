import apiRequest from "../apiRequest.js";

async function getLanguages() {
    const response = await apiRequest("http://localhost:5000/api/language", "GET");
    if(response.ok && response.status !== 204) {
        return response.json();
    }
    return [];
}

export default getLanguages;
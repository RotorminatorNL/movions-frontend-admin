import apiRequest from "../ApiRequest.js";

async function getLanguage(id) {
    const response = await apiRequest(`http://localhost:5000/api/language/${id}`, "GET");
    if(response.ok) {
        return response.json();
    }
    return [];
}

export default getLanguage;
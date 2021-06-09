import apiRequest from "../apiRequest.js";

async function getPersons() {
    const response = await apiRequest("http://localhost:5000/api/person", "GET");
    if(response.ok && response.status !== 204) {
        return response.json();
    }
    return [];
}

export default getPersons;
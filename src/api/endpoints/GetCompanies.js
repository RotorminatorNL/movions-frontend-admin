import apiRequest from "../apiRequest.js";

async function getCompanies() {
    const response = await apiRequest("http://localhost:5000/api/company", "GET");
    if(response.ok && response.status !== 204) {
        return response.json();
    }
    return [];
}

export default getCompanies;
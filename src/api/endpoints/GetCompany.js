import apiRequest from "../ApiRequest.js";

async function getCompanies(id) {
    const response = await apiRequest(`http://localhost:5000/api/company/${id}`, "GET");
    if(response.ok) {
        return response.json();
    }
    return [];
}

export default getCompanies;
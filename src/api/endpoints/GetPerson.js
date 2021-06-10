import apiRequest from "../ApiRequest.js";

async function getPerson(id) {
    const response = await apiRequest(`http://localhost:5000/api/person/${id}`, "GET");
    if(response.ok) {
        return response.json();
    }
    return [];
}

export default getPerson;
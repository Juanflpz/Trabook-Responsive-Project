async function fetchDataDeals(endpoint) {
    const baseUrl = 'http://localhost:4001/api/destinations/';
    const url = `${baseUrl}${endpoint}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

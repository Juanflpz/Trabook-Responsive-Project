async function fetchDataDeals(endpoint) {
    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error(`HTTP error! status CO: ${response.status}`);
      }else{
        console.info('Response CO:', response); // Log the data
      }
  
      const data = await response.json(); // Parse JSON response
      console.log('Fetched Deals Data CO:', data); // Log the data
  
      return data; // Return the parsed data
    } catch (error) {
      console.error('Error fetching data CO:', error);
    }
}

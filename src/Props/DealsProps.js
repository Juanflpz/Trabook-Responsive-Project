import React, { useState, useEffect } from 'react';
import * as config from '../config'; 

const DealsProps = ({ endpoint }) => {
const [data, setData] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const fetchedData = await config.fetchDataDeals(endpoint);
        console.info('fetchedData DP:', fetchedData);
        setData(fetchedData); // Set the data in the state
      } catch (error) {
        console.error('Error fetching data DP:', error);
      }
    }

    loadData();
  }, [endpoint]);


  return (
    <div>
      {data.map((item) => (
        <p key={item.id}>{item.name}</p> // Assuming you have an 'id' property
      ))}
    </div>
  );
};

export default DealsProps;
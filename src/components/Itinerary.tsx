import "./Itinerary.css";
import React, { useState, useEffect } from "react";

function Itinerary() {
  const [attractions, setAttractions] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const result = fetch("/Attractions.json");
      setAttractions(result);
    };
    fetchData();
  }, []);

  return (
    <div>
      {attractions.length === 0 ? (
        <p>Loading...</p>
      ) : (
        attractions.sgdata.map((attraction, Name) => (
          <p key={Name}>{attraction}</p>
        ))
      )}
    </div>
  );
}

export default Itinerary;

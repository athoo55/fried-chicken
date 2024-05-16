import { dummyData } from "../Store";
import { useState } from "react";
import React from "react";

export default function RestaurantForm(restAdd){
     const [name, setName] = useState("");
     const [location, setLocation] = useState("");
     const [rate, setRate] = useState(0);

     const handleFormSubmit = (event) => {
       event.preventDefault();
       handleAdd(name, location, rate);
       setName("");
       setLocation("");
       setRate(0);
     };


    return (
      <div>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="name">Name</label>
          <input
            data-testid="restaurant-name-input"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="location">Location</label>
          <input
            data-testid="restaurant-location-input"
            type="text"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <label >Rating</label>
          
        </form>
      </div>
    );
}
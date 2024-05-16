import React from "react";

import RestaurantList from "./RestaurantList";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function RestaurantCard({ data, updateRate, name, location }) {
  const handelUpdateRate = () => {
    updateRate(newRate);
  };

  return (
    <>
      <div>
        <h1 data-testid="restaurant-name">{name}</h1>
        <h3 data-testid="restaurant-location">{location}</h3>
        <link to={`/restaurantDetails/${data.id}`}><Button>More Details</Button></link>
      </div>
    </>
  );
}

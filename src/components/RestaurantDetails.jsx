import { Link } from "react-router-dom";
import RestaurantList from "./RestaurantList";


const RestaurantDetails = (name, location, id,data) => {
   


  return (
    <div>

        <div>
            <Link to='/'> Back to Cards </Link>
        </div>


        <div>
            <h1>{data[id].name}</h1>
            <h2>{data[id].location}</h2>
            <p>More details will be added soon!</p>
        </div>




    </div>  
  )
}
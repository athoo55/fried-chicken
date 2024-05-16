import RestaurantCard from './RestaurantCard';
import RestaurantForm from './RestaurantForm';
import { useState } from 'react';
import { dummyData } from '../Store';

function RestaurantList (){
    const [restList, setRestList] = useState(dummyData);

    //function to add rest
    const restAdd = (name,location, rate) => {
        if(name !='' && location != '' && rate != null){
            const newId = restList.length + 1;
            const newRestList = [...restList, {id: newId, name: name, location: location, rating: rate}]
            setRestList(newRestList)
            // console.log(newRestList)
        }

        const restUpdateRate = (index, newRate) => {
            const newRestList = [...restList];
            newRestList[index].rating = newRate
            setRestList(newRestList);
        }


    }

    return (
      <div data-testid="restaurants-list">
        {restList.map((e, index, location, name) => (
          <RestaurantCard
            name={name}
            location={location}
            data={e}
            updateRate={(newRate) => updateRate(index, newRate)}
          />
        ))}

        {restList.map((e, index, location, name) => (
          <RestaurantDetails
            index={id}
            name={name}
            location={location}
            data={e}
            updateRate={(newRate) => updateRate(index, newRate)}
          />
        ))}

        <RestaurantForm addRestaurant={restAdd} />
      </div>
    );



}
export default RestaurantList;
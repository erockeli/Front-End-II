import React from 'react'
import RestaurantForm from './addRestaurant'
import Restaurant from './restaurants'
import { Link } from 'react-router-dom'



const RestaurantCard = (props) =>{

    return(
<div>
    {RestaurantForm.name}
    <button onClick={() => Restaurant.deleteRestaurant(Restaurant.id)}>Delete</button>
    <Link to={`/restaurant/edit/${Restaurant.id}`}>Edit</Link>
</div>

    )

};

export default RestaurantCard
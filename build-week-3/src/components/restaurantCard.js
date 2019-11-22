import React from 'react'
import { Link } from 'react-router-dom'



const RestaurantCard = ({restaurant, deleterestaurant}) =>{

    return(
<div>
    {restaurant.name}
    <button onClick={() => deleterestaurant(restaurant.id)}>Delete</button>
    <Link to={`/restaurants/edit/${restaurant.id}`}>Edit</Link>
</div>

    )

};

export default RestaurantCard
import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth'
import AddRestaurant from './addRestaurant'


const Restaurant = (props) => {

    const [restaurantList, setRestaurantList] = useState([])

    useEffect (() => {
        axiosWithAuth().get('http://localhost:3000/api/restaurants')
    .then(res => {setRestaurantList(res.data);
    })
        .catch(err => console.log(err.response));
    }, [])


    const addRestaurant = restaurant => {
        axiosWithAuth().post('http://localhost:5000/api/friends', restaurant)
        .then(res => setRestaurantList(res.data))
        .catch(err => console.log(err.response));
    }

    return(
        <div>
            <h1>Restaurants</h1>
            <AddRestaurant addRestaurant={addRestaurant} />
        </div>
    )
}

export default Restaurant
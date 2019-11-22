import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth'
import ListRestaurant from './addRestaurant'
import RestaurantCard from "./restaurantCard"
import { Route, Redirect } from 'react-router-dom'

const Restaurant = (props) => {

    const [restaurantList, setRestaurantList] = useState([])

    useEffect (() => {
        axiosWithAuth().get(` https://restaurant-review-api.herokuapp.com/api/v1/restaurants`)
    .then(res => {setRestaurantList(res.data);
    })
        .catch(err => console.log(err.response));
    }, [])


    const addRestaurant = restaurant => {
        axiosWithAuth().post(`https://restaurant-review-api.herokuapp.com/api/v1/restaurants`, restaurant)
        .then(res => setRestaurantList(res.data))
        .catch(err => console.log(err.response));
    }

    const editRestaurant = restaurant => {
        axiosWithAuth().put(`https://restaurant-review-api.herokuapp.com/api/v1/restaurants/${restaurant.id}`, restaurant)
            .then(res =>{
                setRestaurantList(res.data)
                props.history.push("/restaurants")
            })
            .catch(err => console.log(err.response))
    };

    const deleteRestaurant = id => {
        console.log(id)
        axiosWithAuth().delete(`http://localhost:5000/api/restaurants/${id}`)
        .then(res => setRestaurantList(res.data))
            .catch(err => console.log(err.response))
    }
console.log(addRestaurant)
const test = "hello"
    return(
        <div>
            <h1>Restaurants</h1>
            <Route exact path= "/restaurants" render ={props =><ListRestaurant {...props} 
            submitRestaurant={addRestaurant} test={test}/>}/>
            
            {restaurantList.map(restaurant => {

                return <RestaurantCard key={restaurant.id} 
                        restaurant={restaurant} 
                        deleterestaurant={deleteRestaurant}/>
            })}
            <Route exact path= "/restaurants/edit/:id" render ={props =>{

                const currentRest= restaurantList.find(restaurant => 
                    restaurant.id == props.match.params.id)
                    if(!currentRest) {
                        return <Redirect to="restaurants"/>
                    }
            return <ListRestaurant {...props} 
            submitRestaurant={editRestaurant} 
            initalvalues={currentRest}/>}}/>
</div>
)}

export default Restaurant
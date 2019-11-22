import React, { useState } from 'react';

const RestaurantList = (props) => {
const [restaurant, setRestaurant] = useState( props.initalvalues ||
{name:"", 
street:"", 
city:"", 
phoneNumber:"",
website: "",
notes: ""

});
console.log(props)
const handleChange = event => {
    setRestaurant({...restaurant, [event.target.name]: event.target.value});
};

const handleSubmit = event => {
    event.preventDefault();
    props.submitRestaurant(restaurant);
    };
    

    return (
        <form onSubmit={handleSubmit}>
        <input name='name' placeholder="name" value={restaurant.name} onChange={handleChange} />
        <input name='street' placeholder="street" value={restaurant.email} onChange={handleChange} />
        <input name='phonenumber' placeholder="phonenumber" value={restaurant.age} onChange={handleChange} />
        <input name='website' placeholder="website" value={restaurant.age} onChange={handleChange} />
        <input name='notes' placeholder="Notes" value={restaurant.age} onChange={handleChange} />

        <button type='submit'>Add Restaurant</button>
        </form>
        );
        };
        
        export default RestaurantList; 
import axios from 'axios'
import API_URL from './mainService'

const BASE_PATH = '/api/restaurant/'

export async function getAllRestaurants() {
    // Retrieves all restaurans from API
    let restaurants
    try {
        const restaurantRoute = API_URL + BASE_PATH
        restaurants = await axios.get(restaurantRoute)
    } catch (err) {
        return {
            status: 'error',
            payload: err
        }
    }
    return restaurants
}

export async function getRestaurant(cnpjRestaurant) {
    // Retrieve a single restaurant from API by restaurant_id
    let restaurant = {}

    try {
        if (!cnpjRestaurant) throw "cnpj must be a valid number"
        
        const route = API_URL + BASE_PATH + cnpjRestaurant
        restaurant = await axios.get(route)

    } catch(err) {
        return {
            status: 'error',
            payload: err
        }
    }

    return restaurant
}
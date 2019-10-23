// import axios from 'axios'
// import API_URL from './mainService'

// const BASE_PATH = '/api/restaurant/'

export async function getAllRestaurants() {
    // Retrieves all restaurans from API
    // let restaurants
    // try {
    //     const restaurantRoute = API_URL + BASE_PATH
    //     restaurants = await axios.get(restaurantRoute)
    // } catch (err) {
    //     return {
    //         status: 'error',
    //         payload: err
    //     }
    // }

    let restaurants = [
        {
            "image": "https://nit.pt/wp-content/uploads/2019/04/5179b21fc1d50950b99b4eecaa48c614-754x394.jpg",
            "cnpj": "12345678",
            "name": "Mcdonalds",
            "description": "$$ - Burguers",
            "orderTime": "15-20 min"
        },
        {
            "image": "https://nit.pt/wp-content/uploads/2019/04/5179b21fc1d50950b99b4eecaa48c614-754x394.jpg",
            "cnpj": "12345677",
            "name": "Burguer King",
            "description": "$$ - Burguers",
            "orderTime": "15-20 min"
        },
        {
            "image": "https://nit.pt/wp-content/uploads/2019/04/5179b21fc1d50950b99b4eecaa48c614-754x394.jpg",
            "cnpj": "12345676",
            "name": "Girrafas",
            "description": "$$ - Burguers",
            "orderTime": "15-20 min"
        },
        {
            "image": "https://nit.pt/wp-content/uploads/2019/04/5179b21fc1d50950b99b4eecaa48c614-754x394.jpg",
            "cnpj": "12345675",
            "name": "Geleia",
            "description": "$$ - Burguers",
            "orderTime": "15-20 min"
        },
        {
            "image": "https://nit.pt/wp-content/uploads/2019/04/5179b21fc1d50950b99b4eecaa48c614-754x394.jpg",
            "cnpj": "12345674",
            "name": "Mcdonalds",
            "description": "$$ - Burguers",
            "orderTime": "15-20 min"
        }
    ]

    return restaurants
}

export async function getRestaurant(cnpjRestaurant) {
    // Retrieve a single restaurant from API by restaurant_id
    // let restaurant = {}

    // try {
    //     if (!cnpjRestaurant) throw "cnpj must be a valid number"
        
    //     const route = API_URL + BASE_PATH + cnpjRestaurant
    //     restaurant = await axios.get(route)

    // } catch(err) {
    //     return {
    //         status: 'error',
    //         payload: err
    //     }
    // }

    let restaurant = [
        {
            "image": "https://nit.pt/wp-content/uploads/2019/04/5179b21fc1d50950b99b4eecaa48c614-754x394.jpg",
            "cnpj": "12345678",
            "name": "Mcdonalds",
            "description": "$$ - Burguers",
            "orderTime": "15-20 min"
        },
        {
            "image": "https://nit.pt/wp-content/uploads/2019/04/5179b21fc1d50950b99b4eecaa48c614-754x394.jpg",
            "cnpj": "12345677",
            "name": "Burguer King",
            "description": "$$ - Burguers",
            "orderTime": "15-20 min"
        },
        {
            "image": "https://nit.pt/wp-content/uploads/2019/04/5179b21fc1d50950b99b4eecaa48c614-754x394.jpg",
            "cnpj": "12345676",
            "name": "Girrafas",
            "description": "$$ - Burguers",
            "orderTime": "15-20 min"
        },
        {
            "image": "https://nit.pt/wp-content/uploads/2019/04/5179b21fc1d50950b99b4eecaa48c614-754x394.jpg",
            "cnpj": "12345675",
            "name": "Geleia",
            "description": "$$ - Burguers",
            "orderTime": "15-20 min"
        },
        {
            "image": "https://nit.pt/wp-content/uploads/2019/04/5179b21fc1d50950b99b4eecaa48c614-754x394.jpg",
            "cnpj": "12345674",
            "name": "Mcdonalds",
            "description": "$$ - Burguers",
            "orderTime": "15-20 min"
        }
    ]

    return restaurant[cnpjRestaurant]
}
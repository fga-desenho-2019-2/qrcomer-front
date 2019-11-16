import { getAllRestaurants, getRestaurant, getRestaurantsByCategory, getRestaurantMenu, getRestaurantCategories, getItem, getShopping, getShoppingCategories } from './restaurantService'
import { getUser } from './userService'
import { requestOrder } from './orderService'

export default {
    getShopping,
    getAllRestaurants,
    getRestaurant,
    getUser,
    getRestaurantsByCategory,
    getRestaurantMenu,
    getRestaurantCategories,
    getItem,
    getShoppingCategories,
    requestOrder
}
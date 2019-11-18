import { getAllRestaurants, getRestaurant, getRestaurantsByCategory, getRestaurantMenu, getRestaurantCategories, getItem, getShopping, getShoppingCategories } from './restaurantService'
import { getUser, getCards, getSelectedCard, deleteCard } from './userService'
import { requestOrder, getOrders, changeRating } from './orderService'

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
    getCards,
    getSelectedCard,
    deleteCard,
    requestOrder, 
    getOrders, 
    changeRating
}
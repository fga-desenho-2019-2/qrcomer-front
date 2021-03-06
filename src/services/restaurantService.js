import axios from "axios";
import API_URL from "./mainService";

const BASE_PATH = "/api/restaurant/";

export async function getAllRestaurants(shoppingCnpj) {
    // Retrieves all restaurans from API
    let restaurants
    try {
        const restaurantRoute = API_URL + '/api/restaurants'
        restaurants = await axios.get(restaurantRoute)
        restaurants = restaurants.data
        restaurants = restaurants.filter(item => {
            return item.shopping == shoppingCnpj
        })

        console.log(restaurants)
    } catch (err) {
        return {
            status: 'error',
            payload: err
        }
    }

    return restaurants;
}

export async function getRestaurant(cnpjRestaurant) {
    // Retrieve a single restaurant from API by restaurant_id
    let restaurant = {}

    try {
        if (!cnpjRestaurant) throw "cnpj must be a valid number"

        const route = API_URL + '/api/restaurant/' + cnpjRestaurant
        restaurant = await axios.get(route)

    } catch (err) {
        return {
            status: 'error',
            payload: err
        }
    }

    return restaurant.data;
}

// export async function getRestaurantsByCategory() {

//     let restaurants = {}

//     try {
//         if (!cnpjRestaurants) throw "cnpj must be a valid number"

//         const route = API_URL + BASE_PATH + cnpjRestaurants
//         restaurants = await axios.get(route)

//     } catch (err) {
//         return {
//             status: 'error',
//             payload: err
//         }
//     }
//     // let restaurants = [{
//     //         category: 1,
//     //         cnpj: "743898765",
//     //         description: "Burgers",
//     //         image: [],
//     //         name: "Mc'Donalds",
//     //         note: 4.6,
//     //         shopping: "1232324",
//     //         wait_time: "00:15:00"
//     //     },
//     //     {
//     //         category: 1,
//     //         cnpj: "743898766",
//     //         description: "Burgers",
//     //         image: [],
//     //         name: "Mc'Donalds",
//     //         note: 4.6,
//     //         shopping: "1232324",
//     //         wait_time: "00:15:00"
//     //     }
//     // ];

//     return restaurants;
// }

export async function getRestaurantMenu(cnpjRestaurant) {
    let menu = [{
            id: 1,
            name: "Combo Big Mac",
            restaurantCNPJ: "0",
            details: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
            value: 22.19,
            img: require("@/assets/images/bigmac.svg"),
            category: "Hamburguer"
        },
        {
            id: 2,
            name: "Quarteirão",
            restaurantCNPJ: "0",
            details: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
            value: 22.1,
            img: require("@/assets/images/bigmac.svg"),
            category: "Hamburguer"
        },
        {
            id: 3,
            name: "Quarteirão",
            restaurantCNPJ: "0",
            details: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
            value: 22.1,
            img: require("@/assets/images/bigmac.svg"),
            category: "Hamburguer"
        },
        {
            id: 4,
            name: "Quarteirão",
            details: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
            value: 22.1,
            img: require("@/assets/images/bigmac.svg"),
            category: "Hamburguer"
        },
        {
            id: 5,
            name: "Quarteirão",
            restaurantCNPJ: "0",
            details: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
            value: 22.1,
            img: require("@/assets/images/bigmac.svg"),
            category: "Sorvete"
        },
        {
            id: 6,
            name: "Quarteirão",
            restaurantCNPJ: "0",
            details: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
            value: 22.1,
            img: require("@/assets/images/bigmac.svg"),
            category: "Sorvete"
        },
        {
            id: 7,
            name: "Quarteirão",
            details: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
            value: 22.1,
            img: require("@/assets/images/bigmac.svg"),
            category: "Sorvete"
        },
        {
            id: 8,
            name: "Quarteirão",
            restaurantCNPJ: "0",
            details: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
            value: 22.1,
            img: require("@/assets/images/bigmac.svg"),
            category: "Sorvete"
        },
        {
            id: 9,
            name: "Quarteirão",
            details: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
            value: 22.1,
            img: require("@/assets/images/bigmac.svg"),
            category: "Bebida"
        },
        {
            id: 10,
            name: "Quarteirão",
            restaurantCNPJ: "0",
            details: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
            value: 22.1,
            img: require("@/assets/images/bigmac.svg"),
            category: "Hamburguer"
        },
        {
            id: 11,
            name: "Quarteirão",
            restaurantCNPJ: "0",
            details: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
            value: 22.1,
            img: require("@/assets/images/bigmac.svg"),
            category: "Sorvete"
        },
        {
            id: 12,
            name: "Quarteirão",
            restaurantCNPJ: "0",
            details: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
            value: 22.1,
            img: require("@/assets/images/bigmac.svg"),
            category: "Sorvete"
        },
        {
            id: 13,
            name: "Quarteirão",
            restaurantCNPJ: "0",
            details: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
            value: 22.1,
            img: require("@/assets/images/bigmac.svg"),
            category: "Sorvete"
        }
    ];

    try {
        let itens
        let itemRoute = API_URL + '/api/items'
        itens = await axios.get(itemRoute)
        itens = itens.data
        itens = itens.filter(item => {
            return item.restaurant_cnpj == cnpjRestaurant
        })
        console.log(itens)
        console.log('getRestaurantMenu')
        return itens
    } catch {
        console.log('error')
    }

    return menu;
}

export async function getRestaurantCategories(cnpjRestaurant) {
    try {
        let itens
        let categories = []
        let itemRoute = API_URL + '/api/items'
        itens = await axios.get(itemRoute)
        itens = itens.data
        itens = itens.filter(item => {
            return item.restaurant_cnpj == cnpjRestaurant
        })
        for(let item of itens) {
            categories.push(item.category)
        }
        console.log(categories)
        let categoryRoute = API_URL + '/api/item/category'
        let allCategories = await axios.get(categoryRoute)

        allCategories = allCategories.data
        allCategories = allCategories.filter(item => {
            return categories.find(i => i == item.id)
        })

        console.log(allCategories)
        return allCategories
    } catch {
        console.log('error')
    }
}

export async function getItem(itemId) {
    let itens = [{
        category: "Hamburguer",
        details: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        id: 3,
        image: "http://0.0.0.0:8001/api/item-image/3",
        name: "Combo Big Mac",
        restaurant_cnpj: "743898765",
        sidedish: [{
            description: "Batatas Fritas",
            name: "Batata",
            qtd: 1,
            selected: false,
            value: 3.2
        }],
        value: 22.19
    }];
    try {
        let item
        let route = API_URL + '/api/item/' + itemId
        item = await axios.get(route)
        console.log(item.data)
        return item.data
    } catch {
        console.log('error')
    }
    return itens[itemId];
}

export async function getShopping(cnpj) {
    let shopping = {}
    try {
        if (!cnpj) {
            throw 'cnpj value must be passed'
        }
        let route = API_URL + '/api/shopping/' + cnpj
        shopping = await axios.get(route)
        console.log(shopping.data)
    } catch (err) {
        return {
            status: 'error',
            payload: err
        }
    }

    return shopping.data;
}

export async function getShoppingCategories() {
    let categories = [{
            name: "Fast Food",
            icon: require("../assets/images/categories/fastfood.png")
        },
        {
            name: "Japonesa",
            icon: require("../assets/images/categories/japones.png")
        },
        {
            name: "Mexicana",
            icon: require("../assets/images/categories/mexicana.png")
        },
        {
            name: "Pizza",
            icon: require("../assets/images/categories/pizzas.png")
        }
    ];
    return categories;
}

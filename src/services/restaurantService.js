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
            "description": "Burguer",
            "orderTime": "15-20 min",
            "note": "4.8",
            "price": "$$"
        }
    ]

    return restaurant[cnpjRestaurant]
}

export async function getRestaurantsByCategory() {
    let restaurants = [
        {
            "image": "https://nit.pt/wp-content/uploads/2019/04/5179b21fc1d50950b99b4eecaa48c614-754x394.jpg",
            "cnpj": "12345678",
            "name": "Mcdonalds",
            "description": "Burguer",
            "orderTime": "15-20 min",
            "note": "4.8",
            "price": "$$"
        },
        {
            "image": "https://nit.pt/wp-content/uploads/2019/04/5179b21fc1d50950b99b4eecaa48c614-754x394.jpg",
            "cnpj": "12345678",
            "name": "Burger King",
            "description": "Burguer",
            "orderTime": "15-20 min",
            "note": "4.8",
            "price": "$$"
        },
        {
            "image": "https://nit.pt/wp-content/uploads/2019/04/5179b21fc1d50950b99b4eecaa48c614-754x394.jpg",
            "cnpj": "12345678",
            "name": "Girrafas",
            "description": "Burguer",
            "orderTime": "15-20 min",
            "note": "4.8",
            "price": "$$"
        },
        {
            "image": "https://nit.pt/wp-content/uploads/2019/04/5179b21fc1d50950b99b4eecaa48c614-754x394.jpg",
            "cnpj": "12345678",
            "name": "Geleia",
            "description": "Burguer",
            "orderTime": "15-20 min",
            "note": "4.8",
            "price": "$$"
        },
        {
            "image": "https://nit.pt/wp-content/uploads/2019/04/5179b21fc1d50950b99b4eecaa48c614-754x394.jpg",
            "cnpj": "12345678",
            "name": "Madero",
            "description": "Burguer",
            "orderTime": "15-20 min",
            "note": "4.8",
            "price": "$$"
        },
    ]

    return restaurants
}

export async function getRestaurantMenu() {
    let menu = [
        {
            id:1,
            name: 'Combo Big Mac',
            restaurantCNPJ: '0',
            details: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
            value: 22.19,
            img: require('@/assets/images/bigmac.svg'),
            category: "Hamburguer"
        },
        {
            id:2,
            name: 'Quarteirão',
            restaurantCNPJ: '0',
            details: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
            value: 22.10,
            img: require('@/assets/images/bigmac.svg'),
            category: "Hamburguer"
        },
        {
            id:3,
            name: 'Quarteirão',
            restaurantCNPJ: '0',
            details: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
            value: 22.10,
            img: require('@/assets/images/bigmac.svg'),
            category: "Hamburguer"
        },
        {
            id:4,
            name: 'Quarteirão',
            details: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
            value: 22.10,
            img: require('@/assets/images/bigmac.svg'),
            category: "Hamburguer"
        },
        {
            id:5,
            name: 'Quarteirão',
            restaurantCNPJ: '0',
            details: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
            value: 22.10,
            img: require('@/assets/images/bigmac.svg'),
            category: "Sorvete"
        },
        {
            id:6,
            name: 'Quarteirão',
            restaurantCNPJ: '0',
            details: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
            value: 22.10,
            img: require('@/assets/images/bigmac.svg'),
            category: "Sorvete"
        },
        {
            id:7,
            name: 'Quarteirão',
            details: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
            value: 22.10,
            img: require('@/assets/images/bigmac.svg'),
            category: "Sorvete"
        },
        {
            id:8,
            name: 'Quarteirão',
            restaurantCNPJ: '0',
            details: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
            value: 22.10,
            img: require('@/assets/images/bigmac.svg'),
            category: "Sorvete"
        },
        {
            id:9,
            name: 'Quarteirão',
            details: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
            value: 22.10,
            img: require('@/assets/images/bigmac.svg'),
            category: "Bebida"
        },
        {
            id:10,
            name: 'Quarteirão',
            restaurantCNPJ: '0',
            details: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
            value: 22.10,
            img: require('@/assets/images/bigmac.svg'),
            category: "Hamburguer"
        },
        {
            id:11,
            name: 'Quarteirão',
            restaurantCNPJ: '0',
            details: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
            value: 22.10,
            img: require('@/assets/images/bigmac.svg'),
            category: "Sorvete"
        },
        {
            id:12,
            name: 'Quarteirão',
            restaurantCNPJ: '0',
            details: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
            value: 22.10,
            img: require('@/assets/images/bigmac.svg'),
            category: "Sorvete"
        },
        {
            id:13,
            name: 'Quarteirão',
            restaurantCNPJ: '0',
            details: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
            value: 22.10,
            img: require('@/assets/images/bigmac.svg'),
            category: "Sorvete"
        },
    ]

    return menu;
}

export async function getRestaurantCategories() {
    let categories = [
        {
            id: 0,
            name: "Bebida"
        },
        {
            id: 1,
            name: "Hamburguer"
        },
        {
            id: 2,
            name: "Sorvete"
        }
    ]

    return categories
}

export async function getItem(itemId) {
    let itens = [
        {
            id: 1,
            name: "Combo Big Mac",
            details: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
            value: 22.19,
            restaurantCNPJ: '0',
            img: require("@/assets/images/bigmac.svg"),
            category: "Hamburguer",
            sidedish: [{
              id: 0,
              name: "Batata",
              description: "Batatas Fritas",
              selected: false,
              value: 3.20,
              qtd: 1
            },
            {
              id: 1,
              name: "Refrigerante",
              description: "Coca Cola",
              selected: false,
              value: 5.20,
              qtd: 1
            },
            {
              id: 2,
              name: "Molho Especial",
              description: "Molho de Tomate",
              selected: false,
              value: 1.20,
              qtd: 0
            }
    ,
            {
              id: 3,
              name: "Salada",
              description: "Sala de Tomate",
              selected: false,
              value: 10.20,
              qtd: 0
            }],
          }
    ]
    return itens[itemId]
}

export async function getShopping() {
    // let shopping = {}
    // try {
    //     if (!cnpj) throw 'cnpj value must be passed'
    //     let route = API_URL + BASE_PATH + cnpj
    //     shopping = await axios.get(route)
    // } catch(err) {
    //     return {
    //         status: 'error',
    //         payload: err
    //     }
    // }

    let shopping = {
        name: "Shopping do Zé",
        city: "Brasília",
        state: "DF",
        neighborhood: "Rua do jão"
    }

    return shopping
}

export async function getShoppingCategories() {
    let categories = [
        {
            name: "Fast Food",
            icon: require('../assets/images/categories/fastfood.png')
        },
        {
            name: "Japonesa",
            icon: require('../assets/images/categories/japones.png')
        },
        {
            name: "Mexicana",
            icon: require('../assets/images/categories/mexicana.png')
        },
        {
            name: "Pizza",
            icon: require('../assets/images/categories/pizzas.png')
        }
    ]
    return categories
}
import axios from "axios";
import API_URL from "./mainService";

const BASE_PATH = "/api/restaurant/";

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

    // let restaurants = [{
    //         category: 1,
    //         cnpj: "743898765",
    //         description: "Burgers",
    //         image: [],
    //         name: "Mc'Donalds",
    //         note: 4.6,
    //         shopping: "1232324",
    //         wait_time: "00:15:00"
    //     },
    //     {
    //         category: 1,
    //         cnpj: "743898766",
    //         description: "Burgers",
    //         image: [],
    //         name: "Mc'Donalds",
    //         note: 4.6,
    //         shopping: "1232324",
    //         wait_time: "00:15:00"
    //     }
    // ];

    return restaurants;
}

export async function getRestaurant(cnpjRestaurant) {
    // Retrieve a single restaurant from API by restaurant_id
    let restaurant = {}

    try {
        if (!cnpjRestaurant) throw "cnpj must be a valid number"

        const route = API_URL + BASE_PATH + cnpjRestaurant
        restaurant = await axios.get(route)

    } catch (err) {
        return {
            status: 'error',
            payload: err
        }
    }

    // let restaurant = [{
    //     category: 1,
    //     cnpj: "743898765",
    //     description: "Burgers",
    //     image: "http://0.0.0.0:8001/api/restaurant-image/743898765",
    //     name: "Mc'Donalds",
    //     note: 4.6,
    //     shopping: "1232324",
    //     wait_time: "00:15:00"
    // }];

    return restaurant[cnpjRestaurant];
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

export async function getRestaurantMenu() {
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

    return menu;
}

export async function getRestaurantCategories() {
    let categories = [{
            id: 0,
            name: "Bebida"
        },
        {
            id: 1,
            name: "Sanduíches"
        },
        {
            id: 2,
            name: "Sorvetes"
        }
    ];

    return categories;
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
    return itens[itemId];
}

export async function getShopping() {
    let shopping = {}
    try {
        if (!cnpj) throw 'cnpj value must be passed'
        let route = API_URL + BASE_PATH + cnpj
        shopping = await axios.get(route)
    } catch (err) {
        return {
            status: 'error',
            payload: err
        }
    }

    // let shopping = {
    //     name: "Shopping do Zé",
    //     city: "Brasília",
    //     state: "DF",
    //     neighborhood: "Rua do jão"
    // };

    return shopping;
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
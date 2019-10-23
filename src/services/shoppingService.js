// import API_URL from './mainService'
// import axios from 'axios'

// const BASE_PATH = '/api/shopping/'

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
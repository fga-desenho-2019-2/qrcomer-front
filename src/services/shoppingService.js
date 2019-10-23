import API_URL from './mainService'
import axios from 'axios'

const BASE_PATH = '/api/shopping/'

export async function getShopping(cnpj) {
    let shopping = {}
    try {
        if (!cnpj) throw 'cnpj value must be passed'
        let route = API_URL + BASE_PATH + cnpj
        shopping = await axios.get(route)
    } catch(err) {
        return {
            status: 'error',
            payload: err
        }
    }

    return shopping
}
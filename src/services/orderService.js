import axios from 'axios'
import API_URL from './mainService'

export async function requestOrder(order) {
    let response = await axios.post( API_URL + '/api/order-bag', order)
    return response
}
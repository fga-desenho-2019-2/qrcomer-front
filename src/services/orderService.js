import axios from 'axios'

export async function requestOrder(order) {
    let response = await axios.post('http://localhost:5002/api/order-bag', order)
    return response
}
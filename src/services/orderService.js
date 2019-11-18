import axios from 'axios'
import API_URL from './mainService'

export async function requestOrder(order) {
    let response = await axios.post( API_URL + '/api/order-bag', order)
    return response
}

export async function getOrders() {
    let orders = [
        {
          "id": 1,
          "cod": 1,
          "value": 30.99,
          "cpf_user": "08684429680",
          "cnpj_restaurant": "63795282000180",
          "items": [
            {
              "id": 1,
              "name": "Sanduiche",
              "value": 19.99,
              "observation": "",
              "quantity": 3
            }
          ],
          "status": 3,
          "avaliation_description": null,
          "avaliation_number": null
        }
      ]
      return orders
}

import API_URL from './mainService'
import HttpClientBuilder from "../infra/HttpClientBuilder.js";

const client = HttpClientBuilder.buildClient({
  baseURL: API_URL
});

export async function requestOrder(order) {
    let response = await client.post('/api/order-bag', order)
    return response
}

export async function getOrders() {
  let userCpf = localStorage.getItem('user-cpf')
  let response = await client.get('/api/list-user-orders/' + userCpf + '/0')
  return response
}

export async function changeRating(id, avaliation) {
  let response = await client.put('/api/update-avaliation-order/' + id, avaliation)
  return response
}

// export async function getOrders() {
//     let orders = [
//         {
//           "id": 1,
//           "cod": 1,
//           "value": 30.99,
//           "cpf_user": "08684429680",
//           "cnpj_restaurant": "63795282000180",
//           "items": [
//             {
//               "id": 1,
//               "name": "Sanduiche",
//               "value": 19.99,
//               "observation": "",
//               "quantity": 3
//             }
//           ],
//           "status": 3,
//           "avaliation_description": null,
//           "avaliation_number": null
//         },
//         {
//           "id": 2,
//           "cod": 1,
//           "value": 30.99,
//           "cpf_user": "08684429680",
//           "cnpj_restaurant": "63795282000180",
//           "items": [
//             {
//               "id": 1,
//               "name": "Sanduiche",
//               "value": 19.99,
//               "observation": "",
//               "quantity": 3
//             }
//           ],
//           "status": 7,
//           "avaliation_description": null,
//           "avaliation_number": null
//         },
//         {
//           "id": 3,
//           "cod": 1,
//           "value": 30.99,
//           "cpf_user": "08684429680",
//           "cnpj_restaurant": "63795282000180",
//           "items": [
//             {
//               "id": 1,
//               "name": "Sanduiche",
//               "value": 19.99,
//               "observation": "",
//               "quantity": 3
//             }
//           ],
//           "status": 7,
//           "avaliation_description": null,
//           "avaliation_number": null
//         }
//       ]
//       return orders
// }


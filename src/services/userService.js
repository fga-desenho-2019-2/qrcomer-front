
export async function getUser() {
    let user = {
        name: "username",
        email: "user@email.com",
        telephone: "(XX) XXXXX-XXXX",
        password: "*********",
        cpf: "05333208107"
      }

  //   axios
  //     .get('https://api.coindesk.com/v1/bpi/currentprice.json')
  //     .then(response => {
  //       let user = response.data.bpi
  //     })
  //     .catch(error => {
  //       console.log(error)
  //       this.errored = true
  //     })
  //     .finally(() => this.loading = false)

    return user;
}

export async function getCards() {
  let cards = [
    {
      "id": 1,
      "number": "256",
      "cvv": "256",
      "validation": "2020-02-20",
      "holder_name": "teste",
      "cpf_cnpj": "98652105",
      "profile": [
          1
      ]
    },
    {
      "id": 2,
      "number": "256",
      "cvv": "256",
      "validation": "2020-02-20",
      "holder_name": "teste",
      "cpf_cnpj": "98652105",
      "profile": [
          1
      ]
    },
    {
      "id": 3,
      "number": "256",
      "cvv": "256",
      "validation": "2020-02-20",
      "holder_name": "teste",
      "cpf_cnpj": "98652105",
      "profile": [
          1
      ]
    },
    {
      "id": 4,
      "number": "256",
      "cvv": "256",
      "validation": "2020-02-20",
      "holder_name": "teste",
      "cpf_cnpj": "98652105",
      "profile": [
          1
      ]
    },
    {
      "id": 5,
      "number": "256",
      "cvv": "256",
      "validation": "2020-02-20",
      "holder_name": "teste",
      "cpf_cnpj": "98652105",
      "profile": [
          1
      ]
    }
  ]
  return cards
}

export async function getSelectedCard() {
  let card = {
    "id": 25,
    "number": "4242424242424242",
    "cvv": "123",
    "validation": "2020-02-20",
    "holder_name": "Fred",
    "cpf_cnpj": "98652105",
    "profile": [
        1
    ]
  }

  card.number = card.number.replace(/\d{12}/g, '**** **** **** ')
  card.cvv = card.cvv.replace(/\d+/, '***')

  return card
}

export async function deleteCard() {
  return true
}

import HttpClientBuilder from "../infra/HttpClientBuilder.js";
import API_URL from "./mainService.js";

export default class UserService {
    constructor() {
        this.client = HttpClientBuilder.buildClient({
            baseURL: API_URL
        });
    }

    async getUser(cpf) {
        let response = await this.client.get(`/get_user/${cpf}`);
        return response;
    }

    async editUser(cpf, params) {
        let body = {
            cpf: params.cpf,
            first_name: params.first_name,
            last_name: params.last_name,
            email: params.email
        }
        let response = await this.client.put(`/edit_user/${cpf}`,body);
        return response;
    }

    async editUserImage(params) {
        let body = {
            cpf: params.cpf,
            image: params.image
        }
        let response = await this.client.post(`/user/post_image`, body)
        return response;
    }

    async createCard(cpf, params) {
        let body = {
            number: params.number,
            cvv: params.cvv,
            validation: params.validation,
            holder_name: params.holder_name,
            cpf_cnpj: params.cpf_cnpj,
        }
        let response = await this.client.post(`/user/card/${cpf}`, body)
        return response;
    }
    
    async getCardsList(cpf) {
        let response = await this.client.get(`/user/user_cards/${cpf}`)
        return response;
    }

    async getCard(number) {
        let response = await this.client.get(`/user/card/${number}`)
        return response;
    }

    async deleteCard(number) {
        let response = await this.client.delete(`/user/delete_card/${number}`)
        return response;
    }
}

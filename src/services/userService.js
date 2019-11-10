
export async function getUser() {
    let user = {
        name: "username",
        email: "user@email.com",
        telephone: "(XX) XXXXX-XXXX",
        password: "*********",
        cpf: "XXX.XXX.XXX-XX"
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

export async function getSelectedCard(id) {
  let card = {
    "number": "**** **** **** 4242",
    "cvv": "***",
    "validation": "2020-02-20",
    "holder_name": "Fred",
    "cpf_cnpj": "98652105",
    "profile": [
        1
    ]
  }

  return card
}
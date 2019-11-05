
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
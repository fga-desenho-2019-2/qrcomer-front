function handleAmmount(qtd, index) {
    this.items[index].ammount = qtd;
    window.localStorage.setItem("order-bag", JSON.stringify(this.items));
}

function getItems() {
    this.items = JSON.parse(window.localStorage.getItem("order-bag"));
}

function removeItems() {
    this.items = window.localStorage.removeItem("order-bag")
}

export {
    handleAmmount,
    getItems,
    removeItems
}
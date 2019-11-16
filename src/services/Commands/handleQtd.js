function handleQtd(operation) {
    if (operation === "plus") this.qtd++;
    else if (operation === "minus" && this.qtd > 1) this.qtd--;
    this.$emit("changeQtd", this.qtd);
}


export {
    handleQtd,
}
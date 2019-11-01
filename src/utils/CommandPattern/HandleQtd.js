import HandleQtdModel from './HandleQtdModel';

export class QtdCommand {
    constructor() {
        this.backup;
    }

    execute(operation) {
        if (operation === "plus") this.qtd++;
        else if (operation === "minus" && this.qtd > 0) this.qtd--;

    }

    saveState() {
        this.backup = HandleQtdModel.qtd;
    }

    undo() {
        HandleQtdModel.qtd = this.backup;
    }
}
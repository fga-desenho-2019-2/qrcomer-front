import HandleQtdModel from './HandleQtdModel.vue';

export class QtdCommand {
    constructor(e) {
        this.backup;
        this.event = e;
    }

    execute(operation) {
        if (operation === "plus") HandleQtdModel.qtd++;
        else if (operation === "minus" && HandleQtdModel.qtd > 0) HandleQtdModel.qtd--;

    }

    saveState() {
        this.backup = HandleQtdModel.qtd;
    }

    undo() {
        HandleQtdModel.qtd = this.backup;
    }
}
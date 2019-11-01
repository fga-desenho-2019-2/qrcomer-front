import Vue from 'vue';
import VueCommander from 'vuecommander';
import {
    QtdCommand
} from './CommandPattern/HandleQtd'

Vue.use(VueCommander);

export default new VueCommander.Context({
    'handle.qtd': QtdCommand
})
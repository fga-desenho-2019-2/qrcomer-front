<template>
  <div
    class="orderModal">
    <div class="orderHeader" v-if="password">
        <v-btn 
            icon 
            small=""
            class="bg-gray"
            @click="closeOrderModal">
            <v-icon color="white">mdi-close</v-icon>
        </v-btn>
    </div>
    <div class="password" v-if="password">
        <h6 class="text-center mb-n2">Sua senha é</h6>
        <h2 class="text-center mb-3">{{password}}</h2>
    </div>
    <div class="restaurant">
        <div class="d-flex align-cente mb-3">
            <v-btn 
                 v-if="!password"
                icon 
                small=""
                class="bg-gray"
                @click="closeOrderModal">
                <v-icon color="white">mdi-close</v-icon>
            </v-btn>
            <h5 class="mb-0 flex-grow-1 flex-shrink-0 text-center" >{{restaurant.name}}</h5>
            <p class="mb-0" v-if="!avaliacao">
                <v-icon color="yellow">mdi-star</v-icon>
                {{avaliacao}}
            </p>
        </div>
        
        <p class="text-center mb-0"><a :href="`/restaurante/${restaurant.cnpj}`" class="main-color" style="text-decoration:none">Ver o cardápio desse restaurante</a></p>
    </div>
    <div class="itens hr">
        <div class="itensValue">
            <div v-for="(item, index) in itens" :key="index" class="d-flex justify-space-between">
                <p>{{item.quantity}}x {{item.name}}</p>
                <p class="itens__totalValue">{{ itemTotal(item) }}</p>
            </div>
        </div>
    </div>
    <div class="itens" :class="password ? '' : 'hr'">
        <div class="itensValue" >
            <p>TOTAL:</p>
        </div>
        <p class="itens__totalValue ml-auto">{{value}}</p>
    </div>
    <div class="avaliacao pt-3" v-if="!password">
        <h6 class="text-center text-uppercase mb-0">Avaliar esse pedido</h6>
        <div class="stars">
            <v-rating 
                v-model="rating"
                half-increments
                class="text-center"
                background-color="gray"
                color="#e18855"
                @click.native="handleClick">
            </v-rating>
        </div>
    </div>
    

  </div>
</template>

<script>
export default {
    data() {
        return {
            rating: this.avaliacao
        }
    },
    props: {
        avaliacao: {
            type: Number
        },
        password: {
            type: String
        },
        restaurant: {
            type: Object,
            required: true
        },
        itens: {
            type: Array,
            required: true
        },
        value: {
            type: Number,
            required: true
        }
        
    },
    methods: {
        closeOrderModal() {
            this.$emit('closeOrderModal');
        },
        itemTotal(item) {
            let value = item.value*item.quantity
            return value.toFixed(2)
        },
        handleClick() {
            this.$emit('starChange', this.rating)
        }
    },
    computed: {
    }
}
</script>

<style lang="scss">
.itensValue {
    width: 100%;
}

.orderModal {
    padding: 15px;
    border-radius: 20px 0;
    
    .bg-gray {
        background: rgba($color: #000000, $alpha: .2)
    }

    .password {
        border-bottom: 2px solid rgba(0,0,0,0.2);
    }

    .restaurant {
        padding:0 0 15px;
        border-bottom: 2px solid $main-color;
    }

    .itens {
        padding: 15px 0;
        display: flex;
        align-items: center;

        p {
            margin-bottom: 0;
        }

        &.hr {
            border-bottom: 2px solid rgba(0,0,0,0.2);
        }
    }

    .stars {
        justify-content: center;
        display: flex;
    }
}
</style>
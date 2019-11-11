<template>
    <v-content>
        <div>
            <v-tabs v-model="orderTab">
                <v-tabs-slider></v-tabs-slider>
                <v-tab href="#anteriores">
                    Anteriores
                </v-tab>

                <v-tab href="#andamento">
                    Em andamento
                </v-tab>
            </v-tabs>

            <v-tabs-items v-model="orderTab">
                <v-tab-item
                    value="anteriores">
                    <p>Content</p>
                </v-tab-item>

                <v-tab-item
                    value="andamento">
                    <p>Content</p>
                </v-tab-item>
            </v-tabs-items>
        </div>
        
    </v-content>
</template>
<script>
export default {
    data() {
        return {
            orderTab: null 
        }
    }
}
</script>
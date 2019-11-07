<template>
<v-content>
  <Navbar />
  <v-app>
      <v-container>
        <v-row
          align="center"
          justify="center"
        >
          <v-btn
            color="#e18855"
            @click.stop="drawer = !drawer"
          >
            Sidebar
          </v-btn>
        </v-row>
      </v-container>
  
      <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        color="#efefef"
      >
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title style="color: black"><center>QR COMER</center></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
  
        <v-divider></v-divider>
  
        <v-list dense>
  
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
          >
            <v-list-item-icon>
              <v-icon style="color: black">{{ item.icon }}</v-icon>
            </v-list-item-icon>
  
            <v-list-item-content>
              <v-list-item-title style="color: black">{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
  </v-app>
</v-content>
</template>

<script>
import Navbar from "./Navbar";
export default {
  name: 'Sidebar',
  components: {
    Navbar
  },
  data () {
    return {
      drawer: null,
      items: [
        { title: 'Shopping', icon: 'store', link: '/shopping/:cnpj' },
        { title: 'Minha sacola', icon: 'shopping_cart', link: '/sacola' },
        { title: 'Meu perfil', icon: 'mdi-account', link: '/usuario' },
        { title: 'Sair', icon: 'logout', link: '/logout' }
      ],
    }
  },
  computed: {
    listShoppings: function() {
      return this.$t('SideBar.shopping')
    },

    myBag: function() {
      return this.$t('SideBar.sacola')
    },

    myProfile: function() {
      return this.$t('SideBar.profile')
    },

    getOut: function() {
      return this.$t('SideBar.logout')
    },
    }
}
</script>

<style lang="scss">

.menu{
    color: black;
}

</style>
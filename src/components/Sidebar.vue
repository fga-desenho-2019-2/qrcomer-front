<template>
<v-content>
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
      >
        <v-list-item>
          <v-list-item-content class="sidebar-content">
            <v-list-item-title><center>QR COMER</center></v-list-item-title>
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
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
  
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
  </v-app>
</v-content>
</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    return {
      drawer: null,
      items: [
        { title: 'shopping', icon: 'store', link: '/shopping/:cnpj' },
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

.sidebar-content{
    color: green;
}

</style>
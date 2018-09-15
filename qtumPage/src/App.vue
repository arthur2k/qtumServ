<template>
  <div id="app">
  <v-toolbar
      color="blue darken-3"
      dark
      app
      :clipped-left="$vuetify.breakpoint.mdAndUp"
      fixed
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
      
        <span class="hidden-sm-and-down"> Qtum - Store Dapps</span>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        prepend-icon="search"
        label="Search"
        class="hidden-sm-and-down"
        @keyup.enter="goTienda"
      ></v-text-field>
      <v-spacer></v-spacer>
      <h4  v-if="!isLogin">Login</h4>
      <v-btn  flat @click="goLogin" v-if="!isLogin">
        <v-icon>perm_identity</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <h4 v-if="!isLogin">Invitado</h4>
      <h4 v-if="isLogin" >Nicolas Pineda</h4>
      <v-btn icon large>
        <v-avatar size="32px" tile>
          <img v-if="isLogin"
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="Vuetify"
          >
        </v-avatar>
      </v-btn>
      
    </v-toolbar>
   
    <router-view/>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
  name: 'App',
  computed:mapGetters(["isLogin"]),
  methods: {
    goLogin: function () {
      this.$router.push('login')    
    },
    goTienda: function () {
      this.$router.push('store')    
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

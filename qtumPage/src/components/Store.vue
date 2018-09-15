<template >
<v-app>
  
    <v-navigation-drawer
      fixed
      :clipped="$vuetify.breakpoint.mdAndUp"
      app
      v-model="drawer"
    >
      <v-list dense>
        <template v-for="item in items">
          <v-layout
            row
            v-if="item.heading"
            align-center
            :key="item.heading"
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group
            v-else-if="item.children"
            v-model="item.model"
            :key="item.text"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
           
            <v-list-tile
              v-for="(child, i) in item.children"
              :key="i"
              @click=""
            >
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
                
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ child.text }}
                </v-list-tile-title>
              </v-list-tile-content>
              
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else  :key="item.text">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
            
          </v-list-tile>
          <v-flex xs12 :key="item.text">
        <v-slider :value="item.sliderValue"></v-slider>
      </v-flex>
        </template>
      </v-list>
    </v-navigation-drawer>
    
  
    <v-content>
              <h2>We have found 2 DAPPS for your search!</h2>
    <br>
      <v-container fluid fill-height>

        <v-layout justify-center align-start >
 

      <v-card width="500" class="mx-3" v-for="item in shoppingItems" :key="item.name" >
        <v-img
          :src="item.imgSrc"
          height="200px"
        >
        </v-img>

        <v-card-title primary-title>
          <div>
            <div class="headline">{{item.name}}</div>
            <span class="grey--text">100 Downloads</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat @click="goLogin">BUY</v-btn>
          <v-btn flat color="green" @click="item.show = !item.show">More Info</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="item.show = !item.show">
            <v-icon>{{ item.show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-show="item.show">
           {{item.descripcion}}
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
   
  </v-layout>
  </v-container>
    </v-content>
</v-app>
</template>

<script>
import {mapGetters} from "vuex"
export default {
  name: 'Store',
  computed:mapGetters(["isLogin"]),
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      shoppingItems: [
      {name: 'Activo Fijo', descripcion: 'Una app que permite controlar los vienes físicos de una organización. Mediante la lectura de código de barras registra en la Blockchain el estado actual del activo fijo, su ubicación y la  fecha de registro para tener un seguimiento de bien de la empresa.',show:false,imgSrc:'https://revistadelogistica.com/wp-content/uploads/2015/12/inventarios-inteligentes.png'},
      {name: 'Pay with Qtum', descripcion: 'obra con Qtum: Mediante esta Dapp cualquier empresa o negocio puede generar cobros a sus clientes simplemente con colocar el total de la cuenta, propina en su caso, y la cuenta del cliente (address), permitiendo deducir de esa cuenta el total a pagar.',show:false,imgSrc:'https://i2.wp.com/criptotendencia.com/wp-content/uploads/2018/08/Criptomoneda-Qtum-140818.jpg'}
    ],
    items: [
        { icon: 'attach_money', text: 'Price' ,sliderValue:"30"},
        { icon: 'history', text: 'Fuction',sliderValue:"10" },
        { icon: 'stars', text: 'Valoraciones',sliderValue:"45" },
        { icon: 'chat_bubble', text: 'Send feedback',sliderValue:"55" },
        { icon: 'help', text: 'Help',sliderValue:"95" },
        { icon: 'phonelink', text: 'App downloads',sliderValue:"70" },
        { icon: 'keyboard', text: 'Go to the old version',sliderValue:"25" }
      ]
    }
  },
    methods: {
    goLogin: function () {
      this.$router.push('login')    
    },
  }
}
</script>


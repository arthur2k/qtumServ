 <template>
 <v-app>
  <v-content>
    <h2>...Thanks Nicolas for your purchase!</h2>
        <v-container fluid fill-height>
          
          <v-layout justify-center>
            <v-flex xs12 sm8 md4>
              <v-card class="elevation-9">
                  <h3>YOUR CODE ACTIVATION IS :</h3>
                  <h2>{{code}}</h2>
                  <img src="https://www.webtekno.com/images/editor/default/0001/35/a915eba824ca059859535616ef5434190056c34f.png">
                  <v-btn color="info" href="@/assets/ActivoFijo.apk" download >Download APK</v-btn>
                  
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
  </v-content>
</v-app>
   
</template>

<script>
var randomstring = require("randomstring");

export default {
  name: 'ApkDownload',
  data () {
    return {
      email:" ",
      code: randomstring.generate(12)
    }
  },
  methods:{
    logueo(){
      console.log("ENTRA LOGUEO")
      this.$store.dispatch('Login',this.email )
    }
  }
}
</script>


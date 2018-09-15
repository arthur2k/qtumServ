 <template>
 <v-app>
 <v-content>
   
   <h2>You need login to payment!</h2>
      <v-container fluid fill-height>
        
        <v-layout  justify-center>

          
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                  
                  <span>Source</span>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" v-model="email" name="email" label="Email" type="text"></v-text-field>
                  <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="error" @click="logueo">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
 </v-app>
   
</template>

<script>

export default {
  name: 'Vlogin',
  data () {
    return {
      email:" "
    }
  },
  methods:{
    logueo(){
      console.log("ENTRA LOGUEO")
      this.$store.dispatch('Login',this.email )
      this.$router.push('Pay')    
    }
  }
}
</script>


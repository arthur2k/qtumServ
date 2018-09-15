 <template>
 <v-app>
  <v-content>
        <v-container fluid fill-height>
          <v-layout  justify-center>
          <v-flex xs12 sm8 m5>
              <v-card   class="elevation-12">
                <v-layout align-center justify-center>
                <v-flex  v-for="item in data1" :key="item.name"  xs2>
                    <v-card dark color="secondary">
                      <v-img
                    :src="item.imgSrc"
                    height="95"
                    
                    
                      ></v-img>
                    </v-card>
              </v-flex>
              
                </v-layout>
                <v-layout align-center justify-center>
            <v-flex xs12 sm8 md10>
              <v-card class="elevation-8">
                <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">PAYMENT AMOUNT :     $500.00</h3>
              
            </div>
          </v-card-title>
                <v-card-text>
                  <v-form>
                    <v-text-field prepend-icon="person"   label="Name On card"></v-text-field>
    
                    <v-text-field prepend-icon="credit_card" mask="credit-card" name="card" label="Card Number" id="cardNumber" type="text"></v-text-field>
                    <v-layout align-center justify-end row reverse>
                      <v-text-field prepend-icon="date_range"  mask="##/##" name="expiryDate" label="Expiry date" id="expiryDate" type="text"></v-text-field>
                      <v-text-field prepend-icon="lock"  mask="###" name="securityCode" label="CCV" id="securityCode" type="pasword"></v-text-field>
                    </v-layout>
                    <v-text-field prepend-icon="location_on"  name="zipcode" label="ZIP /Postal Code" id="postalCode" type="text"></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn @click="dialog = true;goDownload()" color="success">PAY</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
              
              </v-card>
            </v-flex>
            <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
         <v-progress-linear :indeterminate="true"  color="error"
      height="10"
      ></v-progress-linear>
        <v-card-title class="headline">Authorizing the payment</v-card-title>

        <v-card-text>
          Waiting....
        </v-card-text>

      </v-card>
    </v-dialog>
          </v-layout>
        </v-container>
      </v-content>
 </v-app>
   
</template>

<script>

export default {
  name: 'Pay',
  data () {
    return {
      dialog: false,
      data1:[{name:"Visa",imgSrc:"http://www.nuevodiarioweb.com.ar/uploads/imagenes/repositorio/2016/03/29/20654/20160329050106cdd505f22768bb103c2797ad4832f90d.jpg"},
      {name:"Paypal",imgSrc:"https://marketing4ecommerce.mx/wp-content/uploads/2014/05/PayPal.jpg"},
      {name:"Qtum",imgSrc:"https://2.bp.blogspot.com/-XFEE4UG6xLI/WjQ-DYMG6PI/AAAAAAAAAQ8/iaBKcqmFuxgLkJHwZF9SoA1jHe43RdK7QCK4BGAYYCw/s1600/como-comprar-qtum.jpg"},
      {name:"American Express",imgSrc:"http://debybeard.com/wp-content/uploads/2014/01/american-express-logo-940x3501-e1426537734663.jpg"}]
     
    }
  },
  methods:{
    goDownload(){
      console.log("Entra download")
      setTimeout(this.goDownload1 ,5000);         
    },
    goDownload1(){
      console.log("Entra download")
      this.$router.push('ApkDownload');    
    }
  }
}
</script>


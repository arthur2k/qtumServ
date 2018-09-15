 <template>
   <section>
        <v-parallax src="https://c.tadst.com/gfx/1200x630/night-sky-city-pages-image.png?1" height="620">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
          
            <img src="../assets/asimov_logo2.png" alt="Vuetify.js" height="200">
            <h1 class="white--text mb-2 display-1 text-xs-center">Blockchain Store</h1>
            <div class="subheading mb-3 text-xs-center">Powered by Asimov</div>
            
          </v-layout>
        </v-parallax>
      </section>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

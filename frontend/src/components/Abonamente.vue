<template>
   	<div class="abonamente-container">

   		<div class="header-abonamente">
			<h2>Cumpara Abonament</h2>
		</div>

		<left-menu></left-menu>

		<div class="container-mare">
			<Credit></Credit>
			<form>
				Selecteaza Traseu: <br><br>
				<input type="radio" name="traseu" value="14" v-model="traseu">14
				<input type="radio" name="traseu" value="17" v-model="traseu">17
				<input type="radio" name="traseu" value="18" v-model="traseu">18
				<input type="radio" name="traseu" value="22" v-model="traseu">22
			</form>

			<div class="cod-abonamente" align="center">

				<h3>Cost Abonament: 60 LEI</h3>

				<input id="submit" type="submit" value="Cumpara Abonament" class="buton-abonamente" v-on:click="doBuy">
			</div>
		</div>

  	</div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
import LeftMenu from './LeftMenu'
import Credit from './Credit'


export default {
  	name: 'Abonamente',
  	data () {
		    return {
          traseu: ''
		    }
  	},
    methods: {
      doBuy(){
        const price = 60;
        let token = this.$cookie.get('access_token');
        axios({method:'POST',
          url: 'http://localhost:8001/abonamente',
          crossDomain: true,
          headers: {
			    	authorization: token
			    },
          data: {
              traseu: this.traseu,
              price: price
          }
        });
      }
  	},
	  components: {
		    'LeftMenu': LeftMenu,
		    'Credit': Credit
	     }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.abonamente-container {
	font-size: 10px;
	color: #5F798C;
}

div.container-mare {
	box-shadow: 2px 2px 2px #E2E4E8;
	background-color: white;
	padding:25px;
	position:absolute;
	top:45px;
	right:-35px;
	left:158px;
	bottom: 120px;
	margin:70px;
}

div.header-abonamente {
	background-color: #188AE2;
	color: white;
	font-size: 15px;
	font-weight: bold;
	padding: 10px;
	text-align: center;
	width: 100%;
	margin-bottom:30px;
}

div.credit-abonamente h2 {
	font-size: 25px;
	color: #333959;
	margin-bottom: 30px;
}

form {
	font-size: 25px;
}

form input {
	border-radius: 8px;
	padding: 5px;
	margin: 10px 0 10px 0;
}

div.cod-abonamente input:hover {
	background-color: #0174DF;
	cursor: pointer;
}

div.cod-abonamente input {
	background-color: #188AE2;
	color: white;
	padding: 10px;
	font-weight: bold;
}

div.cod-abonamente h3 {
	font-size: 20px;
	color: #333959;
}


@media screen and (max-width: 490px) {
	div.nav {
		display: none;
	}

	div.container-mare {
		margin-left: -140px;
	}
}
</style>

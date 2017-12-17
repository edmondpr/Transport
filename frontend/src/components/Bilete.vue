<template>
   	<div class="bilete-container">

   		<div class="header-bilete">
			<h2>Cumpara Bilet</h2>
		</div>
		
		<left-menu></left-menu>

		<div class="container-mare">	
			<div class="credit-bilete">
				<h2>Credit Disponibil: 600 LEI</h2>
			</div>
			<form>
				Selecteaza Traseu: <br><br>
				<input type="radio" name="traseu" value="14">14
				<input type="radio" name="traseu" value="17">17
				<input type="radio" name="traseu" value="18">18
				<input type="radio" name="traseu" value="22">22
			</form>
			
			<div class="cod-bilete" align="center">

				<h3>Cost Bilet: 2 LEI</h3>
				
				<input id="submit" type="submit" value="Cumpara Bilet" class="buton-bilete">
			</div>
		</div>	

  	</div> 	
</template>

<script>
import axios from 'axios'
import LeftMenu from './LeftMenu'

export default {
  	name: 'Bilete',
  	data () {
		return {

		}
  	},
  	methods: {

  	},
	components: {
		'left-menu': LeftMenu
	}  	
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.bilete-container {
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

div.header-bilete {
	background-color: #188AE2;
	color: white;
	font-size: 15px;
	font-weight: bold;
	padding: 10px;
	text-align: center;
	width: 100%;
	margin-bottom:30px;
}

div.credit-bilete h2 {
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

div.cod-bilete input:hover {
	background-color: #0174DF;
	cursor: pointer;
}

div.cod-bilete input {
	background-color: #188AE2;
	color: white;
	padding: 10px;
	font-weight: bold;
}

div.cod-bilete h3 {
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

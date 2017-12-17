<template>
   	<div class="abonamente-container">

   		<div class="header-abonamente">
			<h2>Cumpara Abonament</h2>
		</div>
	
		<div class="nav">
			<a href="datepersonale.html" target="_self">Date Personale</a><br>
			<a href="bilete.html" target="_self">Bilete</a><br>
			<a href="abonamente.html" target="_self">Abonamente</a><br>
			<a href="" target="_self">Informatii</a><br>
		</div>

		<div class="container-mare">	
			<div class="credit-abonamente">
				<h2>Credit Disponibil: 600 LEI</h2>
			</div>
			<form>
				Selecteaza Traseu: <br><br>
				<input type="radio" name="traseu" value="14">14
				<input type="radio" name="traseu" value="17">17
				<input type="radio" name="traseu" value="18">18
				<input type="radio" name="traseu" value="22">22
			</form>
			
			<div class="cod-abonamente" align="center">

				<h3>Cost Abonament: 2 LEI</h3>
				
				<input id="submit" type="submit" value="Cumpara Abonament" class="buton-abonamente">
			</div>
		</div>	

  	</div> 	
</template>

<script>
import axios from 'axios'

export default {
  	name: 'Abonamente',
  	data () {
		return {

		}
  	},
  	methods: {

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

div.nav {
	background-color: white;
	color: #8E8F92;
	box-shadow: 0 2px #E2E4E8;
	margin-right: 10px;
	width: 200px;
	height: 100%;
	position:fixed;
	left:0;
	top:0;
	padding-top:180px;
}

div.nav a {
	color:#739093;
	font-size: 20px;
	text-decoration: none;
	margin-left:10px;
}

div.nav a:hover {
	color:#2490E3;
	background-color: #F6F7FA;
	display: block;
	padding:10px;
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

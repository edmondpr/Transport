<template>
  <div class="bilete-autobuz">
	<div class="header">
		<h1>Informatii Personale</h1>
	</div>
	<div class="nav">
		<a href="datepersonale.html" target="_self">Date Personale</a><br>
		<a href="bilete.html" target="_self">Bilete</a><br>
		<a href="abonamente.html" target="_self">Abonamente</a><br>
		<a href="" target="_self">Informatii</a><br>
	</div>
	<div class="informatii-container" align="center">
		<div class="informatii">
			<form onsubmit="return Validate()">
				<div class="row">
					<div class="left label" align="left">
						Nume:
					</div>
					<div class="left" align="left">
						<input id="nume" v-model="nume" type="text" name="firstname" placeholder="Numele" onkeydown="hideError()">

					</div>
					<div class="clear"></div>
				</div>
				<div class="row">
					<div class="left label" align="left">
						Prenume:
					</div>
					<div class="left" align="left">
						<input id="prenume" v-model="prenume" type="text" name="lastname" placeholder="Prenumele" onkeydown="hideError()">

					</div>
					<div class="clear"></div>
				</div>
				<div class="row">
					<div class="left label" align="left">
						CNP:
					</div>
					<div class="left" align="left">
						<input type="number" v-model="cnp" name="codnumeric" placeholder="CNP" onkeydown="hideError()">

					</div>
					<div class="clear"></div>
				</div>
				<div class="row">
					<div class="left label" align="left">
						Sex:
					</div>
					<div class="left" align="left">
						<select name="sex" onkeydown="hideError()">
							<option value="masculin">Masculin</option>
							<option value="feminin">Feminin</option>
						</select>

					</div>
					<div class="clear"></div>
				</div>
				<div class="row">
					<div class="left label" align="left">
						Stare Civila:
					</div>
					<div class="left" align="left">
						<input type="text" v-model="stareaCivila" name="starecivila" placeholder="Starea Civila" onkeydown="hideError()">

					</div>
					<div class="clear"></div>
				</div>
				<div class="row">
					<div class="left label" align="left">
						Numar de telefon:
					</div>
					<div class="left" align="left">
						<input type="tel" v-model="telefon" name="numartelefon" placeholder="Numarul de telefon" onkeydown="hideError()">

					</div>
					<div class="clear"></div>
				</div>
				<div class="row">
					<div class="left label" align="left">
						Adresa de email:
					</div>
					<div class="left" align="left">
						<input type="email" v-model="email" name="adresaemail" placeholder="Email" onkeydown="hideError()">

					</div>
					<div class="clear"></div>
				</div>
				<div class="row">
					<div class="left label" align="left">
						Adresa:
					</div>
					<div class="left" align="left">
						<input type="text" v-model="adresa" name="adresa" placeholder="Adresa" onkeydown="hideError()">

					</div>
					<div class="clear"></div>
				</div>
				<div class="row">
					<div class="left label" align="left">
						Localitate:
					</div>
					<div class="left" align="left">
						<input type="text" v-model="localitate" name="localitate" placeholder="Localitatea" onkeydown="hideError()">

					</div>
					<div class="clear"></div>
				</div>
				<div class="row">
					<div class="left label" align="left">
						Judetul:
					</div>
					<div class="left" align="left">
						<input type="text" v-model="judetul" name="judet" placeholder="Judetul" onkeydown="hideError()">

					</div>
					<div class="clear"></div>
				</div>
				<div class="row">
					<div class="left label" align="left">
						Tara de origine:
					</div>
					<div class="left" align="left">
						<input type="text" v-model="taraOrigine" name="tara" placeholder="Tara de origine" onkeydown="hideError()">

					</div>
					<div class="clear"></div>
				</div>
			</form>
			<div class="error">
			Eroare in introducerea datelor!
			</div>
			<div class="buton-date">
				<input id="submit" v:on-click="submit" type="submit" value="Salveaza Date Personale">
			</div>
		</div>
	</div>
	<div class="footer">
		<p>Calatorind Cu Tehnologia</p>
	</div>
</template>
<script>
import axios from 'axios'

export default {
    name: 'DatePersonale',
    data () {
    return {
        nume: '',
        prenume: '',
        cnp: '',
        sex:'',
        stareCivilia:'',
        telefon:'',
        email:'',
        adresa:'',
        localitate:'',
        judet:'',
        taraOrigine:''
    }
    },
    methods: {
      submit: function() {
      axios({
          method: 'get',
          url: 'http://localhost:8001/users',
          crossDomain: true
      }).then(function(response) {
          console.log(response);
      }).catch(function (error) {
          console.log(error);
      });
      }
    }
}
</script>
<style>
  body {
  font-family: Arial;
  }

  .left {
  float: left;
  }

  .right {
  float: right;
  }

  div.clear {
  clear: both;
  }

  div.normal-spacing {
  height: 20px;
  }

  div.large-spacing {
  height: 30px;
  }

  body, html {
	background-color: #EDF0F5;
 	margin-top: 5px;
}
div.header h1 {
	font-family: Times, serif;
	background-color: #188AE2;
	color: #F1F8FD;
	font-size: 25px;
	text-align: center;
	padding: 20px;
	margin-top: 0;
	margin-bottom: 0;
	border-radius: 15px;
}

 div.nav {
	background-color: #8080ff;
	float: left;
	height: 400px;
	width: 210px;
	padding: 50px 20px;
	margin-top: 3px;
	margin-right: 5px;
	margin-bottom: 3px;
	border-radius: 20px;
}

 div.nav a {
 	font-family: Times;
 	font-weight: bold;
 	font-size: 25px;
 	display: inline-block;
	color: black;
	text-decoration: none;
	width: 200px;
	padding: 25px 8px;
	margin-top: 10px;

}

 div.nav a:hover {
	background-color: #00004d;
	color: #e6b800;
	padding-right: 0;
	border-radius: 20px;
}

div.footer {
	font-size: 20px;
	font-family: Times, serif;
	background-color: #188AE2;
	color: #F1F8FD;
	clear: both;
	text-align: center;
	padding: 3px;
	border-radius: 15px;
	margin-bottom: 0;
}

@media only screen and (max-width: 600px) {
	div.nav {
		margin: 3px;
		height: 270px;
		padding-right: 19px;
		padding-left: 19px;
	}

	div.nav a {
		margin: 0;
		padding: 20px;
	}
}


@media only screen and (max-width: 600px) {
	div.bilete-autobuz  {
		margin-top: 10px;
		font-size: 30px;
	}

@media only screen and (max-width: 600px) {
	div.footer  {
		height: 40px;
		margin-top: 5px;
	}

	div.nav {
		margin-left: 7px;
	}

}
div.informatii-container {
	margin-top: 3px;
	margin-bottom: 3px;
	padding: 8px;
	overflow: hidden;
}

div.informatii-container div.informatii {
	width: 350px;
	font-size: 20px;
	text-align: center;
}

div.informatii-container div.informatii div.row {
	margin-bottom: 3px;
}


div.informatii-container div.informatii div.label {
	width: 150px;
	padding: 5px;
}

div.informatii-container div.informatii form input {
	padding: 8px;
	background-color: #222222;
	color: white;
}
div.informatii-container div.informatii form select {
	padding: 8px;
	background-color: #222222;
	color: #BBBBC2;
}
div.informatii-container div.error {
	width: 250px;
	background: red;
	color: white;
	margin-top: 10px;
	margin-left: 120px;
	margin-bottom: 10px;
	padding: 10px;
	font-size: 15px;
	display: none;


}
div.informatii-container div.invalid {
	color: red;
	font-weight: bold;
	font-size: 15px;
	display: none;
}

div.informatii-container div.informatii div.buton-date input {
	background-color: #006600;
	color: #b3d9ff;
	border-radius: 10px;
	padding: 10px;
	font-size: 15px;
	font-weight: bold;
	margin-top: 3px;
	margin-left: 157px;
	width: 350px;
}

div.informatii-container div.informatii div.buton-date input:hover {
	color: white;
}


@media only screen and (max-width: 600px) {
	div.informatii-container {
		float: left;
		width: 227px;
		padding-left: 10px;
		margin-left: 8px;
	}

	div.informatii-container div.informatii {
		width: 190px;
	}

	div.informatii-container div.informatii div.buton-date input {
		margin-left: -30px;
		width: 245px;
	}
}

</style>

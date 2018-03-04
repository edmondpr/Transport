<template>
  	<div class="register-container">
	  	<form class="register-form">
			<h2 class="titlu">Date personale:</h2>

			<span class="register-input-label left">Nume:</span>
			<input v-model="nume" @keyup="hideError" class="register-input right" type="text" name="nume" placeholder="Ex: Brânzovenescu">
			<div class="clear"></div>

			<span class="register-input-label left">Prenume:</span>
			<input v-model="prenume" @keyup="hideError" class="register-input right" type="text" name="prenume" placeholder="Ex: Mugurel">
			<div class="clear"></div>

			<span class="register-input-label left">Email:</span>
			<input v-model="email" @keyup="hideError" class="register-input right" type="email" name="mail" placeholder="Ex: vasilica-dulcika91@yahoo.com">
			<div class="clear"></div>

			<span class="register-input-label left">Telefon:</span>
			<input v-model="telefon" @keyup="hideError" class="register-input right" type="text" name="telefon" placeholder="Ex: 07XX-XXX-XXX">
			<div class="clear"></div>

			<span class="register-input-label left">Parolă:</span>
			<input v-model="parola" @keyup="hideError" class="register-input right" type="password" name="password" placeholder="Alege ceva greu de ghicit!">
			<div class="clear"></div>

			<span class="register-input-label left">Confirmare parolă:</span>
			<input v-model="confirma_parola" @keyup="hideError" class="register-input right" type="password" name="password" placeholder="Încă o dată pentru siguranță!">
			<div class="clear"></div>

			<p v-show="error" class="error right">{{error}}</p>
			<div class="clear"></div>

			<div class="submit-container right">
			  <a v-on:click="submit">TRIMITE!</a>
			</div>
			<div class="clear"></div>

	  	</form>
	</div>
</template>

<script>
import axios from 'axios'

export default {
  	name: 'Register',
  	data () {
		return {
	  		nume: '',
	  		prenume: '',
	  		email: '',
	  		telefon: '',
	  		parola: '',
	  		confirma_parola: '',
	  		error: ''
		}
  	},
  	methods: {
  		submit: function() {
  			if (!this.formValidated()) {
  				return;
  			}
			axios({
			    method: 'POST',
			    url: 'http://localhost:8001/users',
			    crossDomain: true,
			    data: {
    				   nume: this.nume,
    				   prenume: this.prenume,
    				   email: this.email,
    				   telefon: this.telefon,
    				   parola: this.parola
				     }
			}).then(function(response) {
			    console.log(response);
			}).catch(function (error) {
			    console.log(error);
			});
  		},
  		hideError: function(e) {
  			this.error = '';
  		},
  		formValidated: function() {
  			if (this.nume == '') {
  				this.error = 'Nu ai introdus numele';
  				return false;
  			} else if (this.prenume == '') {
  				this.error = 'Nu ai introdus prenumele';
  				return false;
  			} else if (this.email == '') {
  				this.error = 'Nu ai introdus emailul';
  				return false;
  			} else if (this.parola == '') {
  				this.error = 'Nu ai introdus parola';
  				return false;
  			} else if (this.parola != this.confirma_parola) {
  				this.error = 'Nu ai confirmat corect parola';
  				return false;
  			}
  			return true;
  		}
  	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.register-container {
	position: absolute;
	background-color: #EDF0F5;
	width: 100%;
	height: 100%;
	font-size: 14px;
}

h2.titlu {
	text-align: left;
	color: #333;
	font-size: 15px;
	margin-bottom: 22px;
	padding: 16px;
	border-bottom: solid 1px #eee;
}

a {
	cursor: pointer;
	background-color:#188AE2;
	border: 2px solid #188AE2;
	border-radius: 10px;
	color: white;
	padding: 10px 20px;
	text-decoration: none;
}

a:hover {
	background-color: #1576C2;
	color: white;
}

form.register-form {
    position: absolute;
	background-color: white;
	box-shadow: 2px 2px 3px grey;
	color: #6A6C6F;
	font-family: Raleway,"Helvetica Neue",Helvetica,Arial,sans-serif;
	width: 450px;
	height: 450px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
}

span.register-input-label {
	display: inline-block;
	width: 160px;
	padding-top: 5px;
	text-align: right;
}

input.register-input {
	margin: 0 10px 10px 10px;
	padding: 5px;
	width: 250px;
	font-size: 13px;
}

p.error {
	color: red;
	width: 275px;
	text-align: left;
	margin: 5px 0 0 0;
}

div.submit-container {
	width: 275px;
	margin-top: 30px;
	text-align: left;
}

@media only screen and (max-width: 480px) {
    form.register-form {
    	width: 100%;
    	left: 0;
    }

    input {
    	width: 210px;
    }

	div.submit-container {
		text-align: left;
		padding-left: 135px;
	}
}
</style>

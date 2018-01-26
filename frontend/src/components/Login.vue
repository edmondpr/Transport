<template>
  	<div class="login-container">
	  	<form class="login-form">
			<h2 class="titlu">Intră în cont:</h2>

			<span class="login-input-label left">Email:</span>
			<input v-model="email" @keyup="hideError" class="login-input right" type="email" placeholder="Ex: vasilica-dulcika91@yahoo.com">
			<div class="clear"></div>

			<span class="login-input-label left">Parolă:</span>
			<input v-model="parola" @keyup="hideError" class="login-input right" type="password" placeholder="Alege ceva greu de ghicit!">
			<div class="clear"></div>

			<div class="uitat-parola">
				<a href="email.html">Am Uitat Parola</a>
			</div>

			<div class="remember-container">
			 	<input type="checkbox" class="remember-checkbox left"/>
			  	<p class="remember-text left">Tine-mă minte!</p>
			</div>

			<p v-show="error" class="error">{{error}}</p>
			<div class="clear"></div>

			<div class="submit-container right">
			    <a class="login" v-on:click="login">Login</a>
			</div>
			<div class="clear"></div>

	  	</form>
	</div>
</template>

<script>
import axios from 'axios'

export default {
  	name: 'Login',
  	data () {
		return {
	  		email: '',
	  		parola: '',
	  		error: ''
		}
  	},
  	methods: {
  		login: function() {
  			var self = this;
  			if (!this.formValidated()) {
  				return;
  			}
			axios({
			    method: 'POST',
			    url: 'http://localhost:8001/login',
			    crossDomain: true,
          data:{
            email: this.email,
            parola: this.parola
          }
			}).then(function(response) {
        if (response.data) {
					self.$router.push('Bilete');
        } else {
          self.error = 'Utilizator inexistent';
        }
			}).catch(function (error) {

			});
  		},
  		hideError: function(e) {
  			this.error = '';
  		},
  		formValidated: function() {
  			if (this.email == '') {
  				this.error = 'Nu ai introdus emailul';
  				return false;
  			} else if (this.parola == '') {
  				this.error = 'Nu ai introdus parola';
  				return false;
  			}
  			return true;
  		}
  	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.login-container {
	position: absolute;
	background-color: #EDF0F5;
	width: 100%;
	height: 100%;
	margin: -60px 0 0 -8px;
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

a.login {
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

form.login-form {
    position: absolute;
	background-color: white;
	box-shadow: 2px 2px 3px grey;
	color: #6A6C6F;
	font-family: Raleway,"Helvetica Neue",Helvetica,Arial,sans-serif;
	width: 450px;
	height: 320px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
}

span.login-input-label {
	display: inline-block;
	width: 130px;
	padding-top: 5px;
	text-align: right;
}

input.login-input {
	margin: 0 90px 10px 10px;
	padding: 5px;
	width: 200px;
	font-size: 13px;
}

div.uitat-parola {
	margin-top: 0px;
	margin-left: 100px;
	font-weight: normal;
	font-size: 12px;
	padding-right: 0px;
	padding-left: 120px;
	color: #ccc;
}

div.link-container {
	margin-top: 35px;
}

div.link-container a {
	width: 200px;
	background-color: #188AE2;
	border-radius: 5px;
	color: white;
	font-family: arial;
	font-weight: normal;
	font-size: 14px;
	text-decoration: none;
	padding: 10px 20px;

}

div.link-container a:hover {
	color: white;
	font-family: arial;
	background-color: #1576c2;
}

div.remember-container {
	display: inline-block;
	width: 150px;
	height: 20px;
}

p.remember-text {
	display: inline-block;
	margin: 3px 0 0 5px;
	font-size: 12px;
	color: #666;
}

p.error {
	color: red;
	text-align: center;
	margin: 10px 0 0 0;
}

div.submit-container {
	width: 275px;
	margin-top: 30px;
	text-align: left;
}

@media only screen and (max-width: 480px) {
    form.login-form {
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

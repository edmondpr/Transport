<template>
	<div class="nav">
		<a href="datepersonale.html" target="_self">Date Personale</a><br>
		<a href="bilete.html" target="_self">Bilete</a><br>
		<a href="abonamente.html" target="_self">Abonamente</a><br>
		<a href="" target="_self">Informatii</a><br>
	</div>
</template>

<script>
  export default {
    data() {
      return {
      }
    }
  }
</script>

<style scoped>
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
</style>
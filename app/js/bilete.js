$(document).ready(function() {
	$("#submit").click(function() {
		var traseu = $('input[name="traseu"]:checked');
		var dataOra = new Date();
		var bilet = {
			traseu: traseu.val(),
			dataOra: dataOra
		}
		console.log(bilet);
	});
});
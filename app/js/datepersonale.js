$(document).ready(function() {
	$("#submit").click(function() {
		var nume = $("input[name='firstname']").val();
		var prenume = $("input[name='lastname']").val();
		var cnp = $("input[name='codnumeric']").val();
		var sex =  $("option:selected").val();
		var stare = $("input[name='starecivila']").val();
		var telefon = $("input[name='numartelefon']").val();
		var email = $("input[name='adresaemail']").val();
		var adresa = $("input[name='adresa']").val();
		var localitate = $("input[name='localitate']").val();
		var judet = $("input[name='judet']").val();
		var tara = $("input[name='tara']").val();
		$.getJSON("db/data.json", function(data) {
			var corect = false;
			for(var i=0; i<data.length; i++) {
				if(nume == data[i].nume && prenume == data[i].prenume && cnp == data[i].cnp && 
					sex == data[i].sex && stare == data[i].stare && telefon == data[i].telefon && 
					email == data[i].email && adresa == data[i].adresa && localitate == data[i].localitate &&
					judet == data[i].judet && tara == data[i].tara) {
					corect = true;
					break;
				}
			}
			if(corect) {
				location.href = "bilete.html";
			} else {
				$(":input").css("border", "1px solid red")
				$(".error").show();
				//$(".invalid").show();
			}
		})
	});
});
function hideError() {
	$('.error').hide();
	//$('.invalid').hide();
	$(":input").css("border", "1px solid green")
};

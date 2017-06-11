$(document).ready(function() {
	$("#submit").click(function() {
		var password = $("#password").val();
		var password2 = $("#password2").val();
		$.getJSON("db/users.json", function(resetpassword) {
			var reset = false;
			for(var i=0; i<resetpassword.length; i++) {
				if(password == resetpassword[i].password && password2 == password) {
					reset = true;
					break;
				}
			}
			if(reset) {
				location.href = "login.html"
			} else {
				$('.invalid').show();
				$(":input").css("border", "1px solid red")
			}
		});
	});
});

function hideError() {
	$('.invalid').hide();
	$(":input").css("border", "1px solid green")
}
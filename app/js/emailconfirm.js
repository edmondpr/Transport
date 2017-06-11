$(document).ready(function() {
	$("#reset").click(function() {
		var email = $("#email").val();
		$.getJSON("db/users.json", function(confirm) {
			var emailconfirm = false;
			for(var i=0; i<confirm.length; i++) {
				if(email == confirm[i].email) {
					emailconfirm = true;
					break;
				}
			}
			if(emailconfirm) {
				location.href ="reset.html";
			} else {
				$(":input").css("border", "1px solid red")
				$('.invalid').show();
			}
		});
	});
});

function hideError() {
	$('.invalid').hide();
	$(":input").css("border", "1px solid green")
}
$(document).ready(function() {
	$("#signin").click(function() {
		var email = $("#email").val();
		var password = $("#password").val();
		$.getJSON("db/users.json", function(result) {
			var correct = false;
	        for (var i=0; i<result.length; i++) {
	            if (email == result[i].email && password == result[i].password) {
	            	correct = true;
	            	break;
	            }
	        };
	        if (correct) {
	       		location.href = "bilete.html";
	        } else {
	            $('.error').show();
	        }
	    });
	});
});

function hideError() {
	$('.error').hide();
}
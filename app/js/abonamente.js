$(document).ready(function() {
	$("#submit").click(function() {
		var format = $("#format option:selected");
		var trasee = [];
        $('input[name="linii"]:checked').each(function(i) {
      		trasee[i] = $(this).val();
    	});		
		var abonament = $("#abonament option:selected");
		var data = $("input[type='date']");
		var dateAbonament = {
			format: format.val(),
			trasee: trasee,
			abonament: abonament.val(),
			data: data.val()
		}
		console.log(dateAbonament);
	});
});
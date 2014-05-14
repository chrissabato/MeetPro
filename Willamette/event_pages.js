
	$(document).ready(function(){
		addResults("results-men", "Results");
		addResults("results-women", "Results");
		addResults("heats-men", "Heats");
		addResults("heats-women", "Heats");

		//DATE REFORMAT
		var D = $('.header h5').text();
		
		
		D = D.split("-");	
		var m1 = moment(D[0], "MM-DD-YYYY");
		var s1 = m1.format("dddd MMMM Do")
		
		var m2 = moment(D[1], "MM-DD-YYYY");
		var s2 = m2.format("dddd MMMM Do, YYYY")
		
		$('.header h5').text(s1 + " - " + s2);

	});

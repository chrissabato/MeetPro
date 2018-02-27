
$(document).ready(function(){
	// #################################################    
	// Custom function for reformating header date
	// #################################################

    var D = $('.header h5').text();
    D = formatDate(D);
    $('.header h5').text(D);

    function formatDate(D){
        D = D.split("-");
        if (typeof D[1] != 'undefined') {   
            var m1 = moment(D[0], "MM-DD-YYYY");
            var s1 = m1.format("dddd MMMM Do")  
            var m2 = moment(D[1], "MM-DD-YYYY");
            var s2 = m2.format("dddd MMMM Do, YYYY")
            return(s1 + " - " + s2);

        }
        else {
            var m1 = moment(D[0], "MM-DD-YYYY");
            var s1 = m1.format("dddd MMMM Do, YYYY")
            return(s1);
        }
    }

	// #################################################	
	// Hide column from scores
	// #################################################
	$('#scores  tr>td:nth-child(3)').hide();
	$('#scores  tr>th:nth-child(3)').hide();
	$('#scores  th:contains("PL")').width(15);
	$('#scores  th:contains("Points")').width(30);
	$('.team-scores-hdr:contains("Female Teams")').text("Women");
	$('.team-scores-hdr:contains("Male Teams")').text("Men");




	// #################################################	
	// Reformat results link headers
	// #################################################
	$('.eventLinks h3').each(function( index ) {
	 	if ($( this ).text()=='Men:'){
	 		$( this ).text("Men's Results");
	 	}
	 	if ($( this ).text()=='Women:'){
	 		$( this ).text("Women's Results");
	 	}
	});

	// #################################################	
	// Results Auto Updater
	// #################################################
	updateResults();

});




// #################################################	
// Results Auto Updater Functions
// #################################################
var r_refresh = setInterval(updateResults, 60000);
var completedHeats = new Array();
var results = new Array();
var newHeats = false;
var interval;

// #################################################
function isEmpty( el ){
  return !$.trim(el.html())
}

// #################################################
var multiRounds = {
	2: {
		1:' Prelim ',
		2:' Final '
	},
	3: {
		1:' Prelim ',
		2:' Semi ',
		3:' Final '
	},
	4: {
		1:' Prelim ',
		2:' Quarter ',
		3:' Semi ',
		4:' Final '
	}
}

// #################################################
function updateResults(){
	$.ajax({
		type: 'GET',
		dataType:'json',
		data:{},
		url:'results.json',
		success:function(data) {
			results = data;
			console.log('Successfully loaded results.json')
			postResults();
		}
	});
}

// #################################################
function postResults(){
	console.log('Posting results')

	var lastCompletedHeats = completedHeats.length;
	var newHeats = checkHeats();

	if(newHeats) {
		var newResultString = "<h3>Latest Results</h3>";
		var recentResultsNum = completedHeats.length - lastCompletedHeats;
		if(recentResultsNum > 5)
			recentResultsNum = 5;
		for(var i=0; i<recentResultsNum; i++) {
			var heatText;
			if(completedHeats[i].rounds > 1) {
				heatText = multiRounds[completedHeats[i].rounds][completedHeats[i].round];
			} 
			else if (completedHeats[i].event_type == 'F')
				heatText =  ' <span class="pipe">|</span> Flight ';
			else
				heatText = ' <span class="pipe">|</span> Heat ';

			var genderDisplay;
			if(completedHeats[i].gender == 'f')
				genderDisplay = "Women's";
			else
				genderDisplay = "Men's";

			var rownum = i%2;

			newResultString += '<a class="row'+rownum+'" href="results_'+completedHeats[i].event_id+'.html#round_'
								+completedHeats[i].round+'_heat_'+completedHeats[i].heat
								+'">'
								+genderDisplay + ' ' + completedHeats[i].event_name
								+ heatText + completedHeats[i].heat+'</a>';
		}
		$(recentResults).html(newResultString);
	}
}

// #################################################
function checkHeats() {
	console.log('Checking Heats:');
	if(results.length > completedHeats.length) {
		completedHeats = results;
		console.log('New heats');
		return true;
	} else {
		console.log('No new heats');
		return false;
	}
}



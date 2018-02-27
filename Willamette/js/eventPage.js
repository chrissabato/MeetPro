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


});




$(document).ready(function(){
	addResults("results-men", "Results");
	addResults("results-women", "Results");
	addResults("heats-men", "Heats");
	addResults("heats-women", "Heats");
	addResults("entries-men", "Entries");
	addResults("entries-women", "Entries");
});

function addResults(divName, linkText){
// fails if there is no data
    var s = "." + divName;
    var g = divName.split("-");
    g = g[1];
	if($.trim($(s).html())=='') {
		//Do  Nothing
	}
	else {
		var results_men_links = $(s).html();
		results_men_links = results_men_links.trim();
		var obj = $.parseHTML(results_men_links);

		$.each( obj, function( i, el ) {
			if (el.outerHTML === undefined){
				// do nothing
			}
			else if(el.tagName != "H3"){
				event = el.innerHTML
				link = ('<a href="' + el.href + '">'+linkText+'</a>');
				search = ".schedule ." + event.replace(/ /g,'') + "." + g + " td." + linkText.toLowerCase();
				console.log(link);
				console.log(search);
				$(search).html(link);
			}
		});
	}
	$(s).hide();
}



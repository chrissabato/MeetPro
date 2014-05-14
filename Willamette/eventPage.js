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

// #################################################    
// Woopra
// #################################################
(function(){
    var t,i,e,n=window,o=document,a=arguments,s="script",r=["config","track","identify","visit","push","call"],c=function(){var t,i=this;for(i._e=[],t=0;r.length>t;t++)(function(t){i[t]=function(){return i._e.push([t].concat(Array.prototype.slice.call(arguments,0))),i}})(r[t])};for(n._w=n._w||{},t=0;a.length>t;t++)n._w[a[t]]=n[a[t]]=n[a[t]]||new c;i=o.createElement(s),i.async=1,i.src="//static.woopra.com/js/w.js",e=o.getElementsByTagName(s)[0],e.parentNode.insertBefore(i,e)
})("woopra");

woopra.config({
    domain: 'live.willamettetrack.com'
});
woopra.track();


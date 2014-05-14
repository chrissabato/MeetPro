<!-- Enter Code Here -->
<?
	switch($type)
	{
		case 'performance list':
			$jquery ="$(document).ready(function(){ $('#results_links').hide();$('#heat_sheet_links').hide();$('#performance_list_links').show();});";
			break;
		case 'results':
			$jquery ="$(document).ready(function(){ $('#results_links').show();$('#heat_sheet_links').hide();$('#performance_list_links').hide();});";
			break;
		case 'Heat Sheets':
			$jquery ="$(document).ready(function(){ $('#results_links').hide();$('#heat_sheet_links').show();$('#performance_list_links').hide();});";
			break;
	}
?>
<script>
	<? echo $jquery; ?>
</script>



<!-- Start of Woopra Code -->
<script type="text/javascript">
function woopraReady(tracker) {
    tracker.setDomain('nwc.willamettetrack.com');
    tracker.setIdleTimeout(1800000);
    tracker.track();
    return false;
}
(function() {
    var wsc = document.createElement('script');
    wsc.src = document.location.protocol+'//static.woopra.com/js/woopra.js';
    wsc.type = 'text/javascript';
    wsc.async = true;
    var ssc = document.getElementsByTagName('script')[0];
    ssc.parentNode.insertBefore(wsc, ssc);
})();
</script>
<!-- End of Woopra Code -->
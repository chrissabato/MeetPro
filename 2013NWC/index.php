<?
	$index = true;
	$name = "NWC Championships";
	$timestamp = date("D M d H:i:s e O Y");
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-stric.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<? include('includes/inc.head.php'); ?>
</head>

<body>
<div id="container-wide">
	<? include('includes/inc.header.php'); ?>


	<div id="schedule">
	<?php 
		if (!$mobile)
			include("includes/inc.schedule.php"); 
	?>
	
	
	
	<?php 
		if (!$mobile)
			echo '<h3 class="left-title">Tumblr Feed</h3>';
	?>
	<div id="tumblr-embed"></div>
	
	</div>
	<div class="twitter-left">
		
		<h6>Results will display automatically as they become available</h6>	
		<div id="results-box"></div>

		<div class="clearfix"></div>
		<!-- DISQUS --------------------------------->
		<? //include("includes/inc.disqus.php"); ?>
	</div>

	<div class="twitter-right">
		<!-- TWITTER --------------------------------->	
		<?
			if (!$mobile)
				include("includes/inc.twitter.php"); 
		?>
	</div>

	<div class="clearfix"></div>
	<? include('includes/inc.footer.php'); ?>
</div>
<? include('includes/inc.code.php'); ?>
<script>
	$(document).ready(function(){ 
		$('#results-box').load('index.html');
	}); 

	// Set Results Interval
	var r_refresh = setInterval(refreshresults, 60000);
	function refreshresults() {
		$('#results-box').load('index.html');
	}
</script>

</body>
</html>


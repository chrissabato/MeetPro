<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title><? echo $title; ?></title>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<link rel="shortcut icon" href="http://images.tfmeetpro.com/icon-16x16.png"/>
<?	
	require_once('includes/mobile_device_detect.php');
	$mobile = mobile_device_detect(true,false,true,true,true,true,true,false,false);
	
	if ($mobile)
		echo '	<link rel="stylesheet" type="text/css" href="/css/mobile.css" />
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">';
	else
		echo '<link rel="stylesheet" type="text/css" href="/css/style.css" />';
?>

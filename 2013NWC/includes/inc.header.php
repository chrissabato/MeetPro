<div id="header">
    <a href="/">
    <?php 
        if ($mobile)
            echo'<img src="assets/nwc_02.png" height="50" border="0">';
		else
			echo '<table width="100%" height="75" border="0" cellpadding="0" cellspacing="0"><tr><td align="left"><img src="assets/nwc_01.png" width="150" height="75" alt=""></td><td></td><td align="right"><img src="assets/nwc_02.png" width="450" height="75" alt=""></td></tr></table>';
    ?>
    </a>
    <div id="header-trail">
        
		<p><a href="/"><? echo $name; ?></a>
		<? if(!$index) echo '<span class="raquo">&raquo;</span> <a href="/">'.$type .'</a> <span class="raquo">&raquo;</span> '. $event_name.'</p>'; ?>
    </div>
</div>

<? 
	if (!$index and !$mobile)
	{
		echo '<div id="side-links">';
		include('index.html'); 
		echo '</div>';
	}
?>

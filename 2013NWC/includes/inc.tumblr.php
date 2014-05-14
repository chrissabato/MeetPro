

	<style>
    
    #tumblr-embed{
		width: 250px;
		margin: 0px 0px 0px 5px;
    }
	a {
		text-decoration:none;
	}
    
    
    #tumblr-embed .tumblr-post{
        border-bottom:1px dotted #1ab7ea;
        padding:5px 0px 10px 0px;
    }
    #tumblr-embed .tumblr-post h4{
        color: #02b294;
        margin:0px;
        padding:0px 0px 2px 0px;
    }
    #tumblr-embed .tumblr-post p{
        padding:0px;
        margin:0px 0px 5px 0px;
        color:#666;
    }
    
	.tumblr-date {
		font-size: 9px;
		text-align:right;
		color: #444;
	}
	
    
    /* Photo Post */
    #tumblr-embed .tumblr-photo p {
        margin:0px;
        padding:0px;
        font-size:12px;
    }
	#tumblr-embed .tumblr-photo img {
		margin: 5px 0px 0px 0px;
		border:0;
	}
    
    /* Photoset Post */
    #tumblr-embed .tumblr-photoset p {
        margin:0px;
        padding:0px;
        font-size:12px;
    }
	#tumblr-embed .tumblr-photoset img {
		width:77px;
		height:77px;
		margin:5px 6px 1px 0px;
	}
    
    /* Video Post */
    #tumblr-embed .video p {
        margin:0px;
        padding:0px;
        font-size:12px;
    }
	#tumblr-embed .video iframe {
		margin: 5px 0px 0px 0px;	
	}
    
    /* Video Quote */
    #tumblr-embed .tumblr-quote p {
        font-size:20px;
    }
    #tumblr-embed .tumblr-quote .tumblr-source{
        font-size:12px;
        color:#02b294;
        text-align:right;
    }
    #tumblr-embed .tumblr-quote .tumblr-source:before{
        content:"—";
    }
    
	/* Tags*/
	ul.tumblr-tags {
		padding:0px;
		margin:4px 0px 0px 0px;
	}
	ul.tumblr-tags li{
		padding:1px 4px 1px 4px;
		margin:0px 4px 2px 0px;
		list-style: none;
		display:inline;
		font-size:11px;
		background-color:#444;
		color:#FFF;
		letter-spacing:1px
	}

	 
	.nwcswim-link {
		margin: 5px 0px 5px 0px;
	}
	 
    </style>
	<link rel="stylesheet" type="text/css" href="/assets/lightbox/jquery.lightbox-0.5.css" media="screen" />
	<script type="text/javascript" src="/assets/lightbox/jquery.lightbox-0.5.js"></script>  
<?
$display_number = 4;
$post_number = 0;

$xmlurl = "http://nwctrack.tumblr.com/api/read?num=$display_number";
$xmlstr = file_get_contents($xmlurl,0,null,null);

$xml = new SimpleXMLElement($xmlstr);

date_default_timezone_set("America/Los_Angeles");

$post_number = $xml->posts->count();



foreach($xml->posts->post as $post)
{
	$post_number++;
	$type = $post->attributes()->type;
	$timestamp = (int)$post->attributes()->{'unix-timestamp'};
	$date = date("M j, g:i a", $timestamp);
	
	
	
	
	echo '<div id="tumblr-embed">'."\n";
	
	// Type: Photo
	if($type == 'photo' and !isset($post->{'photoset'}))
	{
		echo '<div id="'.$post->attributes()->id.'" class="tumblr-post tumblr-photo">'."\n";
		echo '<div class="tumblr-date">'. $date .'</div>';
		echo '<a class="tumblr-photo-link" target="_blank" href="'.$post->{'photo-url'}[1].'">'."\n";
		echo '<img border="0" src="'.$post->{'photo-url'}[3].'" />'."\n";
		echo "</a>"."\n";
		echo "<p>".$post->{'photo-caption'}."</p>\n";
		gettags($post->{'tag'});
		echo "</div>"."\n";
	}
	
	// Type: Photoset
	if($type == 'photo' and isset($post->{'photoset'}))
	{
		echo '<div class="tumblr-post tumblr-photoset">'."\n";
		echo '<div class="tumblr-date">'. $date .'</div>';
		foreach($post->{'photoset'}->{'photo'} as $photo)
		{
			echo '<a class="tumblr-photo-link" href="'.$photo->{'photo-url'}[1].'">';
			echo '<img border="0" src="'.$photo->{'photo-url'}[5].'" /></a>';
		}
		echo "<p>".$post->{'photo-caption'}."</p>\n";
		gettags($post->{'tag'});
		echo "</div>"."\n";
	}
	
	
	
	// Type: Regular
	else if($type == 'regular')
	{
		echo '<div class="tumblr-post regular">'."\n";
		echo '<div class="tumblr-date">'. $date .'</div>';
		echo "<h4>".$post->{'regular-title'}."</h4>\n";
		echo $post->{'regular-body'}."\n";
		gettags($post->{'tag'});
		echo "</div>"."\n";
	}
	
	// Type: Link
	else if($type == 'link')
	{
		echo '<div class="tumblr-post link">'."\n";
		echo '<div class="tumblr-date">'. $date .'</div>';
		echo '<a target="_blank" href="'.$post->{'link-url'}.'"><h4>'.$post->{'link-text'}."</h4></a>\n";
		echo $post->{'link-description'}."\n";
		gettags($post->{'tag'});
		echo "</div>"."\n";
	}
	
	// Type: Video
	else if($type == 'video')
	{
		echo '<div class="tumblr-post video">'."\n";
		echo '<div class="tumblr-date">'. $date .'</div>';
		echo $post->{'video-player'}[2];
		echo '<p>'.$post->{'video-caption'}."</p>\n";
		gettags($post->{'tag'});
		echo "</div>"."\n";
	}
	
	// Type: Quote
	else if($type == 'quote')
	{
		echo '<div class="tumblr-post tumblr-quote">'."\n";
		echo '<div class="tumblr-date">'. $date .'</div>';
		echo '<p>'.$post->{'quote-text'}."</p>\n";
		echo '<p class="tumblr-source">'.$post->{'quote-source'}."</p>\n";
		gettags($post->{'tag'});
		echo "</div>"."\n";
	}
	
	// Type: conversation
	else if($type == 'conversation')
	{
		echo '<div class="tumblr-post tumblr-conversation">'."\n";
		echo '<div class="tumblr-date">'. $date .'</div>';
		echo "<h4>".$post->{'conversation-title'}."</h4>\n";
		$conversation = explode("\n",$post->{'conversation-text'});
		foreach($conversation as $key=>$value)
		{
			if ($key % 2 == 0)
			{
				echo '<p class="tumblr-even"><strong>'.str_replace(':',':</strong>',$value)."</p>\n";
			}
			else
			{
				echo '<p class="tumblr-odd"><strong>'.str_replace(':',':</strong>',$value)."</p>\n"; 		
			}
		}
		gettags($post->{'tag'});
		echo "</div>"."\n";
	}
	
	if($post_number >$display_number)
		echo '<br /><a href="http://nwctrack.tumblr.com"><img src="assets/tumblr-link.png" alt="nwctrack.tumblr.com" width="" height="" border="0"></a>';
	
	echo "</div>"."\n\n";
	
}

function gettags($tags)
{
	// START TAGS
	if (isset($tags[1]))
	{
		echo '<ul class="tumblr-tags">';
		foreach ($tags as $tag)
			echo '<li>#'.$tag.'</li>';
		echo '</ul>';	
	}
	else if (isset($tags[0]))
		echo '<ul class="tumblr-tags"><li>#'.$tags.'</li></ul>';
}


?>

<script type="text/javascript">
$(function() {
	$('a.tumblr-photo-link').lightBox(); 
});
</script>



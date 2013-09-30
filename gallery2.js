// jQuery Image Gallery

$(document).ready(function(){

	//assign onclick handlers to anchors
	$("#imagegallery li a").click(function(event){			
		//when an a is clicked, grab the href
		var href = $(this).attr("href");
		$("#placeholder").fadeOut("fast", function(){
			$(this).attr("src", href);
			//fade back in
			$(this).fadeIn("fast");	
		});
		//assign the href as the src for the main page img
		
		//don't let browsere follow link href
		event.preventDefault();
	});
});
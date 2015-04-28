function fetchInstagramPosts(){
	var feed = new Instafeed({
		get: 'user',
		userId: 227012267,
		accessToken: '283823831.ee2c8fb.d8276e2ea678489f9a2d283b720dc64a',
		resolution: 'low_resolution',
		template: '<img class="instagramPhotoFormatting" onclick=OpenUrlInMobileOrWebpage("{{link}}","{{id}}") class="instagram" src="{{image}}"/>'
	});
	feed.run();	
}

function getInstagramUserInformation (){
	var client_id = "ee2c8fb2d5c24eab9054652cd7794526";
	var user_id = "227012267";
	var url = "https://api.instagram.com/v1/users/"+user_id+"?client_id="+client_id+"&callback=?";
	
	$.getJSON(url, function(data) {
		var userInstagramData = data.data;
		populateInstagramUserInformation(userInstagramData);
	});
}

function listenForScrollOnInstagramPage(){
	$(document).ready(function() {
	  	$(window).scroll(function(e){ 
	  		$el = $('#iconInstagramNavigation'); 
  			if ($(this).scrollTop() > 600 && $el.css('position') != 'fixed'){ 
    			$el.css({'position': 'fixed', 'top': '0px'}); 
  			}
  			if ($(this).scrollTop() < 600 && $el.css('position') == 'fixed'){
    			$el.css({'position': 'static', 'top': '0px'}); 
  			} 
		});
	});
}
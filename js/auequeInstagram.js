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
	  	$(window).scroll(function () {
	  		console.log($(window).scrollTop())
		    if ($(window).scrollTop() > 280) {
		      $('#iconInstagramNavigation').addClass('icon-bar-sticky-top');
		    }
		    if ($(window).scrollTop() < 281) {
				$('#iconInstagramNavigation').removeClass('icon-bar-sticky-top');
			}
		});
	});
}
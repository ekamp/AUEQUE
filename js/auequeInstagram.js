function fetchInstagramPosts(){
	var feed = new Instafeed({
		get: 'user',
		userId: 227012267,
		accessToken: '283823831.ee2c8fb.d8276e2ea678489f9a2d283b720dc64a'
		template: '<a class="instagram" href="{{link}}"><img src="{{image}}" /></a>'
	});
	feed.run();	
}
function fetchInstagramPosts(){
	var feed = new Instafeed({
		get: 'user',
		userId: 227012267,
		accessToken: '283823831.ee2c8fb.d8276e2ea678489f9a2d283b720dc64a'
		template: '<a class=\x22instagram\x22 href=\x22{{link}}\x22><img src=\x22{{image}}\x22 /></a>'
	});
	feed.run();	
}


//All information is stored within tumblr_api_read
console.log(tumblr_api_read);

//All the post information is stored within the posts portion of the object iterated thru and displayed below
for (var i=0;i<tumblr_api_read.posts.length;i++) {
	var postDate = tumblr_api_read.posts[i].date;
	document.write('<a href="' + tumblr_api_read.posts[i].url + '">'+postDate+'</a>');
}
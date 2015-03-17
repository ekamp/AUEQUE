// ##### Simple query to get Post information from Twitter #####
//id is the blog id collected from the widget and domid is the id of the element in which the data will be placed
function fetchTweets(){
	var tweetConfig = {
  		"id": '569271594577850368',
  		"domId": 'tweetList',
  		"enableLinks": true
	};
	twitterFetcher.fetch(tweetConfig);	
}

!function(d,s,id){
	var js,
	fjs=d.getElementsByTagName(s)[0],
	p=/^http:/.test(d.location)?'http':'https';
	if(!d.getElementById(id)){
		js=d.createElement(s);
		js.id=id;js.src=p+"://platform.twitter.com/widgets.js";
		fjs.parentNode.insertBefore(js,fjs);}
	}
	(document,"script","twitter-wjs");
}
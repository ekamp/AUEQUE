//Iconbar navigation items
var iconNavigationBar, homeNavigationItem ,twitterNavigationItem ,instagramNavigationItem ,aboutNavigationItem;

//Div content
var homeDiv, twitterDiv, instagramDiv, aboutDiv;

window.onload = function(){
	//Bind the iconbar objects
	iconNavigationBar = document.getElementById("iconNavigationBar");
	homeNavigationItem = document.getElementById("homeNavItem");
	twitterNavigationItem = document.getElementById("twitterNavItem");
	instagramNavigationItem = document.getElementById("instagramNavItem");
	aboutNavigationItem = document.getElementById("aboutNavItem");

	//Apply the click listeners
	homeNavigationItem.addEventListener("click",homeIconClicked,false);
	twitterNavigationItem.addEventListener("click",twitterIconClicked,false);
	instagramNavigationItem.addEventListener("click",instagramIconClicked,false);
	aboutNavigationItem.addEventListener("click",aboutIconClicked,false);

	//Bind the div content
	homeDiv =  document.getElementById("home");
	twitterDiv = document.getElementById("tweetList");
	instagramDiv = document.getElementById("instafeed");
	aboutDiv = document.getElementById("tumblrFeed");
}

/** OnClick functions **/

function homeIconClicked(){
	clearItemNavigationFormatting();
	iconNavigationBar.className = "icon-bar four-up icon-bar-blog-about";
	homeNavigationItem.className = "item active";
	requestAndShowHomeContent();
}

function twitterIconClicked(){
	clearItemNavigationFormatting();
	iconNavigationBar.className = "icon-bar four-up icon-bar-twitter";
	twitterNavigationItem.className = "item active";
	requestAndShowTwitterContent();
}

function instagramIconClicked(){
	clearItemNavigationFormatting();
	iconNavigationBar.className = "icon-bar four-up icon-bar-instagram";
	instagramNavigationItem.className = "item active";
	requestAndShowInstagramContent();
}

function aboutIconClicked(){
	clearItemNavigationFormatting();
	iconNavigationBar.className = "icon-bar four-up icon-bar-blog-about";
	aboutNavigationItem.className = "item active";
	requestAndShowAboutContent();

}

function clearItemNavigationFormatting(){
	homeNavigationItem.className = "item";
	twitterNavigationItem.className = "item";
	instagramNavigationItem.className = "item";
	aboutNavigationItem.className = "item";
}

function requestAndShowHomeContent(){
	homeDiv.className = "visible";
	twitterDiv.className="hidden";
	instagramDiv.className = "hidden";
	aboutDiv.className = "hidden";

	fetchTweets();
}

function requestAndShowTwitterContent(){
	homeDiv.className = "hidden";
	twitterDiv.className="visible";
	instagramDiv.className = "hidden";
	aboutDiv.className = "hidden";

	fetchTweets();
}

function requestAndShowInstagramContent(){
	homeDiv.className = "hidden";
	twitterDiv.className="hidden";
	instagramDiv.className = "visible";
	aboutDiv.className = "hidden";
	
	fetchInstagramPosts();
}

function requestAndShowAboutContent(){
	homeDiv.className = "hidden";
	twitterDiv.className="hidden";
	instagramDiv.className = "hidden";
	aboutDiv.className = "visible";
	
	fetchTumblrPosts();
}


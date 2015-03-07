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
}

function twitterIconClicked(){
	clearItemNavigationFormatting();
	iconNavigationBar.className = "icon-bar four-up icon-bar-twitter";
	twitterNavigationItem.className = "item active";

	homeDiv.className = "hidden";
	twitterDiv.className="visible";
	instagramDiv.className = "hidden";
	aboutDiv.className = "hidden";
	
	fetchTweets();
}

function instagramIconClicked(){
	clearItemNavigationFormatting();
	iconNavigationBar.className = "icon-bar four-up icon-bar-instagram";
	instagramNavigationItem.className = "item active";
}

function aboutIconClicked(){
	clearItemNavigationFormatting();
	iconNavigationBar.className = "icon-bar four-up icon-bar-blog-about";
	aboutNavigationItem.className = "item active";
}

function clearItemNavigationFormatting(){
	homeNavigationItem.className = "item";
	twitterNavigationItem.className = "item";
	instagramNavigationItem.className = "item";
	aboutNavigationItem.className = "item";
}
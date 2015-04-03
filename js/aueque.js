//Iconbar navigation items
var iconNavigationBar, homeNavigationItem ,twitterNavigationItem ,instagramNavigationItem ,aboutNavigationItem, snapChatNavigationItem;

//Image Icons
var homeNavigationIcon ,twitterNavigationIcon ,instagramNavigationIcon ,aboutNavigationIcon, snapChatNavigationIcon;

//Div content
var homeDiv, twitterDiv, instagramDiv, aboutDiv, snapChatDiv;

window.onload = function(){
	//Bind the iconbar objects
	iconNavigationBar = document.getElementById("iconNavigationBar");
	homeNavigationItem = document.getElementById("homeNavItem");
	twitterNavigationItem = document.getElementById("twitterNavItem");
	instagramNavigationItem = document.getElementById("instagramNavItem");
	aboutNavigationItem = document.getElementById("aboutNavItem");
	snapChatNavigationItem = document.getElementById("snapChatNavItem");

	//Apply the click listeners
	homeNavigationItem.addEventListener("click",homeIconClicked,false);
	twitterNavigationItem.addEventListener("click",twitterIconClicked,false);
	instagramNavigationItem.addEventListener("click",instagramIconClicked,false);
	aboutNavigationItem.addEventListener("click",aboutIconClicked,false);
	snapChatNavigationItem.addEventListener("click",snapChatIconClicked,false);

	//Bind the div content
	homeDiv =  document.getElementById("home");
	twitterDiv = document.getElementById("tweetList");
	instagramDiv = document.getElementById("instafeed");
	aboutDiv = document.getElementById("tumblrFeed");
	snapChatDiv = document.getElementById("snapChatFeed");

	//Bind the icon images
	homeNavigationIcon = document.getElementById("homeNavIcon");
	twitterNavigationIcon = document.getElementById("twitterNavIcon");
	instagramNavigationIcon = document.getElementById("instagramNavIcon");
	aboutNavigationIcon = document.getElementById("aboutNavIcon");
	snapChatNavigationIcon = document.getElementById("snapChatNavIcon");
}

/** OnClick functions **/
	
function homeIconClicked(){
	clearItemNavigationFormatting();
	iconNavigationBar.className = "icon-bar five-up icon-bar-blog-about";
	homeNavigationItem.className = "item active";
	homeThemeNavigationItems();
	requestAndShowHomeContent();
}

function twitterIconClicked(){
	clearItemNavigationFormatting();
	iconNavigationBar.className = "icon-bar five-up icon-bar-twitter";
	twitterNavigationItem.className = "item active";
	TwitterThemeNavigationItems();

	//If the twitter dive has no content then request the content and populate the feilds
	if (twitterDiv.childNodes.length < 2) {
    	requestAndShowTwitterContent();
	}
}

function instagramIconClicked(){
	clearItemNavigationFormatting();
	iconNavigationBar.className = "icon-bar five-up icon-bar-instagram";
	instagramNavigationItem.className = "item active";
	InstagramThemeNavigationItems();
	if (instagramDiv.childNodes.length < 2)) {
    	requestAndShowInstagramContent();
	}
}

function aboutIconClicked(){
	clearItemNavigationFormatting();
	iconNavigationBar.className = "icon-bar five-up icon-bar-blog-about";
	aboutNavigationItem.className = "item active";
	aboutThemeNavigationItems();
	requestAndShowAboutContent();
}

function snapChatIconClicked(){
	clearItemNavigationFormatting();
	iconNavigationBar.className = "icon-bar five-up icon-bar-snapChat";
	snapChatNavigationItem.className = "item active";
	snapChatThemeNavigationItems();
	requestAndShowSnapChatContent();
}

function clearItemNavigationFormatting(){
	homeNavigationItem.className = "item";
	twitterNavigationItem.className = "item";
	instagramNavigationItem.className = "item";
	aboutNavigationItem.className = "item";
	snapChatNavigationItem.className = "item";
}

/** Content requests **/

function requestAndShowHomeContent(){
	homeDiv.className = "visible";
	twitterDiv.className="hidden";
	instagramDiv.className = "hidden";
	aboutDiv.className = "hidden";
	snapChatDiv.className = "hidden"
	fetchTweets();
}

function requestAndShowTwitterContent(){
	homeDiv.className = "hidden";
	twitterDiv.className="visible";
	instagramDiv.className = "hidden";
	aboutDiv.className = "hidden";
	snapChatDiv.className = "hidden"
	fetchTweets();
}

function requestAndShowInstagramContent(){
	homeDiv.className = "hidden";
	twitterDiv.className="hidden";
	instagramDiv.className = "visible";
	aboutDiv.className = "hidden";
	snapChatDiv.className = "hidden"
	fetchInstagramPosts();
}

function requestAndShowAboutContent(){
	homeDiv.className = "hidden";
	twitterDiv.className="hidden";
	instagramDiv.className = "hidden";
	aboutDiv.className = "visible";
	snapChatDiv.className = "hidden"
	fetchTumblrPosts();
}

function requestAndShowSnapChatContent(){
	homeDiv.className = "hidden";
	twitterDiv.className="hidden";
	instagramDiv.className = "hidden";
	aboutDiv.className = "hidden";
	snapChatDiv.className = "visible"
}

/** Icon theming **/

function snapChatThemeNavigationItems(){
	aboutNavigationIcon.src = "img/snap-about.png";
	homeNavigationIcon.src = "img/snap-home.png";
	instagramNavigationIcon.src = "img/snap-ig.png";
	snapChatNavigationIcon.src = "img/snap-snap.png";
	twitterNavigationIcon.src = "img/snap-tweet.png";
}

function aboutThemeNavigationItems(){
	aboutNavigationIcon.src = "img/about-about.png";
	homeNavigationIcon.src = "img/about-home.png";
	instagramNavigationIcon.src = "img/about-ig.png";
	snapChatNavigationIcon.src = "img/about-snap.png";
	twitterNavigationIcon.src = "img/about-tweet.png";
}

function homeThemeNavigationItems(){
	aboutNavigationIcon.src = "img/home-about.png";
	homeNavigationIcon.src = "img/home-home.png";
	instagramNavigationIcon.src = "img/home-ig.png";
	snapChatNavigationIcon.src = "img/home-snap.png";
	twitterNavigationIcon.src = "img/home-tweet.png";
}

function InstagramThemeNavigationItems(){
	aboutNavigationIcon.src = "img/ig-about.png";
	homeNavigationIcon.src = "img/ig-home.png";
	instagramNavigationIcon.src = "img/ig-ig.png";
	snapChatNavigationIcon.src = "img/ig-snap.png";
	twitterNavigationIcon.src = "img/ig-tweet.png";
}

function TwitterThemeNavigationItems(){
	aboutNavigationIcon.src = "img/tweet-about.png";
	homeNavigationIcon.src = "img/tweet-home.png";
	instagramNavigationIcon.src = "img/tweet-ig.png";
	snapChatNavigationIcon.src = "img/tweet-snap.png";
	twitterNavigationIcon.src = "img/tweet-tweet.png";
}




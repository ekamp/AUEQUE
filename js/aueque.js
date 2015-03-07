//Bind the objects
var iconNavigationBar = document.getElementById("iconNavigationBar"),
	homeNavigationItem = document.getElementById("homeNavItem"),
	twitterNavigationItem = document.getElementById("twitterNavItem"),
	instagramNavigationItem = document.getElementById("instagramNavItem"),
	aboutNavigationItem = document.getElementById("aboutNavItem");

//Apply the click listeners
homeNavigationItem.addEventListener("click",homeIconClicked,false);
twitterNavigationItem.addEventListener("click",twitterIconClicked,false);
instagramNavigationItem.addEventListener("click",instagramIconClicked,false);
aboutNavigationItem.addEventListener("click",aboutIconClicked,false);

//Create the click functions
function homeIconClicked(){
	document.getElementById("iconNavigationBar").className = "icon-bar four-up icon-bar-blog-about";
}

function twitterIconClicked(){
	document.getElementById("iconNavigationBar").className = "icon-bar four-up icon-bar-twitter";
}

function instagramIconClicked(){
	document.getElementById("iconNavigationBar").className = "icon-bar four-up icon-bar-instagram";
}

function aboutIconClicked(){
	document.getElementById("iconNavigationBar").className = "icon-bar four-up icon-bar-blog-about";
}
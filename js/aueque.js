window.onload = function(){
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
}

/** OnClick functions **/

function homeIconClicked(){
	iconNavigationBar.className = "icon-bar four-up icon-bar-blog-about";
	document.getElementById("homeNavItem").className = "item active";
}

function twitterIconClicked(){
	iconNavigationBar.className = "icon-bar four-up icon-bar-twitter";
	document.getElementById("twitterNavItem").className = "item active";
}

function instagramIconClicked(){
	iconNavigationBar.className = "icon-bar four-up icon-bar-instagram";
	document.getElementById("instagramNavItem").className = "item active";
}

function aboutIconClicked(){
	iconNavigationBar.className = "icon-bar four-up icon-bar-blog-about";
	document.getElementById("aboutNavItem").className = "item active";
}
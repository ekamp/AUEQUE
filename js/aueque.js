window.onload = function(){
	//Bind the objects
	var iconNavigationBar = document.getElementById("iconNavigationBar"),
		homeNavigationItem = document.getElementById("homeNavItem"),
		twitterNavigationItem = document.getElementById("twitterNavItem"),
		instagramNavigationItem = document.getElementById("instagramNavItem"),
		aboutNavigationItem = document.getElementById("aboutNavItem");

	//Apply the click listeners
	iconNavigationBar.className = "icon-bar twitter five-up";
	homeNavigationItem.addEventListener("click",homeIconClicked,false);
	twitterNavigationItem.addEventListener("click",twitterIconClicked,false);
	instagramNavigationItem.addEventListener("click",instagramIconClicked,false);
	aboutNavigationItem.addEventListener("click",aboutIconClicked,false);	
}

/** OnClick functions **/

function homeIconClicked(){
	iconNavigationBar.className = "icon-bar five-up icon-bar-blog-about";
}

function twitterIconClicked(){
	alert("clicking twitter icon");
	iconNavigationBar.className = "icon-bar four-up icon-bar-twitter";
}

function instagramIconClicked(){
	iconNavigationBar.className = "icon-bar four-up icon-bar-instagram";
}

function aboutIconClicked(){
	iconNavigationBar.className = "icon-bar four-up icon-bar-blog-about";
}
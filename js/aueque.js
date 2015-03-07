var iconNavigationBar, homeNavigationItem ,twitterNavigationItem ,instagramNavigationItem ,aboutNavigationItem;

window.onload = function(){
	//Bind the objects
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
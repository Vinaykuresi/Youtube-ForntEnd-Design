const openSideNav = () => {
	console.log('clicked')
	document.querySelector(".sidenav-bar").classList.contains('hidden') ?
	document.querySelector(".sidenav-bar").classList.remove("hidden") :
	document.querySelector(".sidenav-bar").classList.add("hidden") 
}
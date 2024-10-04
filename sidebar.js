const root = document.documentElement;
const searchBar = document.getElementById("searchBarInput");
const sideBarMiscsSpans = document.querySelectorAll("#sideBarMiscs button span");
const sideBarButton = document.getElementById("sideBarButton");
const logoImage = document.getElementById("logoImage")
const profileInfo = document.getElementById("profileInfo")

function openSideBar() {
	root.style.setProperty("--sidebar-width", "250px");
	root.style.setProperty("--searchbar-color", "#8ed7c6");
	searchBar.style.setProperty("padding-left", "32px");
	searchBar.style.setProperty("color", "#084236");
	searchBar.placeholder = "Buscar";
	setTimeout(() => {
		sideBarMiscsSpans.forEach(span => {
			span.style.display = "inline";
		});
		logoImage.style.display = "inline";
		profileInfo.style.display = "flex";
	}, 200);
	sideBarButton.onclick = closeSideBar;
}

function closeSideBar() {
	root.style.setProperty("--sidebar-width", "74px");
	root.style.setProperty("--searchbar-color", "#dde4e4");
	searchBar.style.removeProperty("padding-left");
	searchBar.style.setProperty("color", "transparent");
	searchBar.placeholder = "";
	sideBarMiscsSpans.forEach(span => {
		span.style.display = "none";
	});
	logoImage.style.display = "none";
	profileInfo.style.display = "none";
	sideBarButton.onclick = openSideBar;
}
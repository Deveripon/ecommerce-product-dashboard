// Nav menu active class toggle

// ==============================================
const navButton = document.querySelectorAll(".nav-button");
navButton.forEach((item) => {
	item.addEventListener("click", function () {
		navButton.forEach((item) => {
			item.classList.remove("active");
			item.parentElement.classList.remove("active");
		});
		item.classList.add("active");
		item.parentElement.classList.add("active");
	});
});

const linkItem = document.querySelectorAll(".link-item");
const submenuItem = document.querySelectorAll(".submenu-item");
linkItem.forEach((item) => {
	item.addEventListener("click", function (e) {
		e.preventDefault();
		linkItem.forEach((item) => {
			item.classList.remove("active");
		});
		item.classList.add("active");
	});
});

submenuItem.forEach((item) => {
	item.addEventListener("click", function (e) {
		e.preventDefault();
		submenuItem.forEach((item) => {
			item.classList.remove("active");
		});
		item.classList.add("active");
	});
});

// Navbar function
const mainContent = document.querySelector("#main-content");
const mobileNavbar = document.querySelector(".mobile-navbar");
const mobileLink = document.querySelectorAll(".mobile-link");
const openButton = document.querySelector(".open-button");

openButton.addEventListener("click", function open() {
	mobileNavbar.classList.toggle("open");
	mainContent.classList.toggle("active");
	if (mobileNavbar.classList.contains("open")) {
		openButton.src = "images/icon-close.svg";
	} else {
		openButton.src = "images/icon-hamburger.svg";
	}
});

mobileLink.forEach((l) =>
	l.addEventListener("click", function close() {
		mobileNavbar.classList.remove("open");
		mainContent.classList.remove("active");
		if (mobileNavbar.classList.contains("open")) {
			openButton.src = "images/icon-close.svg";
		} else {
			openButton.src = "images/icon-hamburger.svg";
		}
	})
);

// NavLink active on section
const links = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

function changeLinkState() {
	let index = sections.length;

	while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

	links.forEach((link) => link.classList.remove("active"));
	links[index].classList.add("active");
}
changeLinkState();
window.addEventListener("scroll", changeLinkState);


//Form validation
function formValidation() {
	let emptyField = document.querySelectorAll("input");
	let name = document.querySelector("#name");
	let email = document.querySelector("#email");
	let date = document.querySelector("#date");
	let timeMorning = document.querySelector("#morning-checkbox");
	let timeAfternoon = document.querySelector("#afternoon-checkbox");
	let nameInvalid = document.querySelector(".invalid-name");
	let emailInvalid = document.querySelector(".invalid-email");
	let dateInvalid = document.querySelector(".invalid-date");
	let timeInvalid = document.querySelector(".invalid-checkbox");

	emptyField.forEach((e) => {
		if (e.value === "" || e.value === null) {
			nameInvalid.style.display = "block";
			emailInvalid.style.display = "block";
			dateInvalid.style.display = "block";
			timeInvalid.style.display = "block";

			return false;
		} else {
			name.classList.remove("invalid");
			email.classList.remove("invalid");
			date.classList.remove("invalid");
			nameInvalid.style.display = "none";
			emailInvalid.style.display = "none";
			dateInvalid.style.display = "none";
			timeInvalid.style.display = "none";

			return true;
		}
	});

	if (name.value === "" || name.value === null) {
		nameInvalid.style.display = "block";
		name.classList.add("invalid");
		return false;
	} else if (email.value === "" || email.value === null) {
		emailInvalid.style.display = "block";
		email.classList.add("invalid");
		return false;
	} else if (date.value === "" || email.value === null) {
		dateInvalid.style.display = "block";
		date.classList.add("invalid");
		return false;
	} else if (
		timeMorning.checked === false &&
		timeAfternoon.checked === false
	) {
		timeInvalid.style.display = "block";
		return false;
	} else {
		nameInvalid.style.display = "none";
		emailInvalid.style.display = "none";
		dateInvalid.style.display = "none";
		timeInvalid.style.display = "none";
		return true;
	}
}

// Back to Top button 

window.addEventListener('scroll', () => {
    const topButton = document.querySelector(".top-button");
    topButton.classList.toggle("appear", window.scrollY > 3000);
})
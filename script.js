let input = document.getElementById("input");
let error = document.getElementById("error");
let awoked = document.getElementById("awoked");

function annoy(inputtxt) {
	var numbers = "68351";
	var kontol = "awok";
	if (!inputtxt.value.match(numbers)) {
		inputtxt.value = [];
		error.innerHTML = "Please insert characters only";
	} else {
		if (!inputtxt.value.match(kontol)) {
			inputtxt.value = [];
			awoked.innerHTML = "Download Intro";
		}
	}
}
function kontol(inputtxt) {
	var awok = "68351";
	if (inputtxt.value.includes(awok)) {
		error.innerHTML = "Download Intro";
		return true;
	}
}
function jam() {
	var jam = new Date();
	setTimeout("jam()", 1000);
	document.getElementById("jam").innerHTML = jam.getHours();
	document.getElementById("menit").innerHTML = jam.getMinutes();
	document.getElementById("detik").innerHTML = jam.getSeconds();
}

window.setTimeout("jam()", 1000);

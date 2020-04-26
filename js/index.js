function print_result() {
	alert("Name : " + document.f1.name.value +
	"\nAge : " + document.f1.age.value +
	"\nE-mail : " + document.f1.mail.value +
	"\nComment : " + document.f1.comments.value);
}

window.onload = function () {
    function change() {
        let bgImg = ["/img/bg1.png", "/img/bg2.png", "/img/bg3.png"];
        let i = Math.floor((Math.random() * 3));
        document.body.style.backgroundImage = 'url("' + bgImg[i] + '")';
    }
    window.setInterval(change, 5000);
};

var pg = 1;
showDivs(pg);

function change(n) {
	showDivs(pg += n);
}

function showDivs(n) {
	var i;
	var x = document.getElementsByClassName("page");
	if (n > x.length) {pg = 1}
	if (n < 1) {pg = x.length}
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x[pg-1].style.display = "block";
};
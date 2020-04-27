function print_result() {
	let phnum = document.getElementsByClassName('tel')
	if (phnum.length != 8) {
		alert('Phone Number is invalid');
	} else {
		alert("Name : " + document.f1.name.value +
			"\nAge : " + document.f1.age.value +
			"\nE-mail : " + document.f1.mail.value +
			"\nPhone Number :" + document.f1.tel.value +
			"\nComment : " + document.f1.comments.value);
	}
}

//when website loaded start this function
window.onload = function () {
	//function change
    function changepg() {
    	//3 image in array
        let bgImg = ["/img/bg1.png", "/img/bg2.png", "/img/bg3.png"];
        //get random number 0 to 2
        let i = Math.floor((Math.random() * 3));
        //set bg
        document.body.style.backgroundImage = 'url("' + bgImg[i] + '")';
    }
    //cool down 5000ms and loop change function
    window.setInterval(changepg, 5000);
};

//show 1st page
var pg = 1;
showDivs(pg);

//change page function
function change(n) {
	//show current page += n
	showDivs(pg += n);
}

function showDivs(n) {
	var i;
	//all class = page in array x
	var x = document.getElementsByClassName("page");
	//if n > number of pages and show 1st page
	if (n > x.length) {pg = 1}
	//if n < 1 show last page
	if (n < 1) {pg = x.length}
	//display none all page
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	//display selected page
	x[pg-1].style.display = "block";
};
function print_result() {
	var name = document.forms["f1"]["name"].value;
	var age = document.forms["f1"]["age"].value;
	var email = document.forms["f1"]["mail"].value;
	var tel = document.forms["f1"]["tel"].value;
	var comment = document.forms["f1"]["comments"].value;

	var check_name_str = /[a-z]|[A-Z]/;
	var check_name_num = /[1234567890]/;
	var check_email = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
	var check_tel = /^[2]|^[3]|^[5]|^[6]|^[7]|^[9]/;

	if (name == "" || age == "" || email == "" || tel == "" || comment == "") {
		alert("Please fill out all field");
	} else if (age > 121 || -1 > age) {
		alert("Age must be 0 to 120")
	} else if (!(check_name_str.test(name)) || check_name_num.test(name) ){
		alert("Letters only");
	} else if (!(check_email.test(email))) {
		alert("Please input valid email address");
	} else if (!(check_tel.test(tel)) || tel.toString().length != 8) {
		alert("Please input valid phone number");
	} else {
		alert("Name : " + name +
			"\nAge : " + age +
			"\nE-mail : " + email +
			"\nPhone Number : " + tel +
			"\nComment : " + comment);
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
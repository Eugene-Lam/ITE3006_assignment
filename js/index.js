window.onload = function () {
    function change() {
        const bgImg = ["./img/bg1.png", "./img/bg2.png", "./img/bg3.png"];
        const i = Math.floor((Math.random() * 3));
        document.body.style.backgroundImage = 'url("' + bgImg[i] + '")';
    }
    window.setInterval(change, 5000);
}

var pg = 1;
function nextpg() {
 pg;
    	for (let p of pages) {
		if (pg > pages.length) {
			pg = 1;
		}
        if (p.id != pg) {
            p.
        }
    
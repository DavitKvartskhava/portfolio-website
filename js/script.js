// let a = document.getElementById("face");
// console.log(a);
let portrait_image = document.getElementById("face");
// console.log(portrait_image);
// portrait_image.addEventListener("mouseover", change_pic,false);
// portrait_image.addEventListener("mouseout", change_pic_back);


// function change_pic(){
// 	portrait_image.src = "assets/images/davit-2.jpg";
// }

// function change_pic_back(){
// 	portrait_image.src = "assets/images/davit.jpg";
// }

position = portrait_image.getBoundingClientRect();
let center_X = position.x+position.width/2;
let center_Y = position.y+position.height/2;

function get_quadrant(i, j) {
	if(i >= 0 && j >= 0) {
		return 'UL';
	} else if (i >= 0 && j < 0) {
		return 'DL';
	} else if (i < 0 && j >= 0) {
		return 'UR';
	} else {
		return 'DR';
	}
}

// tracks mouse
document.addEventListener('mousemove', (event) => {
	let diff_X = center_X-event.clientX;
	let diff_Y = center_Y-event.clientY;
	let direction = get_quadrant(diff_X, diff_Y);
	portrait_image.src = "assets/images/"+direction+".jpeg";
	// console.log("X:", event.clientX, "Y:", event.clientY);
	// console.log("the image is at x:", center_X, "y:", center_Y);
	// console.log("diff x:", diff_X, "diff y:", diff_Y);
	console.log("image:", portrait_image.src);

});
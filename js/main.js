/** 
* Main function to execute all code
* @method
*/
function main() {
	var userName = getUserName();
	var phoneNumber = getPhoneNumber(userName);
	var location = getLocation(phoneNumber);
	var images = getImages();
	
	//Set interval to replace new images that are loaded as scrolling down the pageX
	setInterval(function() {
		images = getImages();
		replaceImages(images, location);
	}, 3000);
}

main();
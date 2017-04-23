/**
* Collect array of images from facebook page
* @method
* @return {array}
*/
function getImages() {
	var images = document.querySelectorAll('div.fbUserContent img');
	return images;
}

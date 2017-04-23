/**
* Get image height
* @method
* @param {object}
* @return{short}
*/
function getImageHeight(image) {
	return image.height;
}

/**
* Get image width
* @method
* @param {object}
* @return{short}
*/
function getImageWidth(image) {
	return image.width;
}

/**
* Replace all images on facebook from images array with kittens or placeholder
* @method
* @param {array} images Collection of objects from images on facebook
* @param {string} location Users location from phone number
*/
function replaceImages(images, location) {
	var baseImageUrl, height, width, image;
	switch (location) {
	case 'Memphis' :
		// Use placeholder for Memphis
		baseImageUrl = 'http://placehold.it/';
		break;
	default :
		baseImageUrl = 'http://placekitten.com/g/';
		break;
	}
	for (var i = 0; i<images.length; i++) {
		image = images[i];
		height = getImageHeight(image);
		width = getImageWidth(image);
		image.src = baseImageUrl + width + '/' + height;
	}
}
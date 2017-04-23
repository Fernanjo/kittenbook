var values = {
	projectName : 'kittenbook',
	versionNumber : '0.0.2',
	areaCodes : {
		'408' : 'Silicon Valley',
		'702' : 'Las Vegas',
		'801' : 'Northern Utah',
		'765' : 'West Lafayette',
		'901' : 'Memphis',
		'507' : 'Rochester, MN'
	}
	
};

/**
* Function to return area codes from object array
* @method
* @return {string} location name based on numerical area code from phone number
*/
function getAreaCodes() {
	return values.areaCodes;
}
//Regex pattern for phone number,
//Used in validatePhoneNumber and getPhoneNumber
//Made global to save repetition of code in functions
var phoneNumberPattern = (/(?:1-)?\(?(\d{3})(?:-|\) ?)\d{3}-\d{4}/);

/**
* Get user name with function
* @method
* @return {string}
*/
function getUserName() {
	var userName = prompt('Hello, what\'s your name?');
	//Check for valid userName
	if (!userName) {
		userName = prompt('You didn\'t enter a name. Really, what\'s your name?');
	}
	
	return userName;
}

/**
* Validate phone number formula
* @method
* @param {string} phoneNumber The phone number to be validated
* @return {boolean}
*/
function validatePhoneNumber(phoneNumber) {
	//Check phone number with Regex
	return phoneNumberPattern.test(phoneNumber);
}

/**
* Get user phone number with function and validate
* @method
* @param {string} userName Name entered into prompt
* @return {string}
*/
function getPhoneNumber(userName) {
	var phoneNumber = prompt('Hello ' + userName + ', what\'s your phone number?');
	//Validate phone number with function
	if (!validatePhoneNumber(phoneNumber)) {
		phoneNumber = prompt('Please enter a valid phone number');
	}
	return phoneNumber;
}

/**
* Determine location based on a phone number
* @method
* @param {string} phoneNumber Phone Number collecred and validated from prompr
* @return {string}
*/
function getLocation(phoneNumber) {
	//Create matches for phone number in form of [phone number, area code]
	var phoneMatches = phoneNumberPattern.exec(phoneNumber);
	var areaCodes, areaCode, locationName;
	if (phoneMatches) {
		areaCode = phoneMatches[1];
		areaCodes = getAreaCodes();
		locationName = areaCodes[areaCode];
	}
	
	//Return the location name if it exists, otherwise return 'somewhere'
	return locationName ? locationName : 'somewhere';
}

//Write output to kittenbook
//document.body.innerHTML = output;
/**
* Collect array of images from facebook page
* @method
* @return {array}
*/
function getImages() {
	var images = document.querySelectorAll('div.fbUserContent img');
	return images;
}

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
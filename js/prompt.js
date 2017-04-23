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
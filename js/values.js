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
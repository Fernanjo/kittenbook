describe('prompt.js', function() {
	
	describe('getUserName', function() {
		
		//Check that the function calls a prompt window
		it('should call window.prompt', function() {
			var result;
			spyOn(window, 'prompt');
			result = getUserName();
			expect(prompt).toHaveBeenCalled();
		});
	});
	
	describe('validatePhoneNumber', function() {
		
		//Check that the function returns a boolean
		it('should return a boolean', function() {
			var result = validatePhoneNumber('12345');
			expect(typeof result).toBe('boolean');
		});
		
		//Check that the function accepts a 1-800 number
		it('should accept a 1-800 number', function() {
			var result = validatePhoneNumber('1-800-867-5309');
			expect(result).toBe(true);
		});
		
		it('should return false for poorly formatted 10 digit number', function() {
			var result = validatePhoneNumber('705-1234567');
			expect(result).toBe(false);
		});
		
		it('should return true for number with parentheses', function() {
			var result = validatePhoneNumber('(705)123-4567');
			expect(result).toBe(true);
		});
		
		it('should return true for number with parentheses and a space', function() {
			var result = validatePhoneNumber('(702) 555-4321');
			expect(result).toBe(true);
		});
		
		it('should return true when separated by dashes', function() {
			var result = validatePhoneNumber('702-555-4321');
			expect(result).toBe(true);
		});

		it('should return true with a preceding "1-"', function() {
			var result = validatePhoneNumber('1-(702) 555-4321');
			expect(result).toBe(true);
			result = validatePhoneNumber('1-(702)555-4321');
			expect(result).toBe(true);
			result = validatePhoneNumber('1-702-555-4321');
			expect(result).toBe(true);
		});
	});
	
	describe('getPhoneNumber', function() {
		it('should call window.prompt', function() {
			var result;
			spyOn(window, 'prompt');
			result = getPhoneNumber();
			expect(window.prompt).toHaveBeenCalled();
		});
	});

	describe('getLocation', function() {
		it('should return a string', function() {
			var result = getLocation('702-555-5678');
			expect(typeof result).toEqual('string');
		});

		it('should call getAreaCodes', function() {
			spyOn(window, 'getAreaCodes').and.returnValue({'801': 'Utah'});
			getLocation('801-555-2983');
			expect(window.getAreaCodes).toHaveBeenCalled();
		});

		it('should return the correct location', function() {
			var areaCodes = getAreaCodes(),
				correctLocation = areaCodes['901'],
				result = getLocation('901-555-4242');
		expect(result).toEqual(correctLocation);
		});

		it('should return "somewhere" for unkown area codes', function() {
			var result = getLocation('555-555-5555');
			expect(result).toEqual('somewhere');
		});
	});
});
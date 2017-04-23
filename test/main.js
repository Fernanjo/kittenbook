describe('main.js', function() {
	describe('main', function() {
		
		//Check that getUserName is called
		it('should call getUserName', function() {
			spyOn(window, 'getUserName');
			main();
			expect(getUserName).toHaveBeenCalled();
		});
		
		//Check that getPhoneNumber is called with an argument from getUserName
		it('should call getPhoneNumber with value from getUserName', function() {
			spyOn(window, 'getUserName').and.returnValue('Jimmy');
			spyOn(window, 'getPhoneNumber');
			main();
			expect(getPhoneNumber).toHaveBeenCalled();
			expect(getPhoneNumber.calls.mostRecent().args[0]).toBe('Jimmy'); 
		});
		
		//Check that getLocation is called with an argument from phoneNumber
		it('should call getLocation with value from getPhoneNumber', function() {
			spyOn(window, 'getPhoneNumber').and.returnValue('408-123-4567');
			spyOn(window, 'getLocation');
			main();
			expect(getLocation).toHaveBeenCalled();
			expect(getLocation.calls.mostRecent().args[0]).toBe('408-123-4567'); 
		});
		
		//Check that getImages is called
		it('should call getImages', function() {
			spyOn(window, 'getImages');
			main();
			expect(getImages).toHaveBeenCalled();
		});
		
		it('should call replaceImages with the array from getImages and the location from getLocation', function(done) {
			var images = [new Image()];
			spyOn(window, 'getImages').and.returnValue(images);
			spyOn(window, 'getLocation').and.returnValue('Las Vegas');
			spyOn(window, 'replaceImages');
			main();

			// Because main.js waits 3 seconds before it calls replaceImages, we have to wait 3 seconds
			// before we check that replaceImages was called.
			setTimeout(function() {
				expect(window.replaceImages).toHaveBeenCalled();
				expect(window.replaceImages.calls.mostRecent().args[0]).toEqual(images);
				expect(window.replaceImages.calls.mostRecent().args[1]).toEqual('Las Vegas');
				done();
			}, 3050);
		});
	});
});
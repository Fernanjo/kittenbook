describe('values.js', function() {

  describe('getAreaCodes', function() {
    it('should get an object containing area codes', function() {
      expect(getAreaCodes()).toBe(values.areaCodes);
    });
  });
});
describe('triangles', function() {
	it('takes three line lengths and returns false for not being a triangle', function() {
		expect(triangles(3, 5, 10)).to.equal(false);
	});

	it('takes three line lengths and returns equilateral', function() {
		expect(triangles(3, 3, 3)).to.equal('equilateral');
	});
});
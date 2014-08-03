"use strict";
// Import
var expect = require('chai').expect,
	joe = require('joe')

// Test
joe.describe('trickle plugin', function(describe,it){
	var Chainy = require('chainy-core').subclass().require('set').addExtension('trickle', require('../'))
	it("should work", function(next){
		Chainy.create()
			.set([1,2,3])
			.trickle(function(a,b,c){
				expect(a).to.equal(1)
				expect(b).to.equal(2)
				expect(c).to.equal(3)
				return [a*2, b*2, c*2]
			})
			.trickle(function(a,b,c,next){
				expect(a).to.equal(2)
				expect(b).to.equal(4)
				expect(c).to.equal(6)
				next()
			})
			.done(function(err, result){
				if (err)  return next(err)
				expect(result).to.deep.equal([2,4,6])
				return next()
			})
	})
})
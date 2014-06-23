"use strict";
// Import
var expect = require('chai').expect,
	joe = require('joe')

// Test
joe.describe('trickle plugin', function(describe,it){
	var Chainy = require('chainy-core').subclass().require('set').addExtension('trickle', require('../'))

	it("should trickle correctly", function(next){
		Chainy.create()
			.set('*')
			.trickle(function(a, complete){
				expect(a, 'initial trickle').to.eql('*')
				complete(null, 1, 2, 3)
			})
			.trickle(function(a, b, c, complete){
				expect([a, b, c], 'multiple args trickle').to.deep.equal([1, 2, 3])
				complete()
			})
			.trickle(function(){
				var args = Array.prototype.slice.call(arguments)
				expect(args, 'carry on').to.deep.equal([1, 2, 3])
				return 'done'
			})
			.done(function(err, result){
				if (err)  return next(err)
				expect(result).to.eql('done')
				return next()
			})
	})
})
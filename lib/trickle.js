"use strict";
var Chainy = require('chainy-core')
module.exports = function(method, opts){
	if ( opts == null )  opts = {}
	if ( opts.args == null )  opts.args = [Chainy.injectExpandedChainDataAsArguments]
	return this.action(method, opts)
}
module.exports.extensionType = 'utility'
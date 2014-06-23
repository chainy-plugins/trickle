"use strict";
module.exports = function(method, opts){
	if ( opts == null )  opts = {}
	if ( opts.prependResultToArguments == null )  opts.prependResultToArguments = 'all'  // default for this is `true`
	if ( opts.setArgumentsAsResult == null )  opts.setArgumentsAsResult = true  // this is already the default, but just be double sure in case it changes in the future
	return this.action(method, opts)
}
module.exports.extensionType = 'utility'
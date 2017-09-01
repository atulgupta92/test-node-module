// This is not the main file in the npm package, but here so we can use github
// tarballs as packages when necessary.
function testing(){
	console.log("testing npm khelo");
}
module.exports = require("./build/");

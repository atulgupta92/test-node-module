// This is not the main file in the npm package, but here so we can use github
// tarballs as packages when necessary.
function testing(){
	console.log("testing v0.1.1");
}
module.exports = require("./build/");

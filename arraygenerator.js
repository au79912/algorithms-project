// generate a .txt file with a array of 10000 random numbers

array = new Array(10000)
for (var i = 0; i < 10000; i++) {
	array[i] = Math.floor(Math.random() * 1000)
}

// write the array to a .txt file using fs
var fs = require('fs')
fs.writeFile('array.txt', array.join("\n"), function (err) {
	if (err) throw err
	console.log('Saved!')
})

array = new Array(1000000)
for (var i = 0; i < array.length ; i++) {
	array[i] = Math.floor(Math.random() * 1000)
}

var fs = require('fs')
fs.writeFile('array.txt', array.join("\n"), function (err) {
	if (err) throw err
	console.log('Saved!')
})

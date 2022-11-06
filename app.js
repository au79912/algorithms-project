var arr = new Array()
var buttonClicked
var buttonCheck = false

function checkbtn() {
	for (var i = 1; i <= 10; i++) {
		document.getElementById("btn" + i).addEventListener("click", select())
	}
}

function select(array) {
	if (buttonClicked == "btn1") {
		insertion_sort(array)
	} else if (buttonClicked == "btn2") {
		bubble_sort()
	} else if (buttonClicked == "btn3") {
		merge_sort()
	} else if (buttonClicked == "btn4") {
		heap_sort()
	} else if (buttonClicked == "btn5") {
		quick_sort()
	} else if (buttonClicked == "btn6") {
		radix_sort()
	} else if (buttonClicked == "btn7") {
		bucket_sort()
	} else if (buttonClicked == "btn8") {
		counting_sort()
	}
}


function changeColor(id) {
	if (buttonCheck == false) {
		var element = document.getElementById(id)
		element.style.backgroundColor = "green"
		console.log(buttonCheck)
		buttonCheck = true
	} else {
		for (var i = 1; i <= 10; i++) {
			document.getElementById("btn" + i).style.backgroundColor = "buttonface"
		}
		var element = document.getElementById(id)
		element.style.backgroundColor = "green"
		console.log(buttonCheck)
	}

	buttonClicked = id
}


function createArray(size) {
	var array = new Array()
	const input = document.getElementById("file")
	const displayArray = document.getElementById("array")
	displayArray.innerHTML = "Unsorted Array: "
	const reader = new FileReader()
	reader.onload = function () {
		const lines = reader.result.split("\n")
		for (var i = 0; i < size; i++) {
			array[i] = parseInt(lines[i])
			// console.log(array[i])
			// display the first 20 numbers of array in the div with id array separated by comma if array size is greater than 20 make a show all button
			if (i == size - 1) {
				displayArray.innerHTML += array[i]
			} else {
				displayArray.innerHTML += array[i] + ", "
			}
		}
	}
	reader.readAsText(input.files[0])
}


function insertion_sort(array) {
	// sort the array using insertion sort and display the sorted array in the div with id sortedArray
	// document.getElementById("array").innerHTML = "<p>insertion sort</p>"
	console.log(array)
	var sortedArray = document.getElementById("sortedArray")
	sortedArray.innerHTML = "Sorted Array: "
	for (var i = 1; i < array.length; i++) {
		var j = i - 1
		var temp = array[i]
		while (j >= 0 && array[j] > temp) {
			array[j + 1] = array[j]
			j--
		}
		array[j + 1] = temp
	}
	for (var i = 0; i < array.length; i++) {
		if (i == array.length - 1) {
			sortedArray.innerHTML += array[i]
		} else {
			sortedArray.innerHTML += array[i] + ", "
		}
	}
}

function bubble_sort() {
	// sort the array
	// add <p>sorting name</p> to the div with id array
	document.getElementById("array").innerHTML = "<p>bubble sort</p>"
}

function merge_sort() {
	// sort the array
	// add <p>sorting name</p> to the div with id array
	document.getElementById("array").innerHTML = "<p>merge sort</p>"
}

function heap_sort() {
	// sort the array
	// add <p>sorting name</p> to the div with id array
	document.getElementById("array").innerHTML = "<p>heap sort</p>"
}

function quick_sort() {
	// sort the array
	// add <p>sorting name</p> to the div with id array
	document.getElementById("array").innerHTML = "<p>quick sort</p>"
}

function radix_sort() {
	// sort the array
	// add <p>sorting name</p> to the div with id array
	document.getElementById("array").innerHTML = "<p>radix sort</p>"
}

function bucket_sort() {
	// sort the array
	// add <p>sorting name</p> to the div with id array
	document.getElementById("array").innerHTML = "<p>bucket sort</p>"
}

function counting_sort() {
	// sort the array
	// add <p>sorting name</p> to the div with id array
	document.getElementById("array").innerHTML = "<p>counting sort</p>"
}

// add event listener to the button11 and get the value of the arraysize input
document.getElementById("btn11").addEventListener("click", function () {
	var arraysize = document.getElementById("arraySize").value
	document.getElementById("array").innerHTML = ""
	// call the function to create the array
	createArray(arraysize)
})

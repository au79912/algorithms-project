function checkbtn() {
	for (var i = 1; i <= 10; i++) {
		document.getElementById("btn" + i).addEventListener("click", select())
	}
}

function select () {
	if (this.id == "btn1") {
		insertion_sort()
	} else if (this.id == "btn2") {
		bubble_sort()
	} else if (this.id == "btn3") {
		merge_sort()
	} else if (this.id == "btn4") {
		heap_sort()
	} else if (this.id == "btn5") {
		quick_sort()
	} else if (this.id == "btn6") {
		radix_sort()
	} else if (this.id == "btn7") {
		bucket_sort()
	} else if (this.id == "btn8") {
		counting_sort()
	}
}

function createArray(size) {
	
}

function insertion_sort() {
	// sort the array
	// add <p>sorting name</p> to the div with id array
	document.getElementById("array").innerHTML = "<p>insertion sort</p>"
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
	// call the function to create the array
	createArray(arraysize)
})

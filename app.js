var buttonClicked
var buttonCheck = false
let yValues = []

function checkbtn() {
	for (var i = 1; i <= 10; i++) {
		document.getElementById("btn" + i).addEventListener("click", select())
	}
}

function select(array) {
	if (buttonClicked == "btn1") {
		insertion_sort(array)
	} else if (buttonClicked == "btn2") {
		bubble_sort(array)
	} else if (buttonClicked == "btn3") {
		merge_sort(array)
	} else if (buttonClicked == "btn4") {
		heap_sort(array)
	} else if (buttonClicked == "btn5") {
		quick_sort(array)
	} else if (buttonClicked == "btn6") {
		radix_sort(array)
	} else if (buttonClicked == "btn7") {
		bucket_sort(array)
	} else if (buttonClicked == "btn8") {
		courting_sort(array)
	} else if (buttonClicked == "btn9") {
		book_QuickSort(array)
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
	if (size > 1000000) {
		alert("Array size must be less than 1 million")
	} else {
		const input = document.getElementById("file")
		const displayArray = document.getElementById("array")
		displayArray.innerHTML = "Unsorted Array: "
		const reader = new FileReader()
		reader.onload = function () {
			let array = new Array()
			const lines = reader.result.split("\n")
			for (var i = 0; i < size; i++) {
				array[i] = parseInt(lines[i])
				if (i == size - 1) {
					displayArray.innerHTML += array[i]
				} else {
					displayArray.innerHTML += array[i] + ", "
				}
			}
			select(array)
		}
		reader.readAsText(input.files[0])
	}
}

function insertion_sort(array) {
	var sortedArray = new Array()
	for (var i = 0; i < array.length; i++) {
		sortedArray[i] = array[i]
	}
	var startTime = performance.now()
	for (var i = 1; i < sortedArray.length; i++) {
		var temp = sortedArray[i]
		var j = i - 1
		while (j >= 0 && sortedArray[j] > temp) {
			sortedArray[j + 1] = sortedArray[j]
			j--
		}
		sortedArray[j + 1] = temp
	}
	var endTime = performance.now()
	var time = endTime - startTime

	yValues[0] = time

	document.getElementById("sortedArray").innerHTML = "Sorted Array: "

	for (var i = 0; i < sortedArray.length; i++) {
		if (i == sortedArray.length - 1) {
			document.getElementById("sortedArray").innerHTML += sortedArray[i]
		} else {
			document.getElementById("sortedArray").innerHTML += sortedArray[i] + ", "
		}
	}
	document.getElementById("time").innerHTML = "Time: " + time + "ms"
	document.getElementById("time").innerHTML += "<br>" + "Time Complexity: O(2<sup>2</sup>)"
	document.getElementById("time").innerHTML += "<br>Space Complexity: O(1)"
}

function bubble_sort(array) {
	var sortedArray = new Array()
	for (var i = 0; i < array.length; i++) {
		sortedArray[i] = array[i]
	}
	var startTime = performance.now()
	for (var i = 0; i < sortedArray.length; i++) {
		for (var j = 0; j < sortedArray.length - 1; j++) {
			if (sortedArray[j] > sortedArray[j + 1]) {
				var temp = sortedArray[j]
				sortedArray[j] = sortedArray[j + 1]
				sortedArray[j + 1] = temp
			}
		}
	}
	var endTime = performance.now()
	var time = endTime - startTime

	// yValues.push[(time)]
	yValues[1] = time

	document.getElementById("sortedArray").innerHTML = "Sorted Array: "

	for (var i = 0; i < sortedArray.length; i++) {
		if (i == sortedArray.length - 1) {
			document.getElementById("sortedArray").innerHTML += sortedArray[i]
		} else {
			document.getElementById("sortedArray").innerHTML += sortedArray[i] + ", "
		}
	}
	document.getElementById("time").innerHTML = "Time: " + time + "ms"
	document.getElementById("time").innerHTML += "<br>" + "Time Complexity: O(2<sup>2</sup>)"
	document.getElementById("time").innerHTML += "<br>Space Complexity: O(1)"
}

function merge_sort(array) {
	var sortedArray = new Array()
	for (var i = 0; i < array.length; i++) {
		sortedArray[i] = array[i]
	}
	var startTime = performance.now()
	mergeSort(sortedArray, 0, sortedArray.length - 1)
	var endTime = performance.now()
	var time = endTime - startTime

	// yValues.push[(time)]
	yValues[2] = time

	document.getElementById("sortedArray").innerHTML = "Sorted Array: "

	for (var i = 0; i < sortedArray.length; i++) {
		if (i == sortedArray.length - 1) {
			document.getElementById("sortedArray").innerHTML += sortedArray[i]
		} else {
			document.getElementById("sortedArray").innerHTML += sortedArray[i] + ", "
		}
	}
	document.getElementById("time").innerHTML = "Time: " + time + "ms"
	// merge sort time complexity
	document.getElementById("time").innerHTML += "<br>" + "Time Complexity: O(nlogn)"
	document.getElementById("time").innerHTML += "<br>Space Complexity: O(n)"
}

function mergeSort(array, left, right) {
	if (left < right) {
		var middle = Math.floor((left + right) / 2)
		mergeSort(array, left, middle)
		mergeSort(array, middle + 1, right)
		merge(array, left, middle, right)
	}
}

function merge(array, left, middle, right) {
	var leftArray = new Array()
	var rightArray = new Array()
	var leftSize = middle - left + 1
	var rightSize = right - middle
	for (var i = 0; i < leftSize; i++) {
		leftArray[i] = array[left + i]
	}
	for (var i = 0; i < rightSize; i++) {
		rightArray[i] = array[middle + 1 + i]
	}
	var i = 0
	var j = 0
	var k = left
	while (i < leftSize && j < rightSize) {
		if (leftArray[i] <= rightArray[j]) {
			array[k] = leftArray[i]
			i++
		} else {
			array[k] = rightArray[j]
			j++
		}
		k++
	}
	while (i < leftSize) {
		array[k] = leftArray[i]
		i++
		k++
	}
	while (j < rightSize) {
		array[k] = rightArray[j]
		j++
		k++
	}
}

function heap_sort(array) {
	var sortedArray = new Array()
	for (var i = 0; i < array.length; i++) {
		sortedArray[i] = array[i]
	}
	var startTime = performance.now()
	heapSort(sortedArray)
	var endTime = performance.now()
	var time = endTime - startTime

	// yValues.push[(time)]
	yValues[3] = time

	document.getElementById("sortedArray").innerHTML = "Sorted Array: "

	for (var i = 0; i < sortedArray.length; i++) {
		if (i == sortedArray.length - 1) {
			document.getElementById("sortedArray").innerHTML += sortedArray[i]
		} else {
			document.getElementById("sortedArray").innerHTML += sortedArray[i] + ", "
		}
	}
	document.getElementById("time").innerHTML = "Time: " + time + "ms"
	// heap sort time complexity
	document.getElementById("time").innerHTML += "<br>" + "Time Complexity: O(nlogn)"
	document.getElementById("time").innerHTML += "<br>Space Complexity: O(1)"
}

function heapSort(array) {
	var n = array.length
	for (var i = Math.floor(n / 2) - 1; i >= 0; i--) {
		heapify(array, n, i)
	}
	for (var i = n - 1; i >= 0; i--) {
		var temp = array[0]
		array[0] = array[i]
		array[i] = temp
		heapify(array, i, 0)
	}
}

function heapify(array, n, i) {
	var largest = i
	var left = 2 * i + 1
	var right = 2 * i + 2
	if (left < n && array[left] > array[largest]) {
		largest = left
	}
	if (right < n && array[right] > array[largest]) {
		largest = right
	}
	if (largest != i) {
		var temp = array[i]
		array[i] = array[largest]
		array[largest] = temp
		heapify(array, n, largest)
	}
}

function quick_sort(array) {
	var sortedArray = new Array()
	for (var i = 0; i < array.length; i++) {
		sortedArray[i] = array[i]
	}
	var startTime = performance.now()
	quickSort(sortedArray, 0, sortedArray.length - 1)
	var endTime = performance.now()
	var time = endTime - startTime

	// yValues.push[(time)]
	yValues[4] = time

	document.getElementById("sortedArray").innerHTML = "Sorted Array: "

	for (var i = 0; i < sortedArray.length; i++) {
		if (i == sortedArray.length - 1) {
			document.getElementById("sortedArray").innerHTML += sortedArray[i]
		} else {
			document.getElementById("sortedArray").innerHTML += sortedArray[i] + ", "
		}
	}
	document.getElementById("time").innerHTML = "Time: " + time + "ms"
	// quick sort time complexity
	document.getElementById("time").innerHTML += "<br>" + "Time Complexity: O(nlogn)"
	document.getElementById("time").innerHTML += "<br>Space Complexity: O(logn)"
}

function quickSort(array, left, right) {
	if (left < right) {
		var pivot = partition(array, left, right)
		quickSort(array, left, pivot - 1)
		quickSort(array, pivot + 1, right)
	}
}

function partition(array, left, right) {
	var pivot = array[right]
	var i = left - 1
	for (var j = left; j < right; j++) {
		if (array[j] <= pivot) {
			i++
			var temp = array[i]
			array[i] = array[j]
			array[j] = temp
		}
	}
	var temp = array[i + 1]
	array[i + 1] = array[right]
	array[right] = temp
	return i + 1
}

function radix_sort(array) {
	var sortedArray = new Array()
	for (var i = 0; i < array.length; i++) {
		sortedArray[i] = array[i]
	}
	var startTime = performance.now()
	radixSort(sortedArray)
	var endTime = performance.now()
	var time = endTime - startTime

	// yValues.push[(time)]
	yValues[5] = time

	document.getElementById("sortedArray").innerHTML = "Sorted Array: "

	for (var i = 0; i < sortedArray.length; i++) {
		if (i == sortedArray.length - 1) {
			document.getElementById("sortedArray").innerHTML += sortedArray[i]
		} else {
			document.getElementById("sortedArray").innerHTML += sortedArray[i] + ", "
		}
	}
	document.getElementById("time").innerHTML = "Time: " + time + "ms"
	// radix sort time complexity
	document.getElementById("time").innerHTML += "<br>" + "Time Complexity: O(d(n+k))"
	document.getElementById("time").innerHTML += "<br>Space Complexity: O(n+k)"
}

function radixSort(array) {
	var max = getMax(array)
	for (var exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
		countSort(array, exp)
	}
}

function countSort(array, exp) {
	var output = new Array(array.length)
	var count = new Array(10)
	for (var i = 0; i < 10; i++) {
		count[i] = 0
	}
	for (var i = 0; i < array.length; i++) {
		count[Math.floor(array[i] / exp) % 10]++
	}
	for (var i = 1; i < 10; i++) {
		count[i] += count[i - 1]
	}
	for (var i = array.length - 1; i >= 0; i--) {
		output[count[Math.floor(array[i] / exp) % 10] - 1] = array[i]
		count[Math.floor(array[i] / exp) % 10]--
	}
	for (var i = 0; i < array.length; i++) {
		array[i] = output[i]
	}
}

function getMax(array) {
	var max = array[0]
	for (var i = 1; i < array.length; i++) {
		if (array[i] > max) {
			max = array[i]
		}
	}
	return max
}

function bucket_sort(array) {
	var sortedArray = new Array()
	for (var i = 0; i < array.length; i++) {
		sortedArray[i] = array[i]
	}
	var startTime = performance.now()
	bucketSort(sortedArray)
	var endTime = performance.now()
	var time = endTime - startTime

	// yValues.push[(time)]
	yValues[6] = time

	document.getElementById("sortedArray").innerHTML = "Sorted Array: "

	for (var i = 0; i < sortedArray.length; i++) {
		if (i == sortedArray.length - 1) {
			document.getElementById("sortedArray").innerHTML += sortedArray[i]
		} else {
			document.getElementById("sortedArray").innerHTML += sortedArray[i] + ", "
		}
	}
	document.getElementById("time").innerHTML = "Time: " + time + "ms"
	// bucket sort time complexity
	document.getElementById("time").innerHTML += "<br>" + "Time Complexity: O(n+k)"
	document.getElementById("time").innerHTML += "<br>Space Complexity: O(n+k)"
}

function bucketSort(array) {
	var max = getMax(array)
	var min = getMin(array)
	var bucketSize = Math.floor((max - min) / array.length) + 1
	var bucketCount = Math.floor((max - min) / bucketSize) + 1
	var buckets = new Array(bucketCount)
	for (var i = 0; i < bucketCount; i++) {
		buckets[i] = new Array()
	}
	for (var i = 0; i < array.length; i++) {
		buckets[Math.floor((array[i] - min) / bucketSize)].push(array[i])
	}
	var index = 0
	for (var i = 0; i < bucketCount; i++) {
		insertionSort(buckets[i])
		for (var j = 0; j < buckets[i].length; j++) {
			array[index++] = buckets[i][j]
		}
	}
}

function getMin(array) {
	var min = array[0]
	for (var i = 1; i < array.length; i++) {
		if (array[i] < min) {
			min = array[i]
		}
	}
	return min
}

function insertionSort(array) {
	for (var i = 1; i < array.length; i++) {
		var temp = array[i]
		var j = i - 1
		while (j >= 0 && array[j] > temp) {
			array[j + 1] = array[j]
			j--
		}
		array[j + 1] = temp
	}
}

function courting_sort(array) {
	var sortedArray = new Array()
	for (var i = 0; i < array.length; i++) {
		sortedArray[i] = array[i]
	}
	var startTime = performance.now()
	courtingSort(sortedArray)
	var endTime = performance.now()
	var time = endTime - startTime

	// yValues.push[(time)]
	yValues[7] = time

	document.getElementById("sortedArray").innerHTML = "Sorted Array: "

	for (var i = 0; i < sortedArray.length; i++) {
		if (i == sortedArray.length - 1) {
			document.getElementById("sortedArray").innerHTML += sortedArray[i]
		} else {
			document.getElementById("sortedArray").innerHTML += sortedArray[i] + ", "
		}
	}
	document.getElementById("time").innerHTML = "Time: " + time + "ms"
	// courting sort time complexity
	document.getElementById("time").innerHTML += "<br>" + "Time Complexity: O(n)"
	document.getElementById("time").innerHTML += "<br>Space Complexity: O(1)"
}

function courtingSort(array) {
	var max = getMax(array)
	var min = getMin(array)
	var count = new Array(max - min + 1)
	for (var i = 0; i < count.length; i++) {
		count[i] = 0
	}
	for (var i = 0; i < array.length; i++) {
		count[array[i] - min]++
	}
	var index = 0
	for (var i = 0; i < count.length; i++) {
		while (count[i] > 0) {
			array[index++] = i + min
			count[i]--
		}
	}
}

function book_QuickSort(array) {
	var sortedArray = new Array()
	for (var i = 0; i < array.length; i++) {
		sortedArray[i] = array[i]
	}
	var startTime = performance.now()
	bookQuickSort(sortedArray, 0, sortedArray.length - 1)
	var endTime = performance.now()
	var time = endTime - startTime

	// yValues.push[(time)]
	yValues[8] = time

	document.getElementById("sortedArray").innerHTML = "Sorted Array: "

	for (var i = 0; i < sortedArray.length; i++) {
		if (i == sortedArray.length - 1) {
			document.getElementById("sortedArray").innerHTML += sortedArray[i]
		} else {
			document.getElementById("sortedArray").innerHTML += sortedArray[i] + ", "
		}
	}
	document.getElementById("time").innerHTML = "Time: " + time + "ms"
	// quick sort time complexity
	document.getElementById("time").innerHTML += "<br>" + "Time Complexity: O(nlogn)"
	document.getElementById("time").innerHTML += "<br>Space Complexity: O(logn)"
}

// make quick sort function named BookQuickSort such that when quick sort is called on a subarray lesser than 10 elements, insertion sort is called instead
function bookQuickSort(array, left, right) {
	if (left < right) {
		if (right - left < 20) {
			insertionSort(array)
		} else {
			var pivot = partition(array, left, right)
			bookQuickSort(array, left, pivot - 1)
			bookQuickSort(array, pivot + 1, right)
		}
	}
}

function runAll(array) {
	insertion_sort(array)
	bubble_sort(array)
	merge_sort(array)
	heap_sort(array)
	quick_sort(array)
	radix_sort(array)
	bucket_sort(array)
	courting_sort(array)
	book_QuickSort(array)

	document.getElementById("time").innerHTML = ""
	console.log(yValues)

	var ctx = document.getElementById("myChart").getContext("2d")
	var myChart = new Chart(ctx, {
		type: "bar",
		data: {
			labels: [
				"Insertion Sort",
				"Bubble Sort",
				"Merge Sort",
				"Heap Sort",
				"Quick Sort",
				"Radix Sort",
				"Bucket Sort",
				"Courting Sort",
				"Book 7.4.5",
			],
			datasets: [
				{
					label: "Time Taken (ms)",
					data: yValues,
					backgroundColor: [
						"rgba(255, 99, 132, 0.2)",
						"rgba(54, 162, 235, 0.2)",
						"rgba(255, 206, 86, 0.2)",
						"rgba(75, 192, 192, 0.2)",
						"rgba(153, 102, 255, 0.2)",
						"rgba(255, 159, 64, 0.2)",
						"rgba(255, 99, 132, 0.2)",
						"rgba(54, 162, 235, 0.2)",
						"rgba(255, 159, 64, 0.2)",
					],
					borderColor: [
						"rgba(255, 99, 132, 1)",
						"rgba(54, 162, 235, 1)",
						"rgba(255, 206, 86, 1)",
						"rgba(75, 192, 192, 1)",
						"rgba(153, 102, 255, 1)",
						"rgba(255, 159, 64, 1)",
						"rgba(255, 99, 132, 1)",
						"rgba(54, 162, 235, 1)",
						"rgba(255, 159, 64, 1)",

					],
					borderWidth: 1,
				},
			],
		},
		options: {
			scales: {
				y: {
					beginAtZero: true,
				},
			},
		},
	})
}


document.getElementById("btn11").addEventListener("click", function () {
	// check if input file is empty
	if (document.getElementById("file").value == "") {
		alert("Please select a file")
	} else {
		document.getElementById("time").innerHTML = "Processing..."
		var arraysize = document.getElementById("arraySize").value
		document.getElementById("array").innerHTML = ""
		document.getElementById("sortedArray").innerHTML = ""
		createArray(arraysize)
	}
})

document.getElementById("btn12").addEventListener("click", function () {
	if (document.getElementById("file").value == "") {
		alert("Please select a file")
	} else {
		const size = document.getElementById("arraySize").value
		if (size > 1000000) {
			alert("Array size must be less than 1 million")
		} else {
			// show processing message while sorting
			document.getElementById("time").innerHTML = "Processing..."
			const input = document.getElementById("file")
			const displayArray = document.getElementById("array")
			displayArray.innerHTML = "Unsorted Array: "
			document.getElementById("sortedArray").innerHTML = ""
			const reader = new FileReader()
			reader.onload = function () {
				let array = new Array()
				const lines = reader.result.split("\n")
				for (var i = 0; i < size; i++) {
					array[i] = parseInt(lines[i])
					if (i == size - 1) {
						displayArray.innerHTML += array[i]
					} else {
						displayArray.innerHTML += array[i] + ", "
					}
				}
				runAll(array)
			}
			reader.readAsText(input.files[0])
		}
	}
})
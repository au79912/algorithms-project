const container = document.querySelector(".data-container");

let time = 300;

function generatebars(num = 20) {
	time = document.getElementById("stepSize").value
	container.innerHTML = "";
	const input = document.getElementById("file")
	const reader = new FileReader()
	reader.onload = function () {
		let array = new Array()
		const lines = reader.result.split("\n")
		for (var i = 0; i < 20; i++) {
			array[i] = parseInt(lines[i])
		}
		console.log(array)
	}
	reader.readAsText(input.files[0])



	for (let i = 0; i < 20; i += 1) {
		const value = Math.floor(Math.random() * 100) + 1;
		const bar = document.createElement("div");
		bar.classList.add("bar");
		bar.style.height = `${value * 3}px`;
		bar.style.transform = `translateX(${i * 30}px)`;
		const barLabel = document.createElement("label");
		barLabel.classList.add("bar_id");
		barLabel.innerHTML = value;
		bar.appendChild(barLabel);
		container.appendChild(bar);
	}
}


async function insertionSort(delay = time) {
	console.log(delay)
	const bars = document.querySelectorAll(".bar");
	bars[0].style.backgroundColor = "red";
	for (let i = 1; i < bars.length; i++) {
		let j = i - 1;
		let key = parseInt(bars[i].childNodes[0].innerHTML);
		bars[i].style.backgroundColor = "red";
		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, delay)
		);

		while (j >= 0 && parseInt(bars[j].childNodes[0].innerHTML) > key) {
			bars[j].style.backgroundColor = "red";
			bars[j + 1].style.height = bars[j].style.height;
			bars[j + 1].childNodes[0].innerHTML = bars[j].childNodes[0].innerHTML;
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, delay)
			);
			bars[j].style.backgroundColor = "#6b5b95";
			j--;
		}
		bars[j + 1].style.height = `${key * 3}px`;
		bars[j + 1].childNodes[0].innerHTML = key;
		bars[i].style.backgroundColor = "#6b5b95";
	}
	bars[bars.length - 1].style.backgroundColor = "green";
	for (let i = 0; i < bars.length; i++) {
		bars[i].style.backgroundColor = "green";
	}

	enable();
}

async function bubbleSort(delay = time) {
	const bars = document.querySelectorAll(".bar");
	for (let i = 0; i < bars.length - 1; i++) {
		for (let j = 0; j < bars.length - i - 1; j++) {
			bars[j].style.backgroundColor = "red";
			bars[j + 1].style.backgroundColor = "red";
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, delay)
			);
			let value1 = parseInt(bars[j].childNodes[0].innerHTML);
			let value2 = parseInt(bars[j + 1].childNodes[0].innerHTML);
			if (value1 > value2) {
				bars[j].style.height = `${value2 * 3}px`;
				bars[j + 1].style.height = `${value1 * 3}px`;
				bars[j].childNodes[0].innerHTML = value2;
				bars[j + 1].childNodes[0].innerHTML = value1;
			}
			bars[j].style.backgroundColor = "#6b5b95";
			bars[j + 1].style.backgroundColor = "#6b5b95";
		}
		bars[bars.length - i - 1].style.backgroundColor = "green";
	}
	bars[0].style.backgroundColor = "green";

	enable();
}

async function mergeSort(delay = time) {
	const bars = document.querySelectorAll(".bar");
	merge(bars, 0, bars.length - 1, delay);
	for (let i = 0; i < bars.length; i++) {
		bars[i].style.backgroundColor = "yellow";
	}
	enable();
}

async function merge(bars, l, r, delay) {
	if (l >= r) {
		return;
	}
	let m = l + parseInt((r - l) / 2);
	await merge(bars, l, m, delay);
	await merge(bars, m + 1, r, delay);
	await mergeSortHelper(bars, l, m, r, delay);
}

async function mergeSortHelper(bars, l, m, r, delay) {
	let n1 = m - l + 1;
	let n2 = r - m;
	let left = [];
	let right = [];
	for (let i = 0; i < n1; i++) {
		left.push(parseInt(bars[l + i].childNodes[0].innerHTML));
	}
	for (let i = 0; i < n2; i++) {
		right.push(parseInt(bars[m + 1 + i].childNodes[0].innerHTML));
	}
	let i = 0,
		j = 0,
		k = l;
	while (i < n1 && j < n2) {
		bars[k].style.backgroundColor = "red";
		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, delay)
		);
		if (left[i] <= right[j]) {
			bars[k].style.height = `${left[i] * 3}px`;
			bars[k].childNodes[0].innerHTML = left[i];
			i++;
		} else {
			bars[k].style.height = `${right[j] * 3}px`;
			bars[k].childNodes[0].innerHTML = right[j];
			j++;
		}
		k++;
		bars[k - 1].style.backgroundColor = "green";
	}
	while (i < n1) {
		bars[k].style.height = `${left[i] * 3}px`;
		bars[k].childNodes[0].innerHTML = left[i];
		i++;
		k++;
	}
	while (j < n2) {
		bars[k].style.height = `${right[j] * 3}px`;
		bars[k].childNodes[0].innerHTML = right[j];
		j++;
		k++;
		bars[bars.length - 1].style.backgroundColor = "green";

	}
	enable()
}


async function heapSort(delay = time) {
	const bars = document.querySelectorAll(".bar");
	let n = bars.length;
	for (let i = parseInt(n / 2) - 1; i >= 0; i--) {
		await heapify(bars, n, i, delay);
	}
	for (let i = n - 1; i >= 0; i--) {
		bars[0].style.backgroundColor = "red";
		bars[i].style.backgroundColor = "red";
		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, delay)
		);
		let temp = bars[0].style.height;
		bars[0].style.height = bars[i].style.height;
		bars[i].style.height = temp;
		temp = bars[0].childNodes[0].innerText;
		bars[0].childNodes[0].innerText = bars[i].childNodes[0].innerText;
		bars[i].childNodes[0].innerText = temp;
		bars[i].style.backgroundColor = "green";
		await heapify(bars, i, 0, delay);
	}
	bars[0].style.backgroundColor = "green";
	enable();
}

function heapify(bars, n, i, delay) {
	return new Promise((resolve) => {
		let largest = i;
		let l = 2 * i + 1;
		let r = 2 * i + 2;
		if (l < n && parseInt(bars[l].childNodes[0].innerHTML) > parseInt(bars[largest].childNodes[0].innerHTML)) {
			if (largest != i) {
				bars[largest].style.backgroundColor = "#6b5b95";
			}
			largest = l;
		}
		if (r < n && parseInt(bars[r].childNodes[0].innerHTML) > parseInt(bars[largest].childNodes[0].innerHTML)) {
			if (largest != i) {
				bars[largest].style.backgroundColor = "#6b5b95";
			}
			largest = r;
		}
		if (largest != i) {
			bars[largest].style.backgroundColor = "red";
			bars[i].style.backgroundColor = "red";
			let temp = bars[i].style.height;
			bars[i].style.height = bars[largest].style.height;
			bars[largest].style.height = temp;
			temp = bars[i].childNodes[0].innerText;
			bars[i].childNodes[0].innerText = bars[largest].childNodes[0].innerText;
			bars[largest].childNodes[0].innerText = temp;
			setTimeout(() => {
				resolve();
			}, delay);
			heapify(bars, n, largest, delay);
		} else {
			setTimeout(() => {
				resolve();
			}, delay);
			return;
		}
	});
}


async function quickSort(delay = time) {
	const bars = document.querySelectorAll(".bar");
	let n = bars.length;
	await quickSortHelper(bars, 0, n - 1, delay);
	for (let i = 0; i < n; i++) {
		bars[i].style.backgroundColor = "green";
	}
	enable();
}

async function quickSortHelper(bars, low, high, delay) {
	if (low < high) {
		let pi = await partition(bars, low, high, delay);
		bars[pi].style.backgroundColor = "green";
		await quickSortHelper(bars, low, pi - 1, delay);
		await quickSortHelper(bars, pi + 1, high, delay);
	}
}

async function partition(bars, low, high, delay) {
	let pivot = parseInt(bars[high].childNodes[0].innerHTML);
	bars[high].style.backgroundColor = "red";
	let i = low - 1;
	for (let j = low; j <= high - 1; j++) {
		bars[j].style.backgroundColor = "red";
		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, delay)
		);
		if (parseInt(bars[j].childNodes[0].innerHTML) < pivot) {
			i++;
			let temp = bars[i].style.height;
			bars[i].style.height = bars[j].style.height;
			bars[j].style.height = temp;
			temp = bars[i].childNodes[0].innerText;
			bars[i].childNodes[0].innerText = bars[j].childNodes[0].innerText;
			bars[j].childNodes[0].innerText = temp;
		}
		bars[j].style.backgroundColor = "#6b5b95";
	}
	let temp = bars[i + 1].style.height;
	bars[i + 1].style.height = bars[high].style.height;
	bars[high].style.height = temp;
	temp = bars[i + 1].childNodes[0].innerText;
	bars[i + 1].childNodes[0].innerText = bars[high].childNodes[0].innerText;
	bars[high].childNodes[0].innerText = temp;
	for (let k = low; k <= high; k++) {
		if (k != i + 1) {
			bars[k].style.backgroundColor = "#6b5b95";
		}
	}
	return i + 1;
}




function disable() {
	document.getElementById("Button1").disabled = true;
	document.getElementById("Button1").style.backgroundColor = "#d8b6ff";
	document.getElementById("Button2").disabled = true;
	document.getElementById("Button2").style.backgroundColor = "#d8b6ff";

	document.getElementById("Button3").disabled = true;
	document.getElementById("Button3").style.backgroundColor = "#d8b6ff";

	document.getElementById("Button4").disabled = true;
	document.getElementById("Button4").style.backgroundColor = "#d8b6ff";

	document.getElementById("Button5").disabled = true;
	document.getElementById("Button5").style.backgroundColor = "#d8b6ff";

	document.getElementById("Button6").disabled = true;
	document.getElementById("Button6").style.backgroundColor = "#d8b6ff";
}

function enable() {
	document.getElementById("Button1").disabled = false;
	document.getElementById("Button1").style.backgroundColor = "#6f459e";

	document.getElementById("Button2").disabled = false;
	document.getElementById("Button2").style.backgroundColor = "#6f459e";

	document.getElementById("Button3").disabled = false;
	document.getElementById("Button3").style.backgroundColor = "#6f459e";

	document.getElementById("Button4").disabled = false;
	document.getElementById("Button4").style.backgroundColor = "#6f459e";

	document.getElementById("Button5").disabled = false;
	document.getElementById("Button5").style.backgroundColor = "#6f459e";

	document.getElementById("Button6").disabled = false;
	document.getElementById("Button6").style.backgroundColor = "#6f459e";
}

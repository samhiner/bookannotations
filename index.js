/*document.onmouseup = document.onkeyup = document.onselectionchange = function() {
	document.getElementById('sel').innerHTML = getSelectionText();
};

function getSelectionText() {
	var text = '';
	if (window.getSelection) {
		text = window.getSelection().getRangeAt(0);
		highlightRange(text);
	}
	return text;
}

function highlightRange(range) {
	var newNode = document.createElement("div");
	newNode.setAttribute("style", "background-color: yellow; display: inline;");
	range.surroundContents(newNode);
}*/

//TODO make this server side and create a client side application

function range(start, stop) {
	var rangeList = [];
	for (var x = start; x < stop; x++) {
		rangeList.push(x);
	}
	return rangeList;
}

// CREATE TEXT

var text = [];

for (x = 0; x < 100; x++) {
	text[x] = [];
}

// HIGHLIGHT FORUM

function highlight(start, stop) {
	var forums = '';
	for (x = start; x < stop; x++) {
		if (text[x] != []) {
			forums += String(text[x]) + ';';
		}
	}
	return forums;
}

function comment(comment, start, stop) {
	//TODO should be a number that leads to the comment that way it takes up less memory for big comments
	//TODO above comment also avoids you getting a duplicate comment for every char of overlapping highlight

	comments = new File ('comments.txt');
	comments.writeln(comment)
	commentIndex = comments.length - 1 //TODO actually get length of file
	comments.close()

	for (var x = start; x < stop; x++) {
		text[x].push(commentIndex);
	}
}

document.getElementById('output').innerHTML += highlight(0,20) + '<br>';
comment('hello', 0, 10);
document.getElementById('output').innerHTML += highlight(0,20);
var chromeButton = document.getElementById('chrome-button');
var sublimeButton = document.getElementById('sublime-button');

var shortcutDivs = document.querySelectorAll('.shortcut-div');
var shortcutButtons = document.querySelectorAll('.button');

chromeButton.onclick = buttonClick.bind(this, 'chrome');
sublimeButton.onclick = buttonClick.bind(this, 'sublime');

function buttonClick(name, event) {
	shortcutButtons.forEach(function (button) {
		if (button !== event.currentTarget) {
			button.classList.remove('active');
		}
		else {
			button.classList.add('active');
		}
	});

	shortcutDivs.forEach(function (div) {
		if (div.id.indexOf(name) === -1) {
			div.classList.add('hidden');
		}
		else {
			div.classList.remove('hidden');
		}
	});
}

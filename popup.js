var chromeButton = document.getElementById('chrome-button');
var sublimeButton = document.getElementById('sublime-button');
var windowsButton = document.getElementById('windows-button');

var shortcutDivs = document.querySelectorAll('.shortcut-div');
var shortcutButtons = document.querySelectorAll('.button');

chromeButton.onclick = buttonClick.bind(this, 'chrome', chromeButton);
sublimeButton.onclick = buttonClick.bind(this, 'sublime', sublimeButton);
windowsButton.onclick = buttonClick.bind(this, 'windows', windowsButton);

document.onkeydown = function (event) {
	var alt = event.altKey;
	if (alt) {
		switch (event.key) {
			case 'c':
				buttonClick.call(this, 'chrome', chromeButton);
				break;
			case 'u':
				buttonClick.call(this, 'sublime', sublimeButton);
				break;
			case 'w':
				buttonClick.call(this, 'windows', windowsButton);
				break;
		}
	}
};

function buttonClick(name, target) {
	shortcutButtons.forEach(function (button) {
		if (button !== target) {
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

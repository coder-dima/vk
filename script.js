function setTheme(themeName) {
	localStorage.setItem('theme', themeName);
	document.documentElement.className = themeName;
}

if(localStorage.getItem('theme') == null) {
	setTheme('tema2');
}
if(localStorage.getItem('theme') == 'tema1') {
	setTheme('tema1');
} else {
	setTheme('tema2');
}

function toggleTheme() {
	if(localStorage.getItem('theme') == 'tema1') {
		setTheme('tema2');
	} else {
		setTheme('tema1');
	}
}

document.querySelector('.favorite').addEventListener('click', (e) => {
	toggleTheme();
});
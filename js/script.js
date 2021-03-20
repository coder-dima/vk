function setTheme(themeName) {
	localStorage.setItem('theme', themeName);
	document.documentElement.className = themeName;
}

if(localStorage.getItem('theme') == null) {
	setTheme('dark');
}
if(localStorage.getItem('theme') == 'light') {
	setTheme('light');
} else {
	setTheme('dark');
}

function toggleTheme() {
	if(localStorage.getItem('theme') == 'light') {
		setTheme('dark');
	} else {
		setTheme('light');
	}
}

document.querySelector('.favorite').addEventListener('click', (e) => {
	toggleTheme();
});
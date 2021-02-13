if(localStorage.getItem(`terms`) !== `true`) {
	let password = confirm(`Подтверждаю полное согласие с Пользовательским Соглашением (офертой).\n\nЯ понимаю последствия нарушения оферты или не выполнения любых указаний Администрации и несу полную ответственность.`);
	
	if(password !== true) {
		// window.close();
		window.location = "terms.html";
	} else {
		localStorage.setItem(`terms`, `true`);
	}
}
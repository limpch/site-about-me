(() => {

	function setTheme() {
		const isDark = localStorage.getItem('isDark');
		
		if(isDark == 'true') {
			document.querySelector('.contacts__submit').classList.add('dark')
			document.querySelectorAll('.contacts__mine path')
			.forEach(item => {
				item.classList.add('dark')
			})
			document.querySelector('.contacts__select path').classList.add('dark')
			document.querySelector('.shadow').classList.add('dark');
			document.querySelector('.contacts__input').classList.add('dark')
			document.querySelector('.contacts__textarea').classList.add('dark')
			document.querySelector('.contacts__select').classList.add('dark')
			document.querySelector('.shadow').classList.add('dark')
		} else {
			document.querySelector('.contacts__submit').classList.add('light')
			document.querySelectorAll('.contacts__mine path')
			.forEach(item => {
				item.classList.add('light')
			})
			document.querySelector('.contacts__select path').classList.add('light')
			document.querySelector('.shadow').classList.add('light');
			document.querySelector('.contacts__input').classList.add('light')
			document.querySelector('.contacts__textarea').classList.add('light')
			document.querySelector('.contacts__select').classList.add('light')
			document.querySelector('.shadow').classList.add('dark')
		}
	}

	function sendForm() {
		document.querySelectorAll('.contacts__item')
		.forEach(item => {
			item.addEventListener('click', event => {
				document.querySelector('.contacts__select > span')
				.innerHTML = event.target.innerHTML;
				document.querySelector('.contacts__options').classList.toggle('click');
			})
		})

		document.querySelector('.contacts__select')
		.addEventListener('click', () => {
			document.querySelector('.contacts__options').classList.toggle('click');
			document.querySelector('.contacts__select div').classList.toggle('open');
		})

		const form = document.getElementById('form');
		form.addEventListener("submit", e => {
			const input = document.querySelector('.contacts__input');
			const textarea = document.querySelector('.contacts__textarea');
			const type = document.querySelector('.contacts__select > span').textContent;
			console.log(input.value)
			console.log(textarea.value)
			if(input.value.trim() == "" || textarea.value.trim() == "") {
				window.alert('Вы заполнили не все поля')
				return
			} else {
				
				input.value = '';
				textarea.value = '';
			}
		});
	}

	document.addEventListener('DOMContentLoaded', () => {
		setTheme();
		sendForm();
	});
})()
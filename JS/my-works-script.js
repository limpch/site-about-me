(() => {

	function hover() {
		document.querySelectorAll('.portfolio__image').forEach(item => {
			item.addEventListener('mouseenter', event => {
				event.target.childNodes[3].classList.add('hover');
			})
		});
		document.querySelectorAll('.portfolio__image').forEach(item => {
			item.addEventListener('mouseleave', event => {
				event.target.childNodes[3].classList.remove('hover');
			})
		});
	}

	function setTheme() {
		const isDark = localStorage.getItem('isDark');
		if(isDark == 'true') {
			document.querySelectorAll('.portfolio__img-over').forEach(item => {item.classList.add('dark')})
			document.querySelectorAll('.portfolio__link-shadow').forEach(item => {item.classList.add('dark')})
			document.querySelectorAll('.portfolio__link').forEach(item => {item.classList.add('dark')})
			document.querySelectorAll('.portfolio__title').forEach(item => {item.classList.add('dark')})
		} else if (isDark == 'false') {
			document.querySelectorAll('.portfolio__img-over').forEach(item => {item.classList.add('light')})
			document.querySelectorAll('.portfolio__link-shadow').forEach(item => {item.classList.add('light')})
			document.querySelectorAll('.portfolio__link').forEach(item => {item.classList.add('light')})
			document.querySelectorAll('.portfolio__title').forEach(item => {item.classList.add('light')})
		}
	}

	document.addEventListener('DOMContentLoaded', () => {
		setTheme();
		hover();
	});
})()
(() => {

	function setTheme() {
		const isDark = localStorage.getItem('isDark');
		
		if(isDark == 'true') {
			document.querySelectorAll('.contacts__mine path')
			.forEach(item => {
				item.classList.add('dark')
			})
		} else {
			document.querySelectorAll('.contacts__mine path')
			.forEach(item => {
				item.classList.add('light')
			})
		}
	}

	document.addEventListener('DOMContentLoaded', () => {
		setTheme();
	});
})()
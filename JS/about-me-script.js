(()=>{

	function setTheme() {
		const isDark = localStorage.getItem('isDark');
		const gitHubLink = document.querySelector('.about-me__github')
		const myImg = document.querySelector('.about-me__photo')
		const aboutMe = document.querySelectorAll('.about-me, .about-me-list')
		const meSpecStyle = document.querySelector('.me-spec-style');
		if(isDark == 'false') {
			myImg.classList.add('light')
			gitHubLink.classList.add('light')
			aboutMe.forEach(item => {
				item.classList.add('light-text-color')
			});
			meSpecStyle.classList.add('light-spec-text-color')
		} else if (isDark == 'true') {
			myImg.classList.add('dark')
			gitHubLink.classList.add('dark')
			aboutMe.forEach(item => {
				item.classList.add('dark-text-color')
			});
			meSpecStyle.classList.add('dark-spec-text-color')
		}
	}

	document.addEventListener('DOMContentLoaded', () => {
		setTheme();
	});
})();
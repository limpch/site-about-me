(()=>{

	function setTheme() {
		const isDark = localStorage.getItem('isDark');

		const wrapper = document.querySelector('.wrapper');
		const block = document.querySelector('.block');
		const navList = document.querySelector('.block__list');
		const title = document.querySelectorAll('.block__title')
		const weRHere = document.querySelector(`.weRHere`);
		
		if(isDark == 'false') {
			wrapper.classList.add('light-BG-wrapper');
			block.classList.add('light-BG-block');
			block.classList.add('light-text-color');
			navList.classList.add('light-nav-menu');
			weRHere.classList.add('weRHereLight');
			title.forEach(item => item.classList.add('light-title'))
		} else if (isDark == 'true') {
			wrapper.classList.add('dark-BG-wrapper');
			block.classList.add('dark-BG-block');
			block.classList.add('dark-text-color');
			navList.classList.add('dark-nav-menu');
			weRHere.classList.add('weRHereDark');
			title.forEach(item => item.classList.add('dark-title'))
		}

		const nav = document.querySelectorAll('.block__item');
		nav.forEach(item => {
			item.addEventListener('click', event => {
				openLink(event.target.dataset.link);
			})
		});

		function openLink(itemDatasetLink) {
			block.classList.add('animate__fadeOutLeftBig');
			setTimeout(() => {
				if(localStorage.getItem('isRu') == 'true' || itemDatasetLink == 'index') {
					window.location.href = itemDatasetLink + '.html';
				} else {
					window.location.href = itemDatasetLink + '-eng.html';
				}
			}, 1100);
		}
	}

	document.addEventListener('DOMContentLoaded', () => {
		setTheme();

		setTimeout(() => {
			document.querySelector('.block').classList.remove('animate__fadeInLeftBig')
		}, 1300)
	});
})();
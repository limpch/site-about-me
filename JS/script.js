(() => {
	const homePageBlock = document.querySelector('.helloblock');
	function setLang() {
		let isRU = localStorage.getItem('isRu');
		let isDark = localStorage.getItem('isDark');
		const optionsTextRU = 'Настройки';
		const messageTextRU = `Привет, я <span data-link="about-me" data-langChange="contact" class="me-spec-style ${isDark == 'true' ? 'dark-spec-text-color' : 'light-spec-text-color'}">Роман Липка</span><br><span class="typed-text-rus"></span>`;
		const aboutTextRU = 'Обо мне';
		const mySkillsTextRU = 'Навыки';
		const myWorksTextRU = 'Портфолио';
		const contactTextRU = 'Контакты';
		const iconTextRU = 'Ru';
		const changeThemeRU = 'Изменить тему';
		const changelangRU = 'Изменить язык';

		const optionsTextENG = 'Settings';
		const messageTextENG = `Hello, I\'m <span data-link="about-me" data-langChange="contact" class="me-spec-style ${isDark == 'true' ? 'dark-spec-text-color' : 'light-spec-text-color'}">Roman Lipka</span><br><span class="typed-text-eng"></span>`;
		const aboutTextENG = 'About me';
		const mySkillsTextENG = 'My skills';
		const myWorksTextENG = 'Portfolio';
		const contactTextENG = 'Contacts';
		const iconTextENG = 'En';
		const changeThemeENG = 'Change theme';
		const changelangENG = 'Change language';
		if (isRU == 'false') {
			document.querySelector('[data-langChange="options"]').innerHTML = optionsTextENG;
			document.querySelector('[data-langChange="message"]').innerHTML = messageTextENG;
			document.querySelector('[data-langChange="about"]').innerHTML = aboutTextENG;
			document.querySelector('[data-langChange="mySkills"]').innerHTML = mySkillsTextENG;
			document.querySelector('[data-langChange="myWorks"]').innerHTML = myWorksTextENG;
			document.querySelector('[data-langChange="contact"]').innerHTML = contactTextENG;
			document.querySelector('[data-langChange="iconText"]').innerHTML = iconTextENG;
			document.querySelector('[data-langChange="options-lang"]').innerHTML = changelangENG;
			document.querySelector('[data-langChange="options-theme"]').innerHTML = changeThemeENG;
		} else if (isRU == 'true') {
			document.querySelector('[data-langChange="options"]').innerHTML = optionsTextRU;
			document.querySelector('[data-langChange="message"]').innerHTML = messageTextRU;
			document.querySelector('[data-langChange="about"]').innerHTML = aboutTextRU;
			document.querySelector('[data-langChange="mySkills"]').innerHTML = mySkillsTextRU;
			document.querySelector('[data-langChange="myWorks"]').innerHTML = myWorksTextRU;
			document.querySelector('[data-langChange="contact"]').innerHTML = contactTextRU;
			document.querySelector('[data-langChange="iconText"]').innerHTML = iconTextRU;
			document.querySelector('[data-langChange="options-lang"]').innerHTML = changelangRU;
			document.querySelector('[data-langChange="options-theme"]').innerHTML = changeThemeRU;
		}
	}
	function setTheme(i = 0) {
		document.querySelector('.wrapper').classList.toggle('light-BG-wrapper');
		document.querySelector('.wrapper').classList.toggle('dark-BG-wrapper');
		homePageBlock.classList.toggle('light-BG-block');
		homePageBlock.classList.toggle('dark-BG-block');
		homePageBlock.classList.toggle('light-text-color');
		homePageBlock.classList.toggle('dark-text-color');
		document.querySelector('.lang').classList.toggle('light-lang-color');
		document.querySelector('.lang').classList.toggle('dark-lang-color');
		document.querySelector('.theme').classList.toggle('light-theme-icon');
		document.querySelector('.theme').classList.toggle('dark-theme-icon');
		document.querySelector('.helloblock__list').classList.toggle('light-nav-menu');
		document.querySelector('.helloblock__list').classList.toggle('dark-nav-menu');
		if(i == 0) {
			document.querySelector('.me-spec-style').classList.toggle('light-spec-text-color');
			document.querySelector('.me-spec-style').classList.toggle('dark-spec-text-color');
		}
	}
	function myNameAnim() {
		const myName = document.querySelector('.me-spec-style');
		let myNameText;
		let isRu = localStorage.getItem('isRu');
		if(isRu == 'true') myNameText = 'Роман Липка';
		else if (isRu == 'false') myNameText = 'Roman Lipka';
		let myNameArraySymbols = [...myNameText];
		myNameText = myNameArraySymbols.map(item => '<span class="letter-in-name">' + item + '</span>').join('');
		myName.innerHTML = myNameText;
		const eachLetter = document.querySelectorAll('.letter-in-name');
		eachLetter.forEach(item => {
			item.addEventListener('mouseenter', event => {
				event.target.style.fontSize = '50px';
				let isDark = localStorage.getItem('isDark');
				if(isDark == 'true') event.target.style.color = '#6200EE';
				else if(isDark == 'false') event.target.style.color = '#BB86FC';
				
			});
			item.addEventListener('mouseleave', event => {
				event.target.style.fontSize = '35px';
				let isDark = localStorage.getItem('isDark');
				if(isDark == 'true') event.target.style.color = '#BB86FC';
				else if(isDark == 'false') event.target.style.color = '#6200EE';
			});
		});
	}
	function addEvent() {
		const myNameLink = document.querySelector('.me-spec-style');
		myNameLink.addEventListener('click', ()=> {
			openLink(myNameLink.dataset.link);
		});
		const nav = document.querySelectorAll('.helloblock__item');
		nav.forEach(item => {item.addEventListener('click', event => {
			openLink(event.target.dataset.link);
		})});

		function openLink(itemDatasetLink) {
			homePageBlock.classList.add('animate__fadeOutLeftBig');
			setTimeout(() => {
				if(localStorage.getItem('isRu') == 'true') {
					window.location.href = itemDatasetLink + '.html';
				} else {
					window.location.href = itemDatasetLink + '-eng.html';
				}
			}, 1100);
		}
	}
	function typedText () {
		let isRU = localStorage.getItem('isRu');
		if (isRU == 'true') {
			var typed = new Typed('.typed-text-rus', {
				strings: ["Начинающий Front-end разработчик", "HTML-верстальщик"],
				typeSpeed: 80,
				backSpeed: 20,
				smartBackspace: true,
				backDelay: 1000,
				loop: true,
				loopCount: Infinity,
				showCursor: true,
				cursorChar: '|',
				autoInsertCss: true,
			  });
		} else if (isRU == 'false') {
			var typed = new Typed('.typed-text-eng', {
				strings: ["Junior Front-end developer", "HTML-coder"],
				typeSpeed: 80,
				backSpeed: 20,
				smartBackspace: true,
				backDelay: 1000,
				loop: true,
				loopCount: Infinity,
				showCursor: true,
				cursorChar: '|',
				autoInsertCss: true,
			});
		}
	}
	function langIconAnimate() {
		const icon = document.querySelector('.lang');
		icon.addEventListener('mouseenter', () => {
			let isRU = localStorage.getItem('isRu');
			if (isRU == 'true')
				icon.innerHTML = 'En';
			else if (isRU == 'false')
				icon.innerHTML = 'Ru';
			icon.classList.add('animate__headShake');
			document.querySelector('.lang__text').style.opacity = 1;
		});
		icon.addEventListener('mouseleave', () => {
			let isRU = localStorage.getItem('isRu');
			if (isRU == 'true')
				icon.innerHTML = 'Ru';
			else if (isRU == 'false')
				icon.innerHTML = 'En';
			icon.classList.remove('animate__headShake');
			document.querySelector('.lang__text').style.opacity = 0;
		});
		icon.addEventListener('click', () => {
			homePageBlock.classList.add('animate__backOutRight');
			setTimeout(() => {
				let isRU = localStorage.getItem('isRu');
				if (isRU == 'false') localStorage.setItem('isRu', 'true');
				else if (isRU == 'true') localStorage.setItem('isRu', 'false');
				setLang();
				typedText();
				homePageBlock.classList.remove('animate__backOutRight');
				homePageBlock.classList.add('animate__backInRight');
				setTimeout(() => {
					homePageBlock.classList.remove('animate__backInRight');
				}, 1000);
				myNameAnim();
			}, 700);
		});
	}
	function themeIconAnimate() {
		const icon = document.querySelector('.theme');
		icon.addEventListener('mouseenter', () => {
			document.querySelector('.theme__dark').classList.add('anim');
			document.querySelector('.theme__text').style.opacity = 1;
		});
		icon.addEventListener('mouseleave', () => {
			document.querySelector('.theme__dark').classList.remove('anim');
			document.querySelector('.theme__text').style.opacity = 0;
		});

		icon.addEventListener('click', () => {
			homePageBlock.classList.add('animate__zoomOut');
			setTimeout(() => {
				setTheme();
				myNameAnim();
				let isDark = localStorage.getItem('isDark');
				if(isDark == 'false') localStorage.setItem('isDark', 'true');
				else if (isDark == 'true') localStorage.setItem('isDark', 'false');
				homePageBlock.classList.remove('animate__zoomOut');
				homePageBlock.classList.add('animate__zoomIn');
				setTimeout(() => {
					homePageBlock.classList.remove('animate__zoomIn');
				}, 1000);
			},700)
			
		});
	}
	function startSettingsScript() {
		if(localStorage.getItem('isRu') === null) localStorage.setItem('isRu', 'false');
		if(localStorage.getItem('isDark') === null) localStorage.setItem('isDark', 'false');
		setLang();
		if(localStorage.getItem('isDark') == 'true') setTheme(1);
		typedText();
		langIconAnimate();
		themeIconAnimate();
		addEvent();
		document.querySelector('.helloblock__list').style.opacity = 0;
		document.querySelector('.helloblock__inform').style.opacity = 0;
		document.querySelector('.helloblock__options').style.opacity = 0;
		setTimeout(() => {
			document.querySelector('.helloblock__list').style.opacity = 1;
			document.querySelector('.helloblock__list').classList.add('animate__zoomIn');
			document.querySelector('.helloblock__inform').style.opacity = 1;
			document.querySelector('.helloblock__inform').classList.add('animate__fadeInLeft');
			document.querySelector('.helloblock__options').style.opacity = 1;
			document.querySelector('.helloblock__options').classList.add('animate__fadeInRight');
			homePageBlock.classList.remove('animate__fadeInLeftBig');
		}, 1400);
		myNameAnim();
	}
	document.addEventListener('DOMContentLoaded', () => {
		startSettingsScript();
	});
})();
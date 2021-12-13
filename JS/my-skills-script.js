(() => {

	function hoverIcons() {
		// HTML
		document.querySelector('.skills__html').addEventListener('mouseenter', event => {
			document.querySelector('.skills__html_1').classList.add('hover');
			document.querySelector('.skills__html_2').classList.add('hover');
			document.querySelector('.skills__html + div').classList.add('hover');
		});
		document.querySelector('.skills__html').addEventListener('mouseleave', () => {
			document.querySelector('.skills__html_1').classList.remove('hover');
			document.querySelector('.skills__html_2').classList.remove('hover');
			document.querySelector('.skills__html + div').classList.remove('hover');
		});
		// CSS
		document.querySelector('.skills__css').addEventListener('mouseenter', () => {
			document.querySelector('.skills__css_1').classList.add('hover');
			document.querySelector('.skills__css_2').classList.add('hover');
			document.querySelector('.skills__css + div').classList.add('hover');
		});
		document.querySelector('.skills__css').addEventListener('mouseleave', () => {
			document.querySelector('.skills__css_1').classList.remove('hover');
			document.querySelector('.skills__css_2').classList.remove('hover');
			document.querySelector('.skills__css + div').classList.remove('hover');
		});
		// JS
		document.querySelector('.skills__js').addEventListener('mouseenter', () => {
			document.querySelector('.skills__js_1').classList.add('hover');
			document.querySelector('.skills__js_2').classList.add('hover');
			document.querySelector('.skills__js + div').classList.add('hover');
		});
		document.querySelector('.skills__js').addEventListener('mouseleave', () => {
			document.querySelector('.skills__js_1').classList.remove('hover');
			document.querySelector('.skills__js_2').classList.remove('hover');
			document.querySelector('.skills__js + div').classList.remove('hover');
		});
		// JQ
		document.querySelector('.skills__jq').addEventListener('mouseenter', () => {
			document.querySelector('.skills__jq_1').classList.add('hover');
			document.querySelector('.skills__jq + div').classList.add('hover');
		});
		document.querySelector('.skills__jq').addEventListener('mouseleave', () => {
			document.querySelector('.skills__jq_1').classList.remove('hover');
			document.querySelector('.skills__jq + div').classList.remove('hover');
		});
		// FIGMA
		document.querySelector('.skills__figma').addEventListener('mouseenter', () => {
			document.querySelector('.skills__figma_1').classList.add('hover');
			document.querySelector('.skills__figma_2').classList.add('hover');
			document.querySelector('.skills__figma_3').classList.add('hover');
			document.querySelector('.skills__figma_4').classList.add('hover');
			document.querySelector('.skills__figma_5').classList.add('hover');
			document.querySelector('.skills__figma + div').classList.add('hover');
		});
		document.querySelector('.skills__figma').addEventListener('mouseleave', () => {
			document.querySelector('.skills__figma_1').classList.remove('hover');
			document.querySelector('.skills__figma_2').classList.remove('hover');
			document.querySelector('.skills__figma_3').classList.remove('hover');
			document.querySelector('.skills__figma_4').classList.remove('hover');
			document.querySelector('.skills__figma_5').classList.remove('hover');
			document.querySelector('.skills__figma + div').classList.remove('hover');
		});
		// PHOTOSHOP
		document.querySelector('.skills__ps').addEventListener('mouseenter', () => {
			document.querySelector('.skills__ps_1').classList.add('hover');
			document.querySelector('.skills__ps_2').classList.add('hover');
			document.querySelector('.skills__ps_3').classList.add('hover');
			document.querySelector('.skills__ps_4').classList.add('hover');
			document.querySelector('.skills__ps + div').classList.add('hover');
		});
		document.querySelector('.skills__ps').addEventListener('mouseleave', () => {
			document.querySelector('.skills__ps_1').classList.remove('hover');
			document.querySelector('.skills__ps_2').classList.remove('hover');
			document.querySelector('.skills__ps_3').classList.remove('hover');
			document.querySelector('.skills__ps_4').classList.remove('hover');
			document.querySelector('.skills__ps + div').classList.remove('hover');
		});
		// TS
		document.querySelector('.istudy__ts').addEventListener('mouseenter', () => {
			document.querySelector('.istudy__ts_1').classList.add('hover');
			document.querySelector('.istudy__ts + div').classList.add('hover');
		});
		document.querySelector('.istudy__ts').addEventListener('mouseleave', () => {
			document.querySelector('.istudy__ts_1').classList.remove('hover');
			document.querySelector('.istudy__ts + div').classList.remove('hover');
		});
		// REACT
		document.querySelector('.istudy__react').addEventListener('mouseenter', () => {
			document.querySelectorAll('.istudy__react_1').forEach(item => item.classList.add('hover'));
			document.querySelector('.istudy__react + div').classList.add('hover');
		});
		document.querySelector('.istudy__react').addEventListener('mouseleave', () => {
			document.querySelectorAll('.istudy__react_1').forEach(item => item.classList.remove('hover'));
			document.querySelector('.istudy__react + div').classList.remove('hover');
		});
		// REDUX
		document.querySelector('.istudy__redux').addEventListener('mouseenter', () => {
			document.querySelectorAll('.istudy__redux_1').forEach(item => item.classList.add('hover'));
			document.querySelector('.istudy__redux + div').classList.add('hover');
		});
		document.querySelector('.istudy__redux').addEventListener('mouseleave', () => {
			document.querySelectorAll('.istudy__redux_1').forEach(item => item.classList.remove('hover'));
			document.querySelector('.istudy__redux + div').classList.remove('hover');
		});
		// WEBPACK
		document.querySelector('.istudy__webpack').addEventListener('mouseenter', () => {
			document.querySelectorAll('.istudy__webpack_2').forEach(item => item.classList.add('hover'));
			document.querySelectorAll('.istudy__webpack_3').forEach(item => item.classList.add('hover'));
			document.querySelector('.istudy__webpack + div').classList.add('hover');
		});
		document.querySelector('.istudy__webpack').addEventListener('mouseleave', () => {
			document.querySelectorAll('.istudy__webpack_2').forEach(item => item.classList.remove('hover'));
			document.querySelectorAll('.istudy__webpack_3').forEach(item => item.classList.remove('hover'));
			document.querySelector('.istudy__webpack + div').classList.remove('hover');
		});
	}

	function setTheme() {
		const isDark = localStorage.getItem('isDark');
		if(isDark == 'true') {
			document.querySelectorAll('.modalwindow__triangle path').forEach(item => {item.classList.add('dark')});
			document.querySelectorAll('.modalwindow__text').forEach(item => {item.classList.add('dark')});
		} else if (isDark == 'false') {
			document.querySelectorAll('.modalwindow__triangle path').forEach(item => {item.classList.add('light')});
			document.querySelectorAll('.modalwindow__text').forEach(item => {item.classList.add('light')});
		}
	}

	document.addEventListener('DOMContentLoaded', () => {
		hoverIcons();
		setTheme();
	})

})()
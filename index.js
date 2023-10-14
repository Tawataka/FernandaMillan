let lastKnownScrollPosition = 0
let ticking = false

function tabsPage(event, tabOption) {
	sessionStorage.setItem('event', tabOption + '-tab')

	tabcontent = document.getElementsByClassName('tabcontent')
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = 'none'
	}
	tablinks = document.getElementsByClassName('tablinks')
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(' active', '')
	}
	event.currentTarget.className += ' active'
	document.getElementById(tabOption).style.display = 'block'
}

function init() {}

$(document).ready(function () {
	let darkmode = sessionStorage.getItem('mode')
	console.log(darkmode)
	if (darkmode === 'darkmode') {
		let darkModeButton = document.getElementById('darkmode-button')
		darkModeButton.click()
	}

	let tabId = sessionStorage.getItem('event')
	console.log(tabId)
	if (tabId == null) {
		tabId = 'resume-tab'
	}
	let temp = document.getElementById(tabId)
	temp.click()
})

init()

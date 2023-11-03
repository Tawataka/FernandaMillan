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

function sendEmail() {
	let email = document.getElementById('email').value
	let name = document.getElementById('name').value
	let message = document.getElementById('Inputbody').value
	console.log(email, name, message)

	var params = {
		name: document.getElementById('name').value,
		email: document.getElementById('email').value,
		message: document.getElementById('Inputbody').value,
	}

	const serviceID = 'service_zd9x9xm'
	const templateID = 'template_xr1vmoc'

	emailjs
		.send(serviceID, templateID, params)
		.then((res) => {
			document.getElementById('name').value = ''
			document.getElementById('email').value = ''
			document.getElementById('Inputbody').value = ''
			console.log(res)
			alert('Your message sent successfully!!')
		})
		.catch((err) => console.log(err))
}

function buttonClick(pointer) {
	if (pointer === 'contact') {
		let tabId = 'contact-tab'
		let temp = document.getElementById(tabId)
		temp.click()
	}
}

function init() {}

$(document).ready(function () {
	let tabId = sessionStorage.getItem('event')
	console.log(tabId)
	if (tabId == null) {
		tabId = 'home-tab'
	}
	let temp = document.getElementById(tabId)
	temp.click()
})

init()

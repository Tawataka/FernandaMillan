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
	let subject = document.getElementById('subject').value
	let message = document.getElementById('Inputbody').value
	console.log(email, subject, message)

	Email.send({
		Host: 'smtp.yourisp.com',
		Username: 'username',
		Password: 'password',
		To: 'tawareyna@gmail.com',
		From: 'you@isp.com',
		Subject: 'This is the subject',
		Body: 'And this is the body',
	}).then((message) => alert(message))
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

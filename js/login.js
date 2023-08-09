const switchers = [...document.querySelectorAll('.switcher')]

switchers.forEach(item => {
	item.addEventListener('click', function() {
		switchers.forEach(item => item.parentElement.classList.remove('is-active'))
		this.parentElement.classList.add('is-active')
	})
})


const btn = document.querySelector('.btn-signup')

btn.addEventListener('click', function() {
	const userName = document.getElementById('signup-user').value
	const email = document.getElementById('signup-email').value
	const pass = document.getElementById('signup-password').value
	const confirmPass = document.getElementById('signup-password-confirm').value
	const errorName = document.getElementById('errorName')
	const errorEmail = document.getElementById('errorEmail')
	const errorPass = document.getElementById('errorPass')
	const errorCfpass = document.getElementById('errorCfpass')
	const regexName = /^[^\d+]*[\d+]{0}[^\d]*$/
	const regexEmail = /^(((\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*(\r\n)?\n?)+)*)$/
	const regexPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

	if(userName == '' || userName == null) {
		errorName.innerText = "Ho ten khong dc de trong"
	} else if(!regexName.test(userName)) {
		errorName.innerText = "Ho ten khong hop le"
	} else {
		errorName.innerText = ''
	}

	if(email == '' || email == null) {
		errorEmail.innerText = "Email k dc dde trong"
	} else if(!regexEmail.test(email)) {
		errorEmail.innerText = "Email khong hop le"
	} else {
		errorEmail.innerText = ''
	}

	if(pass == '' || pass == null) {
		errorPass.innerText = "Pass k dc dde trong"
	} else if(!regexPass.test(pass)) {
		errorPass.innerText = "pass co it nhat 8 ki tu, gom chu va so"
	} else {
		errorPass.innerText = ''
	}

	if(confirmPass == '' || confirmPass == null) {
		errorCfpass.innerText = "hay xac nhan mat khau"
	} else if(confirmPass!=pass) {
		errorCfpass.innerText = "pass nhap lai k chuinh xac"
	} else {
		errorCfpass.innerText = ''
	}

	if(userName && email && pass && confirmPass){
		alert("dang ky thanh cong nhan ok de den trang chu" )
		location.href = "https://getbootstrap.com/docs/4.3/getting-started/introduction/"
		document.querySelector(".form-signup").reset()
	}
	




})
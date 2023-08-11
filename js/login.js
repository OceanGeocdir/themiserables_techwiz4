document.addEventListener("DOMContentLoaded", function () {
	const switchers = [...document.querySelectorAll('.switcher')];

	switchers.forEach(item => {
		item.addEventListener('click', function () {
			switchers.forEach(item => item.parentElement.classList.remove('is-active'))
			this.parentElement.classList.add('is-active');
		});
	});

	const loginForm = document.querySelector(".form-login");
	const signupForm = document.querySelector(".form-signup");
	const loginButton = document.getElementById("login");
	const registerButton = document.getElementById("register");

	loginButton.addEventListener("click", function (event) {
		event.preventDefault();
		const email = document.getElementById("login-email").value;
		const password = document.getElementById("login-password").value;

		const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
		const user = existingUsers.find(user => user.email === email && user.password === password);

		if (user) {
			alert("Login successful!");
			window.location.href = "./index.html"
			localStorage.setItem('login', true)
		} else {
			alert("Invalid credentials. Please try again.");
		}
	});


	registerButton.addEventListener("click", function (event) {
		event.preventDefault();
		const username = document.getElementById("signup-user").value;
		const email = document.getElementById("signup-email").value;
		const password = document.getElementById("signup-password").value;

		// Check if user already exists
		const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
		const userExists = existingUsers.some(user => user.email === email);

		if (username === "" || email === "" || password === "") {
			alert("Please fill all fields");
		} else if (userExists) {
			alert("An account with this email already exists");
		} else {
			const newUser = {
				name: username,
				email: email,
				password: password
			};

			// Add new user to existing users
			existingUsers.push(newUser);

			// Store the updated list of users in local storage
			localStorage.setItem("users", JSON.stringify(existingUsers));

			alert("Account registered successfully!");

			// Clear the registration form
			document.getElementById("signup-user").value = "";
			document.getElementById("signup-email").value = "";
			document.getElementById("signup-password").value = "";
			document.getElementById("signup-password-confirm").value = "";
		}
	});
});
  // Lấy tham chiếu đến các phần tử cần sử dụng
//   const showPopupButton = document.getElementById('showPopup');
//   const popup = document.getElementById('popup');

//   // Xử lý sự kiện khi nút được nhấp
//   showPopupButton.addEventListener('click', () => {
//     popup.style.display = 'block';
//   });
//   window.addEventListener('click', (event) => {
//     if (event.target === popup) {
//       popup.style.display = 'none';
//     }
//   });
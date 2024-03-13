$(document).ready(function () {

    let isValidForm1 = false;
    let isValidForm2 = false;
    let isValidForm3 = false;
    let isValidForm4 = false;
    $('#email').on('input', function () {
        validateEmail();
        validateForm();
    });


    $('#userName').on('input', function () {
        validateUserName();
        validateForm();
    });

    $('#password').on('input', function () {
        validatePassword();
        validateForm();
    });


    $('#confirmPassword').on('input', function () {
        validateConfirmPassword();
        validateForm();
    });

  
    $('#loginButton').click(function (e) {
        e.preventDefault();
        validateForm();
        const isValid =  isValidForm1 && isValidForm2 && isValidForm3 && isValidForm4;

        if (isValid) {
            const username = $('#userName').val();
            window.location.href = `page2.html?username=${encodeURIComponent(username)}`;
        }
    });

    function validateForm() {

        const isValid =  isValidForm1 && isValidForm2 && isValidForm3 && isValidForm4;

        if (isValid) {
            $('#loginButton').removeClass("disabled");
            $('#loginButton').addClass("button");

        } else {
            $('#loginButton').removeClass("button");
            $('#loginButton').addClass("disabled");
        }
    }

    function validateEmail() {
        isValidForm1 = false;
        const email = $('#email').val();
        if (!email) {
            showError('#emailError', 'Email is required');
        } else if (!isNortheasternEmail(email)) {
            showError('#emailError', 'Email must be a northeastern email address');
        } else if (!isValidEmailCharacters(email)) {
            showError('#emailError', 'Email contains unpermitted characters');
        } 
        else {
            isValidForm1=true;
            $('#emailError').text('');
        }
    }

    function validateUserName() {
        isValidForm2 = false;
        const userName = $('#userName').val();
        if (!userName) {
            showError('#userNameError', 'User Name is required');
        } else if (!isValidInput(userName)) {
            showError('#userNameError', 'User Name contains special characters');
        } else if (!isValidLength(userName, 3, 20)) {
            showError('#userNameError', 'User Name must be between 3 and 20 characters');
        } else {
            isValidForm2=true;
            $('#userNameError').text('');
        }
    }

    function validatePassword() {
        isValidForm3 = false;
        const password = $('#password').val();
        if (!password) {
            showError('#passwordError', 'Password is required');
        } else if (!isValidInput(password)) {
            showError('#passwordError', 'Password contains special characters');
        } else if (!isValidLength(password, 6, 20)) {
            showError('#passwordError', 'Password must be between 6 and 20 characters');
        } else {
            isValidForm3=true;
            $('#passwordError').text('');
        }
    }

    function validateConfirmPassword() {
        isValidForm4 = false;
        const confirmPassword = $('#confirmPassword').val();
        const password = $('#password').val();
        if (!confirmPassword) {
            showError('#confirmPasswordError', 'Confirm Password is required');
        } else if (confirmPassword !== password) {
            showError('#confirmPasswordError', 'Confirm Password does not match the Password');
        } else {
            isValidForm4=true;
            $('#confirmPasswordError').text('');
        }
    }

    function showError(elementId, errorMessage) {
        $(elementId).text(errorMessage).css('color', 'red');
    }

    function isValidInput(input) {
        return !/[!@#$%^&*()_+{}\[\]:;<>,.?~\\]/.test(input);
    }

    function isValidLength(input, minLength, maxLength) {
        return input.length >= minLength && input.length <= maxLength;
    }

    function isNortheasternEmail(email) {
        return /.*@northeastern\.edu$/.test(email);
    }
    function isValidEmailCharacters(email) {
      
        return /^[A-Za-z0-9._%+-]+@northeastern\.edu$/.test(email);
    }
});

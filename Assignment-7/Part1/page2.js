
$(document).ready(function () {

    let isValidForm1 = false;
     let isValidForm2 = false;
    const userName = getUrlParameter('username');
    $('#userNameDisplay').text(userName);


    $('#number2').on('input', function () {
        validateNumberFields1($(this));
    });
    $('#number1').on('input', function () {
        validateNumberFields2($(this));
    });

    $('.calculation-button').click(function () {
        const operation = $(this).data('operation');
        console.log(operation);
        if(isValidForm1&& isValidForm2)
        performCalculation(operation);
    });

    function enableCalculationButtons() {
        if(isValidForm1&& isValidForm2){
        $('.calculation-button').prop('disabled', false);
        $('.calculation-button').removeClass("disabled");
        }
    else{
        $('.calculation-button').addClass("disabled");
    $('.calculation-button').prop('disabled', true);
    }
    }

  
    function validateNumberFields1(inputField) {
        const input = inputField.val();
        if (isValidNumber(input)) {
            isValidForm2=true;
            enableCalculationButtons();
            inputField.siblings('.error').text('');
        } else {
            
            isValidForm2=false;
            enableCalculationButtons();
            inputField.siblings('.error').text('Enter a valid number').css('color', 'red');
        }
    }

    function validateNumberFields2(inputField) {
        const input = inputField.val();
        if (isValidNumber(input)) {
            isValidForm1=true;
            enableCalculationButtons();
            inputField.siblings('.error').text('');
        } else {
            isValidForm1=false;
  
          enableCalculationButtons();
            inputField.siblings('.error').text('Enter a valid number').css('color', 'red');
        }
    }

    const performCalculation = (operation) => {
        const number1 = parseFloat($('#number1').val());
        const number2 = parseFloat($('#number2').val());
        let result;
    
        switch (operation) {
            case 'add':
                result = number1 + number2;
                break;
            case 'subtract':
                result = number1 - number2;
                break;
            case 'multiply':
                result = number1 * number2;
                break;
            case 'divide':
                result = number2 !== 0 ? number1 / number2 : 'Cannot divide by zero';
                break;
        }
    
        console.log(result);
        $('#result').val(result);
    };
    

    function isValidNumber(input) {
        return /^-?\d+(\.\d+)?$/.test(input);
    }

    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        const results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }
});

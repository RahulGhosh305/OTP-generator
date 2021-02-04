function getOTP(){
    const randomNumber = Math.random() * 10000;
    const otpNumber = (randomNumber + '').split('.')[0];
    if(otpNumber.length === 4){
        return otpNumber;
    }
    else{
        return getOTP();
    }
}


//* Display OTP Generated Pin
document.getElementById('otp-generate-btn').addEventListener('click', function(){
    const inputBox = document.getElementById('otp-generate-input');
    inputBox.value  = getOTP();
})


//* Button Calculator event handler
const buttonContainer = document.getElementById('digits-container');
buttonContainer.addEventListener('click', function(event){
    const digit = event.target.innerText;
    if(isNaN(digit)){
        // backspace button event handler;
        if(digit === 'C'){
            const typedInput = document.getElementById('otp-typed');
            typedInput.value = '';
        }
    }
    else{
        const typedInput = document.getElementById('otp-typed');
        typedInput.value = typedInput.value + digit;
    }
})


//* Submit and verify
function matchOTP(){
    const actualOtp = document.getElementById('otp-generate-input').value;
    const typedOtp = document.getElementById('otp-typed').value;
    if(actualOtp === typedOtp){
        getDisplayResult('block', 'none')
    }
    else{
        getDisplayResult('none', 'block')
    }
    //  after submit clear input
    const inputBox = document.getElementById('otp-generate-input');
    inputBox.value  = '';
    const typedInput = document.getElementById('otp-typed');
    typedInput.value = '';
}

function getDisplayResult(correctValue, incorrectValue){
    const correct = document.getElementById('correct-otp');
    correct.style.display = correctValue;
    const incorrect = document.getElementById('incorrect-otp');
    incorrect.style.display = incorrectValue;
}
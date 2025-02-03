let passawordInput = document.getElementById('pass');


passawordInput.addEventListener('keyup', () => {

    let massageEl = document.getElementById('msg');
    let inputValue = passawordInput.value;

    if (inputValue.length == 0) {
        massageEl.innerHTML = 'Enter Password';
        massageEl.style.color = "#fff"
         passawordInput.style.borderColor = "gray"


    } else {

        if (inputValue.length < 4) {
            massageEl.innerHTML = 'Password is weak';   
            massageEl.style.color = 'red';
            passawordInput.style.borderColor = "red"
            return false
          
        } else if (inputValue.length >= 4 && inputValue.length < 8) {
            massageEl.innerHTML = "password is medium";
            massageEl.style.color = "yellow";
             passawordInput.style.borderColor = "yellow"

        } else if (inputValue.length >= 8 && inputValue.length <= 16) {
            massageEl.innerHTML = "password is strong";
            massageEl.style.color = "green";
             passawordInput.style.borderColor = "rgb(19, 228, 19)"
        } else {
            massageEl.innerHTML = "password should be under 16 letter";
            massageEl.style.color = 'red';
             passawordInput.style.borderColor = "red"

        }

    }
});
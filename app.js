// Show form list
function openFormList () {
    document.getElementById('main').style.visibility = 'visible';
    document.getElementById('main').style.position = 'absolute';
    document.getElementById('main').style.animation = "showFormList 1s";
        setTimeout(() => {
            document.getElementById('main').style.right = '0%';
        }, 1000);
}

// Hide form list
function hideFormList () {
    document.getElementById('main').style.animation = "hideFormList 10s";
        setTimeout(() => {
            document.getElementById('main').style.visibility = 'hidden';
            document.getElementById('main').style.position = 'fixed';
            document.getElementById('main').style.right = '-500%';
        }, 10000);
};

// Form list animation
let dynamicStyles = null;
function firstAnimation(body) {
  if (!dynamicStyles) {
    dynamicStyles = document.createElement('style');
    dynamicStyles.type = 'text/css';
    document.head.appendChild(dynamicStyles);
  }
  dynamicStyles.sheet.insertRule(body, dynamicStyles.length);
}

function secondAnimation(body) {
    if (!dynamicStyles) {
      dynamicStyles = document.createElement('style');
      dynamicStyles.type = 'text/css';
      document.head.appendChild(dynamicStyles);
    }
    dynamicStyles.sheet.insertRule(body, dynamicStyles.length);
}

firstAnimation(`
    @keyframes showFormList { 
        from {
            position: fixed;
            right: -500%;
        }
        to {
            position: absolute;
            right: 0;
        }
    }
`);

secondAnimation(`
    @keyframes hideFormList { 
        from {
            position: absolute;
            right: 0;
        }
        to {
            position: fixed;
            right: -500%;
        }
    }
`);

// Form list
const form = document.getElementById('form');
const fullname = document.getElementById('name');
const phonenumber = document.getElementById('phonenumber');
const adress = document.getElementById('adress');
const housenumber = document.getElementById('housenumber');
const postnumber = document.getElementById('postnumber');
const city = document.getElementById('city');
const email = document.getElementById('email');
const last = document.getElementById('last');

form.addEventListener('ZAVRŠI', (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    const fullnameValue = fullname.value.trim();
    const phonenumberValue = phonenumber.value.trim();
    const adressValue = adress.value.trim();
    const housenumberValue = housenumber.value.trim();
    const postnumberValue = postnumber.value.trim();
    const cityValue = city.value.trim();
    const emailValue = email.value.trim();
    const lastValue = last.value.trim();
    let count = 0;
    
    var pattern = /^[A-Za-z]+$/;
    var checkName = pattern.test(fullnameValue);
    if(fullnameValue == '') {
        showError(fullname, 'This field cannot be empty!');
    } else if(checkName === false) {
        showError(fullname, 'Name cannot contain numbers and symbols!');
    } else {
        showSuccessMessage(fullname);
        count++;
    }

    if(phonenumberValue == '') {
        showError(phonenumber, 'This field cannot be empty!');
    } else if(phonenumberValue.length < 9) {
        showError(phonenumber, 'Wrong phone number!');
    } else {
        showSuccessMessage(phonenumber);
        count++;
    }

    if(adressValue == '') {
        showError(adress, 'This field cannot be empty!');
    } else {
        showSuccessMessage(adress);
        count++;
    }

    if(housenumberValue == '') {
        showError(housenumber, 'This field cannot be empty!');
    } else if(housenumberValue.length > 3) {
        showError(housenumber, 'House number cannot be longer than 3 numbers!');
    } else {
        showSuccessMessage(housenumber);
        count++;
    }

    if(postnumberValue == '') {
        showError(postnumber, 'This field cannot be empty!');
    } else if(postnumberValue.length > 6) {
        showError(postnumber, 'Post number cannot be longer than 6 numbers!');
    } else {
        showSuccessMessage(postnumber);
        count++;
    }

    if(cityValue == '') {
        showError(city, 'This field cannot be empty!');
    } else {
        showSuccessMessage(city);
        count++;
    }

    if(emailValue == '') {
        showError(email, 'This field cannot be empty!');
    } else if(!emailCheck(emailValue)) {
        showError(email, 'Invalid mail!');
    } else {
        showSuccessMessage(email);
        count++;
    }

    if(lastValue == '') {
        showSuccessMessage(last);
    } else {
        showSuccessMessage(last);
    }

    if(count >= 7) {
        document.getElementById('finish').style.backgroundColor = '#207068';
        console.log('Full Name: ' + fullnameValue + "\n" +
        'Phone Number: ' + phonenumberValue + "\n" +
        'Adress: ' + adressValue + "\n" +
        'House Number: ' + housenumberValue + "\n" +
        'Post Number: ' + postnumberValue + "\n" +
        'City: ' + cityValue + "\n" +
        'Email: ' + emailValue + "\n" +
        'Extra Notes: ' + lastValue + "\n"
        );
    } else return;
}

// Show success and error msg
function showError(input, msg) {
    const formInputs = input.parentElement;
    const small = formInputs.querySelector('small');
    formInputs.className = 'form-inputs error';
    small.innerText = msg;
    small.style.visibility = 'visible';
}

function showSuccessMessage(input) {
    const formInputs = input.parentElement;
    formInputs.className = 'form-inputs success';
    const small = formInputs.querySelector('small');
    small.style.visibility = 'hidden';
}

// Email checker
function emailCheck(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
const form=document.getElementById('form')
const Uname=document.getElementById('Uname')
const email=document.getElementById('email')
const password=document.getElementById('password')
const password_2=document.getElementById('password_2')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (checkInputs()) {
        displaySuccessMessage();
        resetFormInputs();
    }
});
function checkInputs(){
    const usernameValue=Uname.value.trim()
    const emailValue=email.value.trim()
    const passwordValue=password.value.trim()
    const password_2Value=password_2.value.trim()

    let isValid=true

    if(usernameValue === ''){
        setErrorFor(Uname,"Username cannot be blank!")
        isValid=false
    }else{
        setSuccessFor(Uname)
    }

	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
        isValid=false
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
        isValid=false
	} else {
		setSuccessFor(email);
	}

    if(passwordValue === ''){
        setErrorFor(password,"Password cannot be blank!")
        isValid=false
    }else{
        setSuccessFor(password)
    }
    if(password_2Value === '' ){
        setErrorFor(password_2,"Retype the password")
        isValid=false
    }else if(password_2Value!=passwordValue ){
        setErrorFor(password_2,"Passwords do not match")
        isValid=false
    }else{
        setSuccessFor(password_2)
    }
    return isValid
}

function displaySuccessMessage() {
    alert('Everything is successful!');
}
function resetFormInputs() {
    Uname.value = '';
    email.value = '';
    password.value = '';
    password_2.value = '';

    Uname.parentElement.className = 'form-control';
    email.parentElement.className = 'form-control';
    password.parentElement.className = 'form-control';
    password_2.parentElement.className = 'form-control';
}

function setErrorFor(input,message){
    const formControl=input.parentElement
    const small=formControl.querySelector('small')

    small.innerText=message

    formControl.className='form-control error'

}
function setSuccessFor(input) {
    const formControl = input.parentElement;
    if (!formControl.classList.contains('success')) {
        formControl.className = 'form-control success';
    }
}


function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

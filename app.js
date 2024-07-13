const form = document.querySelector('#form');

const username = document.querySelector('#username');

const email = document.querySelector('#email');

const password = document.querySelector('#password');

const cpassword = document.querySelector('#cpassword');

form.addEventListener('submit',(e)=>
{
    e.preventDefault();
    validateInput();
})

function validateInput(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const cpasswordValue = cpassword.value.trim();

    if(usernameValue === '')
        setError(username,'username is required')
    else{
        setSucess(username);
    }

    if(emailValue ==='')
    {
        setError(email,'Email is required')
    }
    else if(!validateEmail(emailValue))
    {
       setError(email,'please enter a valid email');
    }
    else{
        setSucess(email);
    }

    if(passwordValue==='')
    {
        setError(password,'password is required');
    }
    else if(passwordValue.length<8)
    {
        setError(password,'password must be 8 character long')
    }
    else{
        setSucess(password);
    }

    if(cpasswordValue==='')
        {
            setError(cpassword,'password is required');
        }
    else if(cpasswordValue!==passwordValue)
    {
        setError(cpassword,'password not matched')
    }
    else{
        setSucess(cpassword);
    }


    
}

function setError(element,message){
    //to fetch parent element 
    //if element = pass then parent element is input-group
  const inputGroup = element.parentElement;
  // parent element's error class
  const errorElement = inputGroup.querySelector('.error');
  errorElement.innerText = message;
  //setting error
  inputGroup.classList.add('error')
  // first entered correctly then entered as wrong
  //if success included then we have to remove success
  inputGroup.classList.remove('success');
}

function setSucess(element){
    //to fetch parent element 
    //if element = pass then parent element is input-group
  const inputGroup = element.parentElement;
  // parent element's error class
  const errorElement = inputGroup.querySelector('.error');
  errorElement.innerText = '';
  //setting error
  inputGroup.classList.add('success');
  // first entered correctly then entered as wrong
  //if success included then we have to remove success
  inputGroup.classList.remove('error');
}

const validateEmail = (email) =>
{
    return String(email)
    .toLowerCase()
    .match( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

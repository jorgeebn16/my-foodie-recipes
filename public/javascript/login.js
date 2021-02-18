async function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && password.length>=8) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
        if (response.ok) {
            console.log('User Signup Successful');
            alert('User Signup Successful');
            document.location.replace('/dashboard');
        } 
        
    }    
    else { if (password.length<8) 
      //alert(response.statusText);
      alert("Password do not meet minimun requirements of 8 Characters. Please try using a new Password");
    }
    
}

async function loginFormHandler(event) {
    event.preventDefault();  
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          username,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        console.log('Login Successful');
        alert('Login Successful');
        document.location.replace('/dashboard');
      }  else {
        //alert(response.statusText);
        alert("Password or Username incorrect. Please try again");
      }
    }
    
    
}
  
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
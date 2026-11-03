const form = document.getElementById("regForm");

function setError(id, message) {
    document.getElementById(id).textContent = message;
}

function clearErrors() {
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("mobileError").textContent = "";
    document.getElementById("genderError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("confirmError").textContent = "";
}

form.addEventListener("submit", function(e) {

    e.preventDefault();

    clearErrors();

    let valid = true;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirm").value;
//name field
    if (name === "") {
    setError("nameError", "Full name is required");
    valid = false;




    } else if (name.length < 2) {
    setError("nameError", "Name must be at least 2 characters");
    valid = false;
     }
//email

if(email=== ""){
     setError("emailError", "email is required ");
     valid =false;
}
 
else if(!email.includes("@gmail.com")){
    setError("emailError", "Enter valid email");
 valid = false;
}


//MOBILE


if(mobile=== ""){
     setError("mobileError", "mobile-number is required ");
     valid =false;
}
 
else  if (mobile.length !== 10){
    setError("mobileError", "mobile-no is  in incorrect form");
 valid = false;
}

//gender



if (!gender) {
    setError("genderError", " select  at least 1  gender");
    valid = false;
  }


//password


if(password=== ""){
     setError("passwordError", "password is required ");
     valid =false;
}
else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).+$/.test(password)) {
    setError("passwordError", "Password must contain A-Z, a-z and 0-9");
    valid = false;
}



//conform pass

if (confirm === "") {
    setError("confirmError", "Please confirm your password");
    valid = false;


  }
  
  
  else if (confirm !== password) 
    
    {
    setError("confirmError", "Passwords do not match");
    valid = false;
  }








     if (valid) {
        alert("Form Submitted Successfully");
    }

});


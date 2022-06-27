function validate() {    
    var fname = document.reg_form.fname;    
    var lname = document.reg_form.lname;       
    var gender = document.reg_form.gender;    
    var email = document.reg_form.email;    
    var mobile = document.reg_form.mobile;     

    if (fname.value.length <= 0) {    
        alert("Name is required");    
        fname.focus();    
        return false;    
    }    
    if (lname.value.length <= 0) {    
        alert("Last Name is required");    
        lname.focus();    
        return false;    
    }    
    if (email.value.length <= 0) {    
        alert("Email Id is required");    
        email.focus();    
        return false;    
    }  
    if (password == "") {
        alert("Please enter your password");
        password.focus();
        return false;
    }
    if(password.length < 8){
        alert("Password should be atleast 8 character long");
        password.focus();
        return false;
    }
    if (mobile.value.length <= 0) {    
        alert("Mobile number is required");    
        mobile.focus();    
        return false;    
    }    
    if (gender.value.length <= 0) {    
        alert("Gender is required");    
        gender.focus();    
        return false;    
    }    

    return false;    

}



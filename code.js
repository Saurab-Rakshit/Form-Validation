function validation(){
    var user = document.getElementById('user').value;
    var email = document.getElementById('email').value;
    var mobno = document.getElementById('mobno').value;
    var pass = document.getElementById('pass').value;
    var cpass = document.getElementById('cpass').value;

    //* Username
    if (user === '') {
        document.getElementById('username').innerHTML = '*Please fill user';
        return false;            
    }else if (user.length <3  || user.length > 20) {
        document.getElementById('username').innerHTML = '*username must be between 3 to 10';
        return false;            
    }else if(!isNaN(user)){ //TODO: !isNaN(user) For Avoiding Numbers in Username Input
        document.getElementById('username').innerHTML = '*Numbers Not Allowed'
        return false;
    }    
    //* Email
    if (email === '') {
        document.getElementById('emailid').innerHTML  = '*Please fill email';
        return false;            
    }else if(email.indexOf('@') <= 0){
        document.getElementById('emailid').innerHTML = '@ invalid position';
        return false;
    }else if((email.charAt(email.length-4) != '.') && (email.charAt(email.length-3) != '.')){
        document.getElementById('emailid').innerHTML = '*Check your "." position it must be before last 3 letters or 2 letters';
        return false;
    }
    //* Mobile NO
    if (mobno === '') {
        document.getElementById('mobileno').innerHTML = '*Please fill mobile no';
        return false;            
    }else if(isNaN(mobno)){  //TODO: isNaN(mobno) For avoiding Alphabets in the Mobile Number input
        document.getElementById('mobileno').innerHTML = '* Alphabets not allowed';
        return false;
    }else if (mobno.length != 10) {
        document.getElementById('mobileno').innerHTML = '*Mobile No. must be of 10 digits';
        return false;            
    }  

    //* Password
    if (pass === '') {
        document.getElementById('password').innerHTML = '*Please fill password';
        return false;            
    }else if(!pass.length > 5 ){
        document.getElementById('password').innerHTML = '*Password length must be greater than 5'
        return false;
    }
    //* confirming password
    if(pass != cpass){
        document.getElementById('cpassword').innerHTML = '*Password Not matching';
        return false;
    }

    //* Confirm Password
    if (cpass === '') {
        document.getElementById('cpassword').innerHTML = '*Please fill C Password';
        return false;            
    }    
    
}

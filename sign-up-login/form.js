function validation2(){
	var email = document.getElementById('email').value;
	var pass = document.getElementById('pass').value;
	var confirmpass = document.getElementById('conpass').value;
	console.log(email)
	if(email==""){
		document.getElementById('mail').innerHTML =" ** Please fill the email idx` field";
		return false;
	}
	if(email.indexOf('@') <= 0 ){
		document.getElementById('mail').innerHTML =" ** @ Invalid Position";
		return false;
	}

	if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')){
		document.getElementById('mail').innerHTML =" ** . Invalid Position";
		return false;
	}

	
	if(pass == ""){
		document.getElementById('password').innerHTML =" ** Please fill the password field";
		return false;
	}
	if((pass.length <= 5) || (pass.length > 20)) {
		document.getElementById('password').innerHTML =" ** Passwords lenght must be between  5 and 20";
		return false;	
	}



	if(pass!=confirmpass){
		document.getElementById('confrmpass').innerHTML =" ** Password does not match the confirm password";
		return false;
	}
	if(confirmpass == ""){
		document.getElementById('confrmpass').innerHTML =" ** Please fill the confirmpassword field";
		return false;
	}


}

function validation(){
	var emaill=document.getElementById("email2").value;
    var passl=document.getElementById("pass2").value;
	var user = document.getElementById("user").value;
	var email = document.getElementById('email').value;
	var pass = document.getElementById('pass').value;
	var confirmpass = document.getElementById('conpass').value;
   
///////////////////////for sign in/////////
     if(emaill==""){
	    document.getElementById('mail2').innerHTML =" ** Please fill the email idx` field";
	    return false;
    }
    if(emaill.indexOf('@') <= 0 ){
	    document.getElementById('mail2').innerHTML =" ** @ Invalid Position";
  	    return false;
    }

    if((emaill.charAt(emaill.length-4)!='.') && (emaill.charAt(email.length-3)!='.')){
	    document.getElementById('mail2').innerHTML =" ** . Invalid Position";
	    return false;
    }


    if(passl == ""){
	    document.getElementById('password2').innerHTML =" ** Please fill the password field";
	    return false;
    }
    if((passl.length <= 5) || (passl.length > 20)) {
	    document.getElementById('password2').innerHTML =" ** Passwords lenght must be between  5 and 20";
	    return false;	
    } 

   /////////////////for sign up/////////


	if(user == " "){
		document.getElementById('username').innerHTML =" ** Please fill the username field";
		return false;
	}
	if((user.length <= 2) || (user.length > 20)) {
		document.getElementById('username').innerHTML =" ** Username lenght must be between 2 and 20";
		return false;	
	}
	if(!isNaN(user)){
		document.getElementById('username').innerHTML =" ** only characters are allowed";
		return false;
	}
	
	if(email==""){
		document.getElementById('mail').innerHTML =" ** Please fill the email idx` field";
		return false;
	}
	if(email.indexOf('@') <= 0 ){
		document.getElementById('mail').innerHTML =" ** @ Invalid Position";
		return false;
	}

	if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')){
		document.getElementById('mail').innerHTML =" ** . Invalid Position";
		return false;
	}

	
	if(pass == ""){
		document.getElementById('password').innerHTML =" ** Please fill the password field";
		return false;
	}
	if((pass.length <= 5) || (pass.length > 20)) {
		document.getElementById('password').innerHTML =" ** Passwords lenght must be between  5 and 20";
		return false;	
	}



	if(pass!=confirmpass){
		document.getElementById('confrmpass').innerHTML =" ** Password does not match the confirm password";
		return false;
	}
	if(confirmpass == ""){
		document.getElementById('confrmpass').innerHTML =" ** Please fill the confirmpassword field";
		return false;
	}


	
    var mobileNumber = document.getElementById('mob-num').value;
	if(mobileNumber == ""){
		document.getElementById('mobileno').innerHTML =" ** Please fill the mobile NUmber field";
		return false;
	}
	if(isNaN(mobileNumber)){
		document.getElementById('mobileno').innerHTML =" ** user must write digits only not characters";
		return false;
	}
	if(mobileNumber.length!=10){
		document.getElementById('mobileno').innerHTML =" ** Mobile Number must be 10 digits only";
		return false;
	}

	
}



const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
signUpButton.addEventListener('click', () => {
container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
container.classList.remove("right-panel-active");
});
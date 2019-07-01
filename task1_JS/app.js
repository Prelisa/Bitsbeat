
function validateEmail() 
{
    // var re = /\S+@\S+/;
    // return re.test(email);
    var name=document.getElementsByClassName("email").value;
    if (name.indexOf('@')<=0){
        document.getElementsByClassName("message").innerHTML="Invalid email";
        return false;
    }

    if (name.charAt(name.length-4)!="."){
        document.getElementsByClassName("message").innerHTML="Invalid email";
        return false;
    }

    

    var a=document.getElementsByClassName("pass").value;
    var b=document.getElementsByClassName("confirm-pass").value;
    


    if(a==""){
        document.getElementsByClassName("message1").innerHTML="please fill password";
        return false;
    }

    if(a.length<5 ||a.length>=25){
        document.getElementsByClassName("message1").innerHTML="character error";
        return false;
    }

    if (a!=b){
        document.getElementsByClassName("message1").innerHTML="password does not match";
        return false;
    }

    

}


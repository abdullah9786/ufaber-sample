$(".box").on("focusin", function () {
    $(this).parent().find("label").addClass("active");
});

$(".box").on("focusout", function () {
    if (!this.value) {
        $(this).parent().find("label").removeClass("active");
    }
});


$(document).ready(function(){
    $('.phone_number_3').inputmask('+99-9999999999', {"placeholder": ""});
});


function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }


}
function  seterror(id, error){

    element= document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm(){
    var returnval = true;
    clearErrors();

    var name = document.forms['myform']["fname"].value;            
    if (name.length==0){

    }

    else 
    if (name.length<5){
        seterror("name", "Please enter a valid name");
        fname.style.border = "2px solid red"
        returnval = false; 
    }
    
    var email = document.forms['myform']["femail"].value;       
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.length==0){

    }
    else if (email.match(pattern)){
        returnval = true; 
    }
    else{
        seterror("email", "Please enter a valid e-mail id");
        returnval = false; 
        femail.style.border = "2px solid red"
    }

    var mobile = document.forms['myform']["fmobile"].value; 
    if (mobile.length==0){

    }
    
    else 
        if (mobile.length != 14){
            seterror("mobile", "Please enter a valid mobile number");
            fmobile.style.border = "2px solid red"
            returnval = false; 
         }

    return returnval;           

}
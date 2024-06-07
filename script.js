function signup_btn_func() {
    document.getElementById('signup-popup').style.display = "flex";
    }

    function cancel_mark(){
        document.getElementById('signup-popup').style.display = "none";
        }


function signup_validation(){
    let email=document.my_my_signup_form.email.value;
    let password1=document.my_my_signup_form.password.value;
    let password2=document.my_my_signup_form.Retype_password.value;

    if (email == " " || email == null){
        alert("email should not be empty");
        return false;
    }else if(password1 == password2){
        return true;
    }else{
        alert("password should be same");
        return false;
    }
}

function order_online_now(){
    alert("your order is placed successfully");
}
function table_booking_system_button(){
    alert("Tables are Reserved Successfully & just be there 15 minutes before")
}
function table_got_selected(){
    alert("Table selected! click on Reserve table below")
}

 


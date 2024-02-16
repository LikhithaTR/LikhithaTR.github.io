var visible = false
function show_or_hide_email(){
    var email = document.getElementById('show_hide_email')
    if (visible){
        console.log("if");
        email.innerHTML = "Click here to see my email";
        visible = false
    } else{
        console.log("else")
        var email_to_show = "<a href='mailto:pandirpy@mail.uc.edu'> pandirpy@mail.uc.edu</a>";
        //"<a href='mailto:pandirpy@mail.uc.edu'> pandirpy@mail.uc.edu</a>"
        email.innerHTML = email_to_show;
        console.log(email);
        visible = true
    }
}

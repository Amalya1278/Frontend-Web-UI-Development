function validateForm(event) {
    /*stanank arjeqy*/
    var emailInput = document.getElementById("emailInput").value;

    /* empty or not*/
    if (emailInput.trim()=="") {
        alert("Place is empty");
        event.preventDefault();
    }
}
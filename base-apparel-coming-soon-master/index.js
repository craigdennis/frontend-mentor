document.querySelector('.arrow-img').addEventListener('click', function() {
    var email = document.querySelector('.email-input').value;

    if (!emailIsValid(email)) {
        document.querySelector(".error-msg").style.display = "block";
        document.querySelector(".error-img").style.display = "block";
    }
    
});


function emailIsValid (email) {
    return /\S+@\S+\.\S+/.test(email)
  }
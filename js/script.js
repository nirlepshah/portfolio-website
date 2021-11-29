function validation() {
    let form = document.getElementById("contact-form");
    let email = document.getElementById("contact-email").value;
    let text = document.getElementById("text");
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    
    if (email.match(pattern)) {
      form.classList.add("valid");
      form.classList.remove("invalid");
      text.innerText = "Your Email Address is Valid.";
      text.style.color = "green";
    } else {
      form.classList.remove("valid");
      form.classList.add("invalid");
      text.innerText = "Please enter Valid Email Address";
      text.style.color = "red";
    }
  }
  let x = document.getElementById('contact-email');
  x.addEventListener('keydown', function(){
      validation()
  })




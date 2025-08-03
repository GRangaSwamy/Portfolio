  AOS.init({
    once: false,
    duration: 1000,
    offset: 120,
  });
  function HireMeClick(){
    document.getElementById("contact-me").scrollIntoView({'behavior': 'smooth'})
  }
  function submitFormClick() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const msg = document.getElementById("message").value.trim();
    if (name.length === 0) {
      alert("Please fill in your Name");
    }
    if(email.indexOf("@")<=5){
      alert("Please Enter Valid email address");
    }
    if(msg.length < 10){
      alert("Please enter valid message");
    }
    const peru = document.getElementById("modal-name");
    const emil = document.getElementById("modal-email");
    const messge = document.getElementById("modal-msg");
    peru.innerHTML = `Name :- ${name}`;
    emil.innerHTML = `Email :- ${email}`;
    messge.innerHTML = `Your Messege :- ${msg}`;
  }  
  function openPomodoro() {
    window.location.href = "https://github.com/GRangaSwamy/Pomodoro";
  }
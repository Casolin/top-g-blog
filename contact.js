let container = document.querySelector(".container");
let username = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let topic = document.getElementById("topic");
let description = document.getElementById("description");
let btn = document.querySelector("button");
let error = document.querySelectorAll("p");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^[0-9+\-\s()]+$/;

btn.addEventListener("click", (e) => {
  error.forEach((err) => {
    err.textContent = "";
  });
  let isValid = true;
  e.preventDefault();
  if (username.value.length < 6) {
    error[0].textContent = "Username is incorrect";
    isValid = false;
  }

  if (!emailRegex.test(email.value)) {
    error[1].textContent = "Email is incorrect";
    isValid = false;
  }

  if (topic.value.length < 10) {
    error[3].textContent = "Enter a valid subject";
    isValid = false;
  }

  if (description.value.length < 30) {
    error[4].textContent = "Write valid message to the Top G";
  }

  const sendEmail = () => {
    let parms = {
      name: username.value,
      email: email.value,
      topic: topic.value,
      description: description.value,
    };
    emailjs.send("service_topg", "template_0zxho3h", parms).then(alert("Email sent successfuly"));
  };

  if (isValid) {
    sendEmail();
  }
});

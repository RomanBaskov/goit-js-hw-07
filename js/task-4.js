const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailInput = form.elements["email"];
  const passwordInput = form.elements["password"];

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!email || !password) {
    alert("All form fields must be filled in");
    return;
  }

  const formData = {
    email: email,
    password: password,
  };
  console.log(formData);
  form.reset();
});

const btn = document.querySelector("button");

btn.style.backgroundColor = " #4E75FF";
btn.style.height = "40px";
btn.style.width = "86px";
btn.style.borderRadius = "8px";
btn.style.color = "#FFFFFF";
btn.style.padding = "8px 16px";
btn.style.marginTop = "8px";

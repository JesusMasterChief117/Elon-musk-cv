const form = document.querySelector("#login-form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const emailError = document.querySelector("#email-error");
const passwordError = document.querySelector("#password-error");
const formStatus = document.querySelector("#form-status");
const passwordToggle = document.querySelector(".password-toggle");

passwordToggle.addEventListener("click", () => {
  const isPassword = password.type === "password";
  password.type = isPassword ? "text" : "password";
  passwordToggle.textContent = isPassword ? "Hide" : "Show";
  passwordToggle.setAttribute("aria-label", `${isPassword ? "Hide" : "Show"} password`);
  passwordToggle.setAttribute("aria-pressed", String(isPassword));
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  emailError.textContent = "";
  passwordError.textContent = "";
  formStatus.textContent = "";
  email.classList.remove("invalid");
  password.classList.remove("invalid");

  let isValid = true;
  if (!email.validity.valid) {
    emailError.textContent = email.value ? "Enter a valid email address." : "Email is required.";
    email.classList.add("invalid");
    isValid = false;
  }

  if (!password.validity.valid) {
    passwordError.textContent = password.value
      ? "Password must be at least 8 characters."
      : "Password is required.";
    password.classList.add("invalid");
    isValid = false;
  }

  if (isValid) {
    formStatus.textContent = "Details look good — connecting you to your workspace.";
  }
});

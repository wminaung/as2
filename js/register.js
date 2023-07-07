const registerFormTag = document.getElementById("register-form");
const usernameInputTag = document.getElementById("username");
const emailInputTag = document.getElementById("email");
const passwordInputTag = document.getElementById("password");

const getUsers = () => localStorage.getItem("users");
const setUser = (users) => localStorage.setItem("users", users);

registerFormTag.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = usernameInputTag.value;
  const email = emailInputTag.value;
  const password = passwordInputTag.value;

  const isValid = username && email && password;

  const newUser = { username, email, password };

  if (!isValid) {
    alert("invalid credential please try again!");
    return;
  }

  const hasUsersArry = getUsers();

  if (!hasUsersArry) {
    localStorage.setItem("users", JSON.stringify([]));
  }

  const users = JSON.parse(getUsers());
  console.log("users", users);

  const isEmailExist = users.some((user) => user.email === newUser.email);

  if (isEmailExist) {
    alert("eamil already exists");
    return;
  }

  users.push(newUser);

  setUser(JSON.stringify(users));

  usernameInputTag.value = "";
  emailInputTag.value = "";
  passwordInputTag.value = "";
  alert("registration successful, please login!");
  window.location.href = "/login.html";
});

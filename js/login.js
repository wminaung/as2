const loginFormTag = document.getElementById("loginForm");
const emailInputTag = document.getElementById("email");
const passwordInputTag = document.getElementById("password");

const getUsers = () => localStorage.getItem("users");

const setLoginUser = (loginUser) =>
  localStorage.setItem("loginUser", loginUser);

loginFormTag.addEventListener("submit", (e) => {
  e.preventDefault();

  const loginUser = {
    email: emailInputTag.value,
    password: passwordInputTag.value,
  };

  if (!getUsers()) {
    alert("please register first");
    window.location.href = "/register.html";
    return;
  }

  const users = JSON.parse(getUsers());

  const hasUser = users.some(
    (user) =>
      user.email === loginUser.email && user.password === loginUser.password
  );

  if (hasUser) {
    setLoginUser(JSON.stringify({ email: loginUser.email }));

    window.location.href = "/";
  } else {
    emailInputTag.value = "";
    passwordInputTag.value = "";
    alert("invalid credential please try again!");
  }
});

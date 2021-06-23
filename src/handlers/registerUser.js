import randomNum from "../views/createRandomNum.js";
import createSignInForm from "../views/createSignInForm.js";

export const registerUser = (e, userName, password) => {
  localStorage.setItem(
    `user${randomNum()}`,
    JSON.stringify({
      userName,
      password,
    })
  );
  createSignInForm();
};

export default registerUser;
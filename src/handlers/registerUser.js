import randomNum from "../views/createRandomNum.js";
import createSignInForm from "../views/createSignInForm.js";

export const registerUser = (userName, password) => {
  localStorage.setItem(
    `user${randomNum()}`,
    JSON.stringify({
      userName,
      passWord: password,
    })
  );
  createSignInForm();
};

export default registerUser;

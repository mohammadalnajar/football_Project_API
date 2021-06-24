import { SIGN_IN_CONTAINER } from "../constants.js";
import { initializeApplication } from "../init/start.js";
import clearDomElement from "../utils/clearDomElement.js";
import createDomElement from "../utils/createDomElement.js";
import getDomElement from "../utils/getDomElement.js";

export const signIn = (e, usernameInput, passwordInput) => {
  const signInContainer = getDomElement(SIGN_IN_CONTAINER);

  let savedUsers = [];
  for (const key in localStorage) {
    if (key.includes("user")) {
      const user = JSON.parse(localStorage[key]);
      savedUsers.push(user);
    }
  }
  if (usernameInput && passwordInput) {
    const foundUser = savedUsers.filter((user) => {
      const { userName, passWord } = user;
      if (userName === usernameInput && passWord === passwordInput) {
        // username + password correct
        console.log("signed in");
        initializeApplication();
        return user;
      } else if (userName === usernameInput && passWord !== passwordInput) {
        // password incorrect

        const passWrong = createDomElement("h3", { className: "passWrong" });
        passWrong.textContent = "Password is incorrect!";
        signInContainer.appendChild(passWrong);
        setTimeout(() => {
          passWrong.remove();
        }, 2000);

        console.log("incorrect pass");
      }
    });

    if (foundUser.length == 0) {
      // user not found
      const noUser = createDomElement("h3", { className: "no-user" });
      noUser.textContent = "This user name is not registered yet!";
      signInContainer.appendChild(noUser);
      setTimeout(() => {
        noUser.remove();
      }, 2000);

      console.log("USERNAME NOT FOUND");
    }
  } else {
    console.log("please fill in username and password");
    //   please fill an username and password
  }
};
export default signIn;

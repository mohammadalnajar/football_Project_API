import { initializeApplication } from "../init/start.js";

export const signIn = (e, usernameInput, passwordInput) => {
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
        console.log("incorrect pass");
      }
    });
    if (foundUser.length == 0) {
      // user not found
      console.log("USERNAME NOT FOUND");
    }
  } else {
    console.log("please fill in username and password");
    //   please fill an username and password
  }
  // console.log(savedUsers);
};
export default signIn;

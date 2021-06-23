import { initializeApplication } from "../init/start.js";

export const signIn = (e, username, password) => {
  //   console.log(userName, password);
  let savedUsers = [];
  for (const key in localStorage) {
    if (key.includes("user")) {
      const user = JSON.parse(localStorage[key]);
      savedUsers.push(user);
    }
  }
  if (username && password) {
    savedUsers.forEach((user) => {
      const { userName, passWord } = user;
      if (userName === username) {
        if (passWord === password) {
          console.log("signed in");
          initializeApplication();
        } else {
          console.log("incorrect password");
        }
      }
    });
  } else {
    console.log("please fill in username and password");
    //   please fill an username and password
  }
  console.log(savedUsers);
};
export default signIn;

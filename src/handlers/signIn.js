import { SIGN_IN_CONTAINER } from '../constants.js';
import { Data } from '../data.js';
import initializeApplication from '../init/initializeApplication.js';

import createDomElement from '../utils/createDomElement.js';
import getDomElement from '../utils/getDomElement.js';

export const signIn = (usernameInput, passwordInput) => {
  const signInContainer = getDomElement(SIGN_IN_CONTAINER);
  let wrongPass = false;
  const savedUsers = [];
  for (const key in localStorage) {
    if (key.includes('user')) {
      const user = JSON.parse(localStorage[key]);
      savedUsers.push(user);
    }
  }
  if (usernameInput && passwordInput) {
    const foundUser = savedUsers.find((user) => {
      const { userName, passWord } = user;
      if (userName === usernameInput && passWord === passwordInput) {
        // username + password correct
        localStorage.setItem(
          'status',
          JSON.stringify({
            signedIn: true,
            name: userName,
          })
        );
        Data.name = userName;
        initializeApplication();
        return user;
      } else if (userName === usernameInput && passWord !== passwordInput) {
        // password incorrect
        wrongPass = true;
        const passWrong = createDomElement('h3', { className: 'passWrong' });
        passWrong.textContent = 'Password is incorrect!';
        signInContainer.appendChild(passWrong);
        setTimeout(() => {
          passWrong.remove();
        }, 2000);
      }
    });

    if (!foundUser && !wrongPass) {
      // user not found
      const noUser = createDomElement('h3', { className: 'no-user' });
      noUser.textContent = 'This user name is not registered yet!';
      signInContainer.appendChild(noUser);
      setTimeout(() => {
        noUser.remove();
      }, 2000);
    }
  } else {
    // no input
    const noInput = createDomElement('h3', { className: 'no-input' });
    noInput.textContent = 'Please fill in username and password!';
    signInContainer.appendChild(noInput);
    setTimeout(() => {
      noInput.remove();
    }, 2000);
  }
};
export default signIn;

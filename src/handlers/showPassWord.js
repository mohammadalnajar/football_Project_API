export const showPassWord = (passWordInput, eye) => {
  if (passWordInput.type === "password") {
    passWordInput.type = "text";
    eye.classList.remove("fa-eye-slash");
    eye.classList.add("fa-eye");
  } else {
    passWordInput.type = "password";
    eye.classList.add("fa-eye-slash");
    eye.classList.remove("fa-eye");
  }
};
export default showPassWord;

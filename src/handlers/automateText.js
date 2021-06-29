export const automateText = (className, first, second) => {
  const typed5 = new Typed(`.${className}`, {
    strings: [`${first}`, `${second}`],
    typeSpeed: 60,
    backSpeed: 30,
    cursorChar: "_",
    shuffle: true,
    backDelay: 3000,
    smartBackspace: false,
    loop: true,
    cursorChar: "|",
  });
};
export default automateText;

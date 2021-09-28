import getDomElement from '../utils/getDomElement.js';

export const showHideHeader = () => {
  const navButtons = getDomElement('.nav-link', 'all');

  navButtons.forEach((btn) => {
    const teamsH = getDomElement('.teams-header');
    const tableH = getDomElement('.table-header');
    const matchesH = getDomElement('.matches-header');
    if (btn.id == 'nav-home-tab' && btn.classList.contains('active')) {
      btn.addEventListener('click', () => {
        const headers = getDomElement('.header', 'all');
        headers.forEach((item) => item.classList.add('hide'));
        teamsH.classList.remove('hide');
      });
    } else if (btn.id == 'nav-profile-tab') {
      btn.addEventListener('click', () => {
        const headers = getDomElement('.header', 'all');
        headers.forEach((item) => item.classList.add('hide'));
        tableH.classList.remove('hide');
      });
    } else {
      btn.addEventListener('click', () => {
        const headers = getDomElement('.header', 'all');
        headers.forEach((item) => item.classList.add('hide'));

        matchesH.classList.remove('hide');
      });
    }
  });
};
export default showHideHeader;

const screen = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

const screenSize = {
  mobileS: `(min-width: ${screen.mobileS})`,
  mobileM: `(min-width: ${screen.mobileM})`,
  mobileL: `(min-width: ${screen.mobileL})`,
  tablet: `(min-width: ${screen.tablet})`,
  laptop: `(min-width: ${screen.laptop})`,
  laptopL: `(min-width: ${screen.laptopL})`,
  desktop: `(min-width: ${screen.desktop})`,
  desktopL: `(min-width: ${screen.desktop})`,
};

export default screenSize;

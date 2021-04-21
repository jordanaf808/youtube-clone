import React, { useContext, useState } from 'react';

// Context for keeping state of Theme
const ThemeContext = React.createContext();
// Context for toggling state of Theme
const ThemeUpdateContext = React.createContext();

// Create a Custom Context hook to pass state of theme to children
export function useTheme() {
  return useContext(ThemeContext);
}
// Custom Context hook to pass toggle function to children.
export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

// We are going to wrap this ThemeProvider around any child components that want access to our the Theme Context, so we can pass that to them.
export function ThemeProvider({ children }) {
  const [expand, setExpand] = useState('75px'); // init expand useState hook
  const [mobileSearch, setMobilesearch] = useState('closed');

  const toggleTheme = () => {
    // setExpand(prevExpand => !prevExpand);
    if (expand === '250px') {
      setExpand('75px');
    } else {
      setExpand('250px');
    }
    console.log('previous offset ' + expand);
  };

  const toggleMobileSearch = () => {
    if (mobileSearch === 'closed') {
      setMobilesearch('open');
    } else {
      setMobilesearch('closed');
    }
    console.log('mobile search is ' + mobileSearch);
  };

  const Values = {
    expand: [expand, setExpand],
    mobile: [mobileSearch, setMobilesearch],
  };

  const Toggles = {
    toggleExpand: toggleTheme,
    toggleMobile: toggleMobileSearch,
  };
  return (
    <ThemeContext.Provider value={Values}>
      <ThemeUpdateContext.Provider value={Toggles}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}

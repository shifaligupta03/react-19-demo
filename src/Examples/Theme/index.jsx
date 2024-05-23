import { createContext, useState, use } from 'react';
import './style.css';

const ThemeContext = createContext();

// eslint-disable-next-line react/prop-types
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const Card = () => {
  const { theme, toggleTheme } = use(ThemeContext);

  return (
    <div
      className={`theme-container ${
        theme === 'light' ? 'light-gray' : 'dark-gray'
      }`}
    >
      <h3
        className={`theme-heading{ ${
          theme === 'light' ? 'light-gray' : 'white-text'
        }`}
      >
        Theme Card
      </h3>
      <p className={theme === 'light' ? 'light-gray' : 'white-text'}>
       Hello!! use() hook
      </p>
      <button
        onClick={toggleTheme}
        className='theme-button white-text'
      >
        {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
      </button>
    </div>
  );
};

const Theme = () => {
  return (
    <ThemeProvider>
      <Card />
    </ThemeProvider>
  );
};

export default Theme
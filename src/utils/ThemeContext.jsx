import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext({
  currentTheme: 'dark', // Mettez le thème sombre par défaut
  changeCurrentTheme: () => {},
});

export default function ThemeProvider({children}) {
  const [theme, setTheme] = useState('dark'); // Mettez le thème sombre par défaut

  const changeCurrentTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    document.documentElement.classList.add('[&_*]:!transition-none');
    document.documentElement.classList.add('dark');
    document.documentElement.style.colorScheme = 'dark';

    const transitionTimeout = setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none');
    }, 1);
    
    return () => clearTimeout(transitionTimeout);
  }, []);

  return <ThemeContext.Provider value={{ currentTheme: theme, changeCurrentTheme }}>{children}</ThemeContext.Provider>;
}

export const useThemeProvider = () => useContext(ThemeContext);

import '../styles/globals.css';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }) {
  // Light/dark mode persistence
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
  }, [theme]);

  return (
    <div className="bg-light dark:bg-dark min-h-screen transition-colors duration-300">
      <Component {...pageProps} theme={theme} setTheme={setTheme} />
    </div>
  );
}
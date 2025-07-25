import '../styles/globals.css';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  // Simple dark mode persistence
  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);
  return <Component {...pageProps} />;
}

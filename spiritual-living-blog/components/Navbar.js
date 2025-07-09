import Link from 'next/link';

export default function Navbar({ theme, setTheme }) {
  return (
    <nav
      className="flex justify-between items-center py-4 px-6 md:px-12 bg-white dark:bg-dark shadow-md sticky top-0 z-50 transition-colors duration-300"
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="text-2xl font-serif font-bold text-primary dark:text-accent">
        <Link href="/">Spiritual Living</Link>
      </div>
      <div className="flex gap-8 text-lg">
        <Link href="/" className="hover:text-primary transition">Home</Link>
        <Link href="/blog" className="hover:text-primary transition">Blog</Link>
        <Link href="/about" className="hover:text-primary transition">About</Link>
        <Link href="/contact" className="hover:text-primary transition">Contact</Link>
        <button
          aria-label="Toggle dark mode"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="ml-4"
        >
          {theme === 'dark' ? '🌞' : '🌙'}
        </button>
      </div>
    </nav>
  );
}
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About({ theme, setTheme }) {
  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <main className="max-w-2xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-serif font-bold mb-6">About This Blog</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          Spiritual Living Blog is dedicated to exploring Christian lifestyle, wisdom, and growth. Every article is rooted in scripture and written to encourage, equip, and inspire you to live boldly for Christ in a modern world.
        </p>
        <p className="mb-2">Contact: <a href="/contact" className="text-primary hover:underline">Get in touch</a></p>
      </main>
      <Footer />
    </>
  );
}
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Spiritual Living Blog</title>
        <meta name="description" content="Explore a lifestyle of faith, wisdom, and peace." />
      </Head>
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
        <header className="max-w-3xl mx-auto flex flex-col items-center mb-14">
          <nav className="flex space-x-6 mb-4">
            <a href="/" className="text-indigo-600 hover:underline font-semibold">Home</a>
            <a href="/blog" className="text-gray-700 hover:text-indigo-600 dark:text-gray-200">Blog</a>
            <a href="/about" className="text-gray-700 hover:text-indigo-600 dark:text-gray-200">About</a>
            <a href="/contact" className="text-gray-700 hover:text-indigo-600 dark:text-gray-200">Contact</a>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-indigo-700 mb-4 text-center">Welcome to Spiritual Living</h1>
          <p className="text-xl text-gray-700 dark:text-gray-200 text-center">
            Explore a lifestyle of faith, wisdom, and peace through engaging, scripturally-rooted content.
          </p>
        </header>

        <section className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-indigo-700 mb-3">Featured Post</h2>
          <a href="#" className="block text-xl font-semibold text-purple-800 hover:underline mb-2">
            Living Life God’s Way: A Lifestyle Worth Pursuing
          </a>
          <time className="block text-gray-500 mb-2">2025-07-01</time>
          <p className="text-gray-700 dark:text-gray-200 mb-4">
            A poetic, scripturally rooted exploration of Christian lifestyle through the lens of the NKJV Bible.
          </p>
          <a href="#" className="text-indigo-600 font-medium hover:underline">Read More &rarr;</a>
        </section>

        <section className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-indigo-700 mb-3">Latest Posts</h2>
          {/* Example post list */}
          <ul className="space-y-4">
            <li className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <a href="#" className="text-lg font-semibold text-indigo-600 hover:underline">Sample Blog Post Title</a>
              <p className="text-gray-600 dark:text-gray-300 mt-1">Short excerpt from the post goes here...</p>
            </li>
            {/* Add more posts here */}
          </ul>
        </section>

        <footer className="max-w-3xl mx-auto mt-16 py-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <div className="mb-4">
            <strong className="block mb-1">Subscribe to our Newsletter</strong>
            <form className="flex justify-center">
              <input
                type="email"
                placeholder="Your email address"
                className="rounded-l px-3 py-2 border border-gray-300 dark:border-gray-600 focus:outline-none"
              />
              <button type="submit" className="rounded-r px-4 py-2 bg-indigo-600 text-white font-semibold hover:bg-indigo-700">
                Subscribe
              </button>
            </form>
          </div>
          <p className="text-sm text-gray-500 mt-6">
            "The steps of a good man are ordered by the Lord, and He delights in his way." – Psalm 37:23 (NKJV)
          </p>
          <p className="text-xs text-gray-400 mt-2">© 2025 Spiritual Living Blog. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}

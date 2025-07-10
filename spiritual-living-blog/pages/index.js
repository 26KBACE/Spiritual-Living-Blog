import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Spiritual Living Blog</title>
        <meta name="description" content="Explore a lifestyle of faith, wisdom, and peace." />
      </Head>
      <main className="min-h-screen flex flex-col bg-gradient-to-tr from-blue-100 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
        <header className="max-w-3xl mx-auto flex flex-col items-center mb-10 pt-12">
          <nav className="flex flex-wrap gap-6 mb-6">
            <Link href="/" className="text-indigo-700 hover:underline font-semibold transition-colors duration-200">Home</Link>
            <Link href="/blog" className="text-gray-700 hover:text-indigo-700 dark:text-gray-200 transition-colors duration-200">Blog</Link>
            <Link href="/about" className="text-gray-700 hover:text-indigo-700 dark:text-gray-200 transition-colors duration-200">About</Link>
            <Link href="/contact" className="text-gray-700 hover:text-indigo-700 dark:text-gray-200 transition-colors duration-200">Contact</Link>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-indigo-700 mb-3 text-center drop-shadow">Welcome to Spiritual Living</h1>
          <p className="text-xl text-gray-700 dark:text-gray-200 text-center max-w-2xl">
            Explore a lifestyle of faith, wisdom, and peace through engaging, scripturally-rooted content.
          </p>
        </header>

        <section className="max-w-2xl mx-auto bg-white/90 dark:bg-gray-800/80 rounded-2xl shadow-lg p-8 mb-12 border border-gray-100 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-indigo-700 mb-3">Featured Post</h2>
          <Link href="/posts/living-life-gods-way" className="block text-xl font-semibold text-purple-800 hover:underline mb-2">
            Living Life God’s Way: A Lifestyle Worth Pursuing
          </Link>
          <time className="block text-gray-500 mb-2">2025-07-01</time>
          <p className="text-gray-700 dark:text-gray-200 mb-4">
            A poetic, scripturally rooted exploration of Christian lifestyle through the lens of the NKJV Bible.
          </p>
          <Link href="/posts/living-life-gods-way" className="inline-block text-indigo-600 font-medium hover:underline">Read More &rarr;</Link>
        </section>

        <section className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-indigo-700 mb-3">Latest Posts</h2>
          <ul className="space-y-6">
            <li className="bg-white/90 dark:bg-gray-800/80 p-6 rounded-lg shadow border border-gray-100 dark:border-gray-700">
              <Link href="/posts/sample-post" className="text-lg font-semibold text-indigo-600 hover:underline">Sample Blog Post Title</Link>
              <p className="text-gray-600 dark:text-gray-300 mt-1">Short excerpt from the post goes here...</p>
              <Link href="/posts/sample-post" className="text-indigo-600 text-sm hover:underline mt-2 inline-block">Read More &rarr;</Link>
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
  )
}

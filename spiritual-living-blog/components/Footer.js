export default function Footer() {
  return (
    <footer className="w-full py-6 text-center bg-secondary dark:bg-dark text-gray-600 dark:text-gray-300 text-sm mt-12">
      <p className="mb-2">
        "The steps of a good man are ordered by the Lord, and He delights in his way." – Psalm 37:23 (NKJV)
      </p>
      <p>
        &copy; {new Date().getFullYear()} Spiritual Living Blog. All rights reserved.
      </p>
    </footer>
  );
}
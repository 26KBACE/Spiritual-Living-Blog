import Link from 'next/link';

export default function BlogCard({ post }) {
  return (
    <div className="bg-white dark:bg-dark rounded-md shadow-lg hover:shadow-xl transition-shadow duration-200 overflow-hidden group">
      <Link href={`/blog/${post.slug}`}>
        <div className="p-6 cursor-pointer">
          <h2 className="text-2xl font-serif font-bold mb-2 group-hover:text-primary transition">{post.title}</h2>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">{post.date}</p>
          <p className="text-base text-gray-700 dark:text-gray-300 mb-4">{post.excerpt}</p>
          <span className="text-primary dark:text-accent font-semibold group-hover:underline">Read More →</span>
        </div>
      </Link>
    </div>
  );
}
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import BlogCard from '../../components/BlogCard';
import { getSortedPostsData } from '../../lib/posts';

export async function getStaticProps() {
  const allPosts = getSortedPostsData();
  return { props: { allPosts } };
}

export default function Blog({ allPosts, theme, setTheme }) {
  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-serif font-bold mb-8 text-primary dark:text-accent">All Blog Posts</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {allPosts.map(post => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
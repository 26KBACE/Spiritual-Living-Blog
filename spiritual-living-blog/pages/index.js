import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogCard from '../components/BlogCard';
import { getSortedPostsData } from '../lib/posts';
import NewsletterForm from '../components/NewsletterForm';

export async function getStaticProps() {
  const allPosts = getSortedPostsData();
  return { props: { allPosts } };
}

export default function Home({ allPosts, theme, setTheme }) {
  const featured = allPosts[0];
  const others = allPosts.slice(1);

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <section className="mb-12">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-primary dark:text-accent animate-fade-in">
            Welcome to Spiritual Living
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-4">
            Explore a lifestyle of faith, wisdom, and peace through engaging, scripturally-rooted content.
          </p>
        </section>
        {featured && (
          <section className="mb-14">
            <h2 className="text-2xl font-bold mb-4">Featured Post</h2>
            <BlogCard post={featured} />
          </section>
        )}
        <section>
          <h2 className="text-xl font-bold mb-4">Latest Posts</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {others.map(post => <BlogCard key={post.slug} post={post} />)}
          </div>
        </section>
        <NewsletterForm />
      </main>
      <Footer />
    </>
  );
}
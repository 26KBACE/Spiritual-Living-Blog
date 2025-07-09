import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { getSortedPostsData, getPostData } from '../../lib/posts';
import Head from 'next/head';
import ShareButtons from '../../components/ShareButtons';
import CommentSection from '../../components/CommentSection';
import NewsletterForm from '../../components/NewsletterForm';
import { remark } from 'remark';
import html from 'remark-html';

export async function getStaticPaths() {
  const posts = getSortedPostsData();
  const paths = posts.map(post => ({ params: { slug: post.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = getPostData(params.slug);
  const processedContent = await remark().use(html).process(post.content);
  const contentHtml = processedContent.toString();
  return { props: { post: { ...post, contentHtml } } };
}

export default function PostPage({ post, theme, setTheme }) {
  const url = `https://your-domain.com/blog/${post.slug}`;

  return (
    <>
      <Head>
        <title>{post.title} | Spiritual Living Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={url} />
        {/* Add more SEO/social tags as needed */}
      </Head>
      <Navbar theme={theme} setTheme={setTheme} />
      <article className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-serif font-bold mb-2">{post.title}</h1>
        <p className="text-sm text-gray-500 mb-6">{post.date}</p>
        <div className="prose dark:prose-invert lg:prose-xl" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        <ShareButtons url={url} title={post.title} />
        <NewsletterForm />
        <CommentSection />
      </article>
      <Footer />
    </>
  );
}
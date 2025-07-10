import Layout from "../components/Layout";
import VerseSection from "../components/VerseSection";
import VerseOfTheDay from "../components/VerseOfTheDay";
import PostCard from "../components/PostCard";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function getStaticProps() {
  const postsDir = path.join(process.cwd(), "posts");
  const files = fs.readdirSync(postsDir);
  const posts = files
    .filter(f => f.endsWith(".md"))
    .map(filename => {
      const slug = filename.replace(/\.md$/, "");
      const fileContent = fs.readFileSync(path.join(postsDir, filename), "utf-8");
      const { data } = matter(fileContent);
      return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  return { props: { posts } };
}

export default function Home({ posts }) {
  return (
    <Layout>
      <div className="w-full flex flex-col items-center">
        <h1 className="font-serif text-4xl md:text-5xl text-center mt-10 mb-2">
          Spiritual Living Blog
        </h1>
        <div className="text-xl mb-6 text-center text-spiritualBlue-dark">
          Insights for holy, authentic, abundant living.
        </div>
        <VerseSection
          verse="I have come that they may have life, and that they may have it more abundantly."
          reference="John 10:10 (NKJV)"
        />
        <VerseOfTheDay />
        <div className="my-8 max-w-3xl w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <PostCard post={post} key={post.slug} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

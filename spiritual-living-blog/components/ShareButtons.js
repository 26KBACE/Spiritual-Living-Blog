export default function ShareButtons({ url, title }) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  return (
    <div className="flex gap-4 mt-6 mb-4">
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition"
        aria-label="Share on Twitter"
      >
        <span>🐦 Twitter</span>
      </a>
      <a
        href={`https://facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition"
        aria-label="Share on Facebook"
      >
        <span>📘 Facebook</span>
      </a>
      <a
        href={`mailto:?subject=${encodedTitle}&body=${encodedUrl}`}
        className="hover:scale-110 transition"
        aria-label="Share by Email"
      >
        <span>✉️ Email</span>
      </a>
    </div>
  );
}
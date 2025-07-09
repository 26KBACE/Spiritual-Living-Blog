import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-primary/10 dark:bg-accent/10 rounded-lg p-6 mt-12 max-w-xl mx-auto flex flex-col items-center">
      <h3 className="text-xl font-bold mb-2 text-primary dark:text-accent">Subscribe to our Newsletter</h3>
      <p className="mb-4 text-gray-700 dark:text-gray-300 text-center">Get the latest posts and encouragement in your inbox!</p>
      <div className="flex w-full max-w-sm">
        <input
          type="email"
          placeholder="Your email address"
          aria-label="Email address"
          required
          className="px-4 py-2 rounded-l bg-white dark:bg-dark border border-primary w-full focus:outline-none"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button
          className="bg-primary hover:bg-accent text-white px-6 py-2 rounded-r font-semibold transition"
          type="submit"
        >
          Subscribe
        </button>
      </div>
      {submitted && <p className="text-green-600 mt-2">Thank you for subscribing! (Demo only)</p>}
    </form>
  );
}
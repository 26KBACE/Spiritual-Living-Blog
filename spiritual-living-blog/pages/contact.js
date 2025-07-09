import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function Contact({ theme, setTheme }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <main className="max-w-xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-serif font-bold mb-6">Contact</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-secondary dark:bg-dark rounded p-6 shadow">
          <input
            type="text"
            placeholder="Your name"
            className="px-4 py-2 rounded border"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Your email"
            className="px-4 py-2 rounded border"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            required
          />
          <textarea
            placeholder="Message"
            rows={5}
            className="px-4 py-2 rounded border"
            value={form.message}
            onChange={e => setForm({ ...form, message: e.target.value })}
            required
          />
          <button type="submit" className="bg-primary hover:bg-accent text-white px-6 py-2 rounded transition">Send</button>
          {submitted && <p className="text-green-600 text-sm">Thank you for reaching out! (Demo only)</p>}
        </form>
      </main>
      <Footer />
    </>
  );
}
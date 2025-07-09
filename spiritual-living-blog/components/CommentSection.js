import { useState } from 'react';

export default function CommentSection() {
  const [comments, setComments] = useState([
    { name: "Jane", text: "Beautiful and inspiring post!" },
  ]);
  const [form, setForm] = useState({ name: '', text: '' });

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.text) return;
    setComments([{ name: form.name, text: form.text }, ...comments]);
    setForm({ name: '', text: '' });
  };

  return (
    <section className="mt-12 max-w-2xl mx-auto">
      <h4 className="text-lg font-bold mb-2">Comments</h4>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-6">
        <input
          type="text"
          placeholder="Name"
          className="px-3 py-2 rounded border"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          required
        />
        <textarea
          placeholder="Write a comment..."
          className="px-3 py-2 rounded border"
          rows={3}
          value={form.text}
          onChange={e => setForm({ ...form, text: e.target.value })}
          required
        />
        <button type="submit" className="self-end bg-primary hover:bg-accent text-white rounded px-6 py-2 transition">Post</button>
      </form>
      <ul className="space-y-4">
        {comments.map((c, i) => (
          <li key={i} className="bg-secondary dark:bg-dark rounded p-4 shadow-sm">
            <span className="font-semibold">{c.name}</span>
            <p className="text-gray-700 dark:text-gray-200">{c.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! I will get back to you shortly.');
  };

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-black to-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Let’s collaborate</h2>
          <p className="mt-4 text-white/80">Have a project in mind? Send a note and I’ll reply within 1-2 days.</p>
        </div>

        <form onSubmit={onSubmit} className="mt-10 grid grid-cols-1 gap-4 max-w-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Name" required />
            <input className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Email" type="email" required />
          </div>
          <input className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Subject" />
          <textarea rows="5" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Message" required />
          <button type="submit" className="inline-flex items-center gap-2 justify-center rounded-lg bg-white text-black px-5 py-3 text-sm font-medium hover:bg-white/90 transition-colors">
            <Send className="h-4 w-4" /> Send message
          </button>
          {status && (
            <p className="text-sm text-emerald-400 flex items-center gap-2"><Mail className="h-4 w-4" /> {status}</p>
          )}
        </form>

        <p className="mt-10 text-white/60 text-sm">Prefer email? Reach me at <a className="underline decoration-white/30 hover:decoration-white" href="mailto:hello@example.com">hello@example.com</a></p>
      </div>
    </section>
  );
}

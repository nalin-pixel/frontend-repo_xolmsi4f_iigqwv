export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-white/60">© {new Date().getFullYear()} Creative Lens. All rights reserved.</p>
        <div className="text-xs text-white/40">
          Built with a modern, minimalist aesthetic.
        </div>
      </div>
    </footer>
  );
}

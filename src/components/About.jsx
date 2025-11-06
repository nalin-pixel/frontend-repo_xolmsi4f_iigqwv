export default function About() {
  return (
    <section id="about" className="relative py-24 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">About</h2>
            <p className="mt-6 text-white/80 leading-relaxed">
              I’m a photographer and creative technologist focused on minimalist aesthetics, tactile light, and interactive media. My work spans editorial portraits, product campaigns, and immersive web visuals.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="rounded-xl border border-white/10 p-5">
                <p className="text-sm text-white/60">Specialties</p>
                <p className="mt-2 text-white">Portraits, Product, Architecture</p>
              </div>
              <div className="rounded-xl border border-white/10 p-5">
                <p className="text-sm text-white/60">Tools</p>
                <p className="mt-2 text-white">Canon R5, Lightroom, Unreal, Spline</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1516055880182-5fef6a9a19f7?q=80&w=1600&auto=format&fit=crop"
                alt="Minimal studio setup with camera and light"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

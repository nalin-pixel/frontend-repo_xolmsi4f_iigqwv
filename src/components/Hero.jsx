import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-tight">
            Capturing stories through a creative, modern lens
          </h1>
          <p className="mt-6 text-white/80 text-lg">
            Photographer and creative technologist blending visuals with interactive experiences.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-white text-black px-5 py-3 text-sm font-medium hover:bg-white/90 transition-colors">
              Work with me
            </a>
            <a href="#about" className="inline-flex items-center justify-center rounded-md border border-white/20 text-white px-5 py-3 text-sm font-medium hover:bg-white/10 transition-colors">
              Learn more
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}

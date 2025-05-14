import { AnimatedPhotoElements } from './AnimatedPhotoElements';

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/271667/pexels-photo-271667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }}
    >
      {/* Orange overlay using Tailwind’s orange-500 */}
      <div className="absolute inset-0 bg-orange-500/60 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 text-white">
        <div>
          <h2 className="text-4xl font-serif font-semibold mb-6">About NAKSHEWALE</h2>

          <p className="text-lg mb-4 leading-relaxed">
            Established in 2015, NAKSHEWALE is a creative and reliable architectural firm delivering
            timeless design solutions for over decade.
          </p>

          <p className="mb-4 leading-relaxed">
            With 150+ successful projects across residential, commercial, and public sectors, our
            work blends aesthetics, functionality, and innovation.
          </p>

          <p className="mb-6 leading-relaxed">
            We value collaboration, attention to detail, and sustainability in every step of our
            process — turning your vision into inspiring spaces.
          </p>

          <a
            href="#contact"
            className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white rounded-full py-6 px-8 text-center block sm:inline-block transition-colors"
          >
            Get in touch
          </a>
        </div>

        <div className="relative">
          <AnimatedPhotoElements />

          {/* Floating card */}
          <div className="absolute z-20 -bottom-4 left-4 bg-white text-orange-500 px-5 py-4 rounded-xl shadow-lg">
            <div className="text-4xl font-serif font-bold">150+</div>
            <div className="text-sm">Projects Delivered</div>
          </div>
        </div>
      </div>
    </section>
  );
}

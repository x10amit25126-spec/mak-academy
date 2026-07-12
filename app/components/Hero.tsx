export default function Hero() {
  return (
    <section id="home" className="bg-navy text-white py-24 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Health, Growth & <span className="text-gold">Success</span>
      </h1>
      <p className="text-emerald-light max-w-xl mx-auto mb-8">
        Naturopathy, Yoga aur Wellness ke saath apni life transform karein.
      </p>
      <a
        href="#contact"
        className="bg-gold text-navy font-semibold px-6 py-3 rounded-full hover:bg-gold-light transition"
      >
        Get Started
      </a>
    </section>
  );
}
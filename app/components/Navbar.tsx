export default function Navbar() {
  return (
    <nav className="bg-navy text-white px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <span className="text-gold font-bold text-xl">MAK Academy</span>
      <div className="flex gap-6 text-sm">
        <a href="#home" className="hover:text-gold">Home</a>
        <a href="#services" className="hover:text-gold">Services</a>
        <a href="#about" className="hover:text-gold">About</a>
        <a href="#programs" className="hover:text-gold">Programs</a>
        <a href="#contact" className="hover:text-gold">Contact</a>
      </div>
    </nav>
  );
}
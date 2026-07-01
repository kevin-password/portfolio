export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-4 sticky top-0 z-50 shadow-md">
      <div className="max-w-4xl mx-auto px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Tumusiime Kevin</h1>
        <nav className="flex gap-6 text-sm">
          <a href="#education" className="hover:text-blue-200 transition">Education</a>
          <a href="#experience" className="hover:text-blue-200 transition">Experience</a>
          <a href="#skills" className="hover:text-blue-200 transition">Skills</a>
          <a href="#contact" className="hover:text-blue-200 transition">Contact</a>
        </nav>
      </div>
    </header>
  );
}

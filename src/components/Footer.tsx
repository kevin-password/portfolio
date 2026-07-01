export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center">
          <p className="text-gray-400 mb-2">
            © {currentYear} Tumusiime Kevin. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Built with Next.js | Deployed on GitHub Pages
          </p>
          <div className="mt-4 flex justify-center gap-6">
            <a href="https://github.com/kevin-password" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

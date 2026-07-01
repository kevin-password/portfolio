export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h3 className="text-4xl font-bold text-gray-900 mb-12 text-center">Get In Touch</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm text-center border-t-4 border-blue-700">
            <h4 className="text-2xl font-semibold text-gray-900 mb-3">📞 Phone</h4>
            <a href="tel:+256785365538" className="text-blue-700 text-lg font-semibold hover:underline">
              +256 785 365 538
            </a>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm text-center border-t-4 border-blue-700">
            <h4 className="text-2xl font-semibold text-gray-900 mb-3">📧 Email</h4>
            <a href="mailto:tumusiimekevin3@gmail.com" className="text-blue-700 text-lg font-semibold hover:underline">
              tumusiimekevin3@gmail.com
            </a>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm text-center border-t-4 border-blue-700">
            <h4 className="text-2xl font-semibold text-gray-900 mb-3">📍 Location</h4>
            <p className="text-gray-700 text-lg font-semibold">Kabale, Uganda</p>
          </div>
        </div>
      </div>
    </section>
  );
}

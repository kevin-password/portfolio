export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Tumusiime Kevin</h2>
          <p className="text-2xl font-semibold text-blue-700 mb-4">
            Bachelor of Medicine & Bachelor of Surgery (MBChB) Student
          </p>
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            Medical Research | Student Leadership | Community Health | Healthcare Innovation
          </p>
          <div className="flex flex-wrap gap-6 text-gray-700">
            <a href="tel:+256785365538" className="flex items-center gap-2 hover:text-blue-700">
              <span>📞</span> +256 785 365 538
            </a>
            <a href="mailto:tumusiimekevin3@gmail.com" className="flex items-center gap-2 hover:text-blue-700">
              <span>📧</span> tumusiimekevin3@gmail.com
            </a>
            <div className="flex items-center gap-2">
              <span>📍</span> Kabale, Uganda
            </div>
          </div>
        </div>
        <div className="bg-blue-50 border-l-4 border-blue-700 p-6 rounded">
          <p className="text-gray-800 leading-relaxed">
            Dedicated Bachelor of Medicine and Bachelor of Surgery (MBChB) student at Kabale University
            with experience in medical research, student leadership, healthcare innovation, and community
            health engagement. Recognized for analytical thinking, leadership, communication, and a commitment
            to lifelong learning and professional excellence.
          </p>
        </div>
      </div>
    </section>
  );
}

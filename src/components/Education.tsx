export default function Education() {
  const education = [
    {
      degree: 'Bachelor of Medicine and Bachelor of Surgery (MBChB)',
      institution: 'Kabale University, Uganda',
      period: 'Aug 2024 – Present',
      details: [
        'Focus on clinical medicine, surgery, public health, and medical education',
        'Active participant in medical research initiatives',
        'Leadership roles in student organizations',
      ],
    },
    {
      degree: 'Uganda Advanced Certificate of Education (UACE)',
      institution: 'Standard College Ntungamo',
      period: '2022 – 2023',
    },
    {
      degree: 'Uganda Certificate of Education (UCE)',
      institution: 'Kitabi Seminary',
      period: '2017 – 2020',
    },
  ];

  return (
    <section id="education" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h3 className="text-4xl font-bold text-gray-900 mb-12">Education</h3>
        <div className="space-y-8">
          {education.map((item, idx) => (
            <div key={idx} className="border-l-4 border-blue-700 pl-6 pb-8">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-2xl font-semibold text-gray-900">{item.degree}</h4>
                <span className="text-blue-700 font-semibold">{item.period}</span>
              </div>
              <p className="text-lg text-gray-700 mb-3">{item.institution}</p>
              {item.details && (
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {item.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <h3 className="text-3xl font-bold text-gray-900 mt-16 mb-8">Fellowships & Awards</h3>
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-lg border border-blue-200">
          <div className="mb-4">
            <h4 className="text-2xl font-semibold text-gray-900 mb-2">Millennium Fellow, Class of 2025</h4>
            <p className="text-blue-700 font-semibold mb-3">Aug 2025 – Dec 2025</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Selected into the Millennium Fellowship, a global leadership development program convened by the United Nations Academic Impact (UNAI)</li>
              <li>Led the Child Education Improvement Initiative focused on improving educational opportunities for disadvantaged children</li>
              <li>Organized mentorship programs, literacy initiatives, and educational competitions</li>
              <li>Advanced Sustainable Development Goal 4 (Quality Education) through student-led action</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

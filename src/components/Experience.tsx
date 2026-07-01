export default function Experience() {
  const experience = [
    {
      title: 'Vice Chairperson (Vice President)',
      organization: 'Kabale University Surgical Society (KUSS)',
      period: 'Aug 2025 – Present',
      achievements: [
        'Coordinate society committees and support implementation of academic, mentorship, and professional development activities',
        'Assist in strategic planning, member engagement, and organizational governance',
        'Foster collaboration with healthcare professionals, academic institutions, and partner organizations',
        'Promote student participation in research, surgery, and leadership initiatives',
      ],
    },
    {
      title: 'Chairperson for Mentorship and Advocacy',
      organization: 'Kabale University Surgical Society (KUSS)',
      period: 'Aug 2024 – Jul 2025',
      achievements: [
        'Led mentorship and advocacy initiatives supporting medical students\' academic and professional development',
        'Organized webinars, networking opportunities, and career guidance activities',
        'Established partnerships with healthcare stakeholders and student organizations',
      ],
    },
    {
      title: 'Research Assistant',
      organization: 'Faculty of Medicine, Kabale University',
      period: 'Jan 2025 – Present',
      achievements: [
        'Conduct literature reviews and evidence synthesis',
        'Participate in proposal development, protocol writing, and study planning',
        'Assist in questionnaire design, participant engagement, and data collection',
        'Support data management, analysis, and preparation of technical reports',
        'Ensure adherence to ethical and institutional research standards',
      ],
    },
    {
      title: 'Community Health Volunteer',
      organization: 'Chaperone International - Katate Health Centre IV, Kanungu District',
      period: 'Jan 2025 – Feb 2025',
      achievements: [
        'Supported community outreach activities focused on health education and disease prevention',
        'Participated in awareness campaigns addressing HIV/AIDS, malaria, hypertension, and diabetes',
        'Assisted healthcare teams during medical outreaches, surgical camps, and school health programs',
        'Promoted preventive healthcare practices within underserved communities',
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h3 className="text-4xl font-bold text-gray-900 mb-12">Experience & Leadership</h3>
        <div className="space-y-8">
          {experience.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-blue-700">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-2xl font-semibold text-gray-900">{item.title}</h4>
                  <p className="text-lg text-blue-700 font-semibold">{item.organization}</p>
                </div>
                <span className="text-gray-600 font-semibold whitespace-nowrap ml-4">{item.period}</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
                {item.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Skills() {
  const skillCategories = [
    {
      category: 'Research & Academic',
      skills: ['Research Methodology', 'Literature Search', 'Academic Writing', 'Data Analysis', 'Protocol Development', 'Ethical Research Standards'],
    },
    {
      category: 'Technical',
      skills: ['Python Programming', 'R Programming', 'Microsoft Office Suite', 'LibreOffice', 'LaTeX & Overleaf', 'Ubuntu Linux', 'Windows OS', 'Digital Collaboration Tools'],
    },
    {
      category: 'Professional',
      skills: ['Leadership', 'Team Coordination', 'Strategic Planning', 'Community Engagement', 'Communication', 'Data Management', 'Project Coordination'],
    },
    {
      category: 'Languages',
      skills: ['English (Professional Working)', 'Runyankore-Rukiga (Native)', 'French (Elementary)', 'Italian (Elementary)'],
    },
  ];

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h3 className="text-4xl font-bold text-gray-900 mb-12">Skills & Competencies</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">{cat.category}</h4>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

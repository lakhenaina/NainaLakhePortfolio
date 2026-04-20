import { FiBookOpen, FiDownload } from 'react-icons/fi'

function ResumeSection() {
  const education = [
    {
      id: 1,
      title: 'Samriddhi Collee, Tribhuvan University',

      period: '2022 – Ongoing',
      description:
        'Bachelor in Computer Application (BCA)',
    },
    {
      id: 2,
      title: 'Khwopa Higher Secondary School',
      
      period: '2020 – 2022',
      description:
        '+2 Management',
    },
  ]

  const experience = [
    {
      id: 1,
      title: 'React Projects (Self‑Learning)',
      company: 'Personal Projects',
      period: '2024 – Present',
      description:
        'Built practical React applications including a Task Management App and Personal Finance Tracker to strengthen frontend skills.',
    },
    {
      id: 2,
      title: 'Frontend Practice',
      company: 'Self‑Study',
      period: 'Ongoing',
      description:
        'Focused on HTML, CSS, JavaScript, React, and UI design principles through online courses and tutorials.',
    },
  ]

  return (
    <section className="relative text-slate-300 pb-10 ">
      {/* Education */}
      <div className="mb-10 mt-10  ">
        <SectionHeader icon={<FiBookOpen />} title="Education" />

        <div className="mt-4 pl-4 ">
          <div className="space-y-6 px-10 ">
            {education.map((item, index) => (
              <TimelineItem
                key={item.id}
                isLast={index === education.length - 1}
                title={item.title}
                subtitle={item.institution}
                period={item.period}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Experience */}
      <div>
        <SectionHeader icon={<FiBookOpen />} title="Experience" />

        <div className="mt-4 pl-4">
          <div className="space-y-6 px-10">
            {experience.map((item, index) => (
              <TimelineItem
                key={item.id}
                isLast={index === experience.length - 1}
                title={item.title}
                subtitle={item.company}
                period={item.period}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Download CV button */}
      <div className="mt-8 flex justify-end">
        <a
          href="src/assets/nainalakhe.resume.pdf"
          className="flex items-center gap-2 rounded-xl bg-[#15151f] px-5 py-3 text-sl font-semibold text-yellow-600 shadow-[0_0_25px_rgba(0,0,0,0.8)] transition hover:bg-[#1c1c27] "
        >
          <FiDownload />
          <span>Download CV</span>
        </a>
      </div>
    </section>
  )
}

function SectionHeader({ icon, title }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#15151f] shadow-[0_0_20px_rgba(0,0,0,0.7)]">
        <span className="text-2xl text-yellow-600">{icon}</span>
      </div>
      <h2 className="text-2xl font-semibold text-slate-300">{title}</h2>
    </div>
  )
}

function TimelineItem({ title, subtitle, period, description, isLast }) {
  return (
    <div className="relative flex gap-4">
      {/* Dot + connecting line (only inside the item) */}
      <div className="mt-1 flex flex-col items-center">
        <div className="h-3 w-3 rounded-full bg-yellow-600 shadow-[0_0_10px_rgba(250,204,21,0.6)]" />
        {!isLast && (
          <div className="mt-1 h-full w-px bg-[#262638]" />
        )}
      </div>

      <div>
        <h3 className="text-xm font-semibold text-slate-200 pl-5">
          {title}
        </h3>
        <p className="text-xs font-medium text-slate-300 pl-5">
          {subtitle}
        </p>
        <p className="mt-1 text-sl font-semibold text-yellow-600 pl-5">
          {period}
        </p>
        <p className="mt-1 text-xs text-slate-300 leading-relaxed pl-5">
          {description}
        </p>
      </div>
    </div>
  )
}

export default ResumeSection
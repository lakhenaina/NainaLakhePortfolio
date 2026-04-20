import { FiSmartphone, FiCode, FiServer } from "react-icons/fi";
import { FaReact } from 'react-icons/fa';
import { SiJavascript, SiMysql, SiTailwindcss} from 'react-icons/si';
import { useRef, useState, useEffect } from 'react';

function AboutSection() {
  return (
    <section className="text-slate-200">
      {/* Intro text */}
      <div className="mb-8">
        <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
          I&apos;m an aspiring frontend developer focused on building modern,
          user‑focused web applications with React. I enjoy turning ideas into
          clean, responsive interfaces and continuously improving my skills
          through real projects.
        </p>

        <p className="mt-4 text-base font-bold text-yellow-600 sm:text-lg">
          I&apos;m actively looking for opportunities to apply my skills, learn
          from real‑world projects, and grow as a developer.
        </p>
      </div>

      {/* What I'm Doing */}
      <div className="mb-10">
        <h3 className="mb-4 text-xl font-semibold text-slate-50 sm:text-2xl">
          What I&apos;m Doing
        </h3>

        <div className="grid gap-4 sm:grid-cols-2">
          <ServiceCard
            icon={<FiSmartphone className="text-4xl text-yellow-600" />}
            title="Mobile-Friendly Web Apps"
            description="Building responsive interfaces that look great on phones, tablets, and desktops."
          />
          <ServiceCard
            icon={<FiCode className="text-4xl text-yellow-600" />}
            title="Web Development"
            description="Creating modern React applications with clean, reusable components."
          />
          <ServiceCard
            icon={<FiServer className="text-4xl text-yellow-600" />}
            title="Frontend Integration"
            description="Connecting frontends with APIs and handling data in a user‑friendly way."
          />
        </div>
      </div>

      {/* Skills */}
      <div className="mb-6">
        <h3 className="mb-4 text-xl font-semibold text-slate-50 sm:text-2xl">
          Skills
        </h3>

        <SkillsCarousel />
      </div>
    </section>
  );
}

function SkillsCarousel() {
  const skills = [
    { name: 'React', icon: <FaReact className="text-4xl text-blue-400" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-4xl text-yellow-600" /> },
    { name: 'MySQL', icon: <SiMysql className="text-4xl text-orange-400" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-4xl text-teal-400" /> },
   
  ];

  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
        setScrollProgress(progress);
      }
    };
    const ref = scrollRef.current;
    ref?.addEventListener('scroll', handleScroll);
    return () => ref?.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 touch-pan-x md:flex-wrap md:justify-start md:overflow-visible "
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-24 h-24 md:w-28 md:h-28 flex flex-col items-center justify-center rounded-xl bg-[#1c1c27] transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(250,204,21,0.5)] hover:border hover:border-yellow-600"
          >
            {skill.icon}
            <span className="mt-2 text-sm font-medium text-center">{skill.name}</span>
          </div>
        ))}
      </div>
      <div className="mt-2 h-1 bg-[#262638] rounded-full overflow-hidden md:hidden">
        <div
          className="h-full bg-yellow-600 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="flex gap-3 rounded-2xl bg-zinc-800 p-4 shadow-[0_0_25px_rgba(0,0,0,0.6)]">
      <div className="mt-2 flex h-12 w-12 items-center justify-center text-yellow-600">
        {icon}
      </div>
      <div>
        <h4 className="mt-1 text-sm font-semibold text-slate-50 sm:text-base">
          {title}
        </h4>
        <p className="mt-1 text-xs leading-relaxed text-slate-300 sm:text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}

function SkillCard({ icon }) {
  return (
    <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-zinc-800 shadow-[0_0_25px_rgba(0,0,0,0.6)] sm:h-28 sm:w-28">
      {icon}
    </div>
  );
}

export default AboutSection;
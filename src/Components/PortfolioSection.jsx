import { motion } from 'framer-motion'
import { FiEye, FiGithub } from 'react-icons/fi'
import taskImg from '../assets/task-manager.png'
import financeImg from '../assets/finance-tracker.png'
import cakeImg from '../assets/cakebliss.png'
import petImg from '../assets/petorder.png'
import portfolioImg from '../assets/portfolio.png'

function PortfolioSection() {
  const projects = [
    {
      id: 1,
      title: 'Task Management App',
      subtitle: 'React + Vite + Tailwind',
      image: taskImg,
      demoUrl: '#',   // put your real demo URL
      codeUrl: '#',   // put your real GitHub URL
    },
    {
      id: 2,
      title: 'Personal Finance Tracker',
      subtitle: 'React + Vite + Tailwind',
      image: financeImg,
      demoUrl: '#',
      codeUrl: '#',
    },
     {
      id: 3,
      title: 'Cake Ordering System',
      subtitle: 'HTML + CSS + JavaScript + NodeJS',
      image: cakeImg,
      demoUrl: '#',
      codeUrl: '#',
    },
     {
      id: 4,
      title: 'Pet Ordering System',
      subtitle: 'HTML + CSS + JavaScript + PHP',
      image: petImg,
      demoUrl: '#',
      codeUrl: '#',
    },
     {
      id: 5,
      title: 'My Portfolio',
      subtitle: 'React + Vite + Tailwind',
      image: portfolioImg,
      demoUrl: '#',
      codeUrl: '#',
    },
     
  ]

  return (
    <section className="text-slate-200">
      
     

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <PortfolioItem key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}

function PortfolioItem({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.15,
        ease: 'easeOut',
      }}
      className="flex flex-col"
    >
      <div className="group relative mb-3 overflow-hidden rounded-2xl bg-[#15151f] shadow-[0_0_25px_rgba(0,0,0,0.6)]">
        <img
          src={project.image}
          alt={project.title}
          className="h-44 w-full object-cover transition duration-300 group-hover:scale-105 group-hover:brightness-50"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 transition duration-300 group-hover:opacity-100" />

        {/* Center icons */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 transition duration-300 group-hover:opacity-100">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-yellow-400 text-[#111118] transition hover:bg-yellow-300"
          >
            <FiEye className="text-lg" />
          </a>

          <a
            href={project.codeUrl}
            target="_blank"
            rel="noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-yellow-400 text-[#111118] transition hover:bg-yellow-300"
          >
            <FiGithub className="text-lg" />
          </a>
        </div>
      </div>

      <h3 className="text-sm font-semibold text-slate-50">
        {project.title}
      </h3>
      <p className="mt-1 text-xs text-slate-400">{project.subtitle}</p>
    </motion.div>
  )
}

export default PortfolioSection
import Tabs from './Tabs'
import AboutSection from './AboutSection'
import PortfolioSection from './PortfolioSection'
import ResumeSection from './ResumeSection'
import ContactSection from './ContactSection'

function MainPanel({ activeTab, setActiveTab }) {
  return (
    <main className="flex-1 rounded-3xl bg-zinc-900 p-8 shadow-[0_0_40px_rgba(0,0,0,0.8)] ">
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="mt-4">
        {activeTab === 'about' && <AboutSection />}
        {activeTab === 'resume' && <ResumeSection />}
        {activeTab === 'portfolio' && <PortfolioSection />}
        {activeTab === 'contact' && <ContactSection />}
          <p className="text-slate-400 text-2xl">
            
          </p>
        
      </div>
    </main>
  )
}

export default MainPanel
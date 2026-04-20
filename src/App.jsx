import { useState } from 'react'
import { motion } from 'framer-motion'
import Sidebar from './Components/SideBar'
import MainPanel from './Components/MainPanel'

function App() {
  const [activeTab, setActiveTab] = useState('about')

  return (
    <div className="min-h-screen bg-zinc-950 text-slate-100 flex items-start justify-center px-3 py-6 md:px-4 md:py-8">
      <div className="flex w-full max-w-6xl flex-col gap-6 md:flex-row mt-10">
        
        {/* Sidebar with fade-in */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Sidebar />
        </motion.div>

        {/* Main Panel with fade-in */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1"
        >
          <MainPanel activeTab={activeTab} setActiveTab={setActiveTab} />
        </motion.div>

      </div>
    </div>
  )
}

export default App
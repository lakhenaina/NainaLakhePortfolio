const TABS = ['about', 'resume', 'portfolio', 'contact']

const LABELS = {
  about: 'About',
  resume: 'Resume',
  portfolio: 'Portfolio',
  contact: 'Contact',
}

const TITLES = {
  about: 'About Me',
  resume: 'Resume',
  portfolio: 'Portfolio',
  contact: 'Contact',
}

function Tabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex items-center justify-between border-b border-[#1d1d27] pb-2">
      <h1 className="text-3xl font-semibold text-slate-100">
        {TITLES[activeTab]}
      </h1>

      <div className=" ">
        {TABS.map((tab) => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={` px-4 py-2 text-xm font-medium transition pt-0.1${
              activeTab === tab
                ? ' text-yellow-600'
                : 'text-slate-300 '
            }`}
          >
            {LABELS[tab]}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Tabs
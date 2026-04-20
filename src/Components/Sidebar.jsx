import {
  FiMail,
  FiPhone,
  FiCalendar,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiInstagram,
} from "react-icons/fi";
import bitmoji from '../assets/bitmoji.png';

function Sidebar() {
  return (
    <aside className="w-full max-w-3xl rounded-3xl bg-zinc-900 p-6 shadow-[0_0_40px_rgba(0,0,0,0.8)] flex flex-col items-center">
      {/* Avatar */}
      <div className="mt-10 rounded-3xl  p-[2px] ">
        <div className="h-32 w-32 overflow-hidden rounded-3xl bg-zinc-800">
          <img
            src={bitmoji}
            alt="Naina Lakhe"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Name & Role */}
      <h2 className="pt-9 text-2xl font-semibold text-slate-50">Naina Lakhe</h2>
      <p className="mt-3 rounded-xs bg-zinc-800 px-4 py-1 text-xs font-medium text-slate-300">
        Frontend Developer
      </p>

      <div className="my-5 h-px w-full bg-zinc-800" />

      {/* Info items */}
      <div className="w-full space-y-3">
        <InfoItem
          icon={<FiMail className="text-yellow-400" />}
          label="Email"
          value="nainalakhebiz@gmail.com"
        />
        <InfoItem
          icon={<FiPhone className="text-yellow-400" />}
          label="Phone"
          value="+977 9849647693"
        />
        <InfoItem
          icon={<FiCalendar className="text-yellow-400" />}
          label="Birthday"
          value="February 19, 2005"
        />
        <InfoItem
          icon={<FiMapPin className="text-yellow-400" />}
          label="Location"
          value="Bhaktapur, Nepal"
        />
      </div>

      {/* Social links */}
      <div className="mt-6 flex gap-4 text-slate-400">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-[#1a1a22] p-2 transition hover:bg-[#222230] hover:text-yellow-400"
        >
          <FiGithub />
        </a>
        <a
          href="https://www.linkedin.com/feed/"
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-[#1a1a22] p-2 transition hover:bg-[#222230] hover:text-yellow-400"
        >
          <FiLinkedin />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-[#1a1a22] p-2 transition hover:bg-[#222230] hover:text-yellow-400"
        >
          <FiInstagram />
        </a>
      </div>
    </aside>
  );
}

function InfoItem({ icon, label, value }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl bg-zinc-900 px-3 py-2">
      <div className="mt-1">{icon}</div>
      <div className="flex-1">
        <p className="text-xs uppercase tracking-wide text-slate-400">
          {label}
        </p>
        <p className="break-words text-sm text-slate-100">{value}</p>
      </div>
    </div>
  );
}

export default Sidebar;
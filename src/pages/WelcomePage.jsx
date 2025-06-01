import { Link } from 'react-router-dom';
import ResumeImage from '../assets/Resume.webp';
import { ArrowUpRight, FileText } from 'lucide-react';

export default function WelcomePage() {
  return (
    <div className="bg-slate-200 min-h-screen p-6 ">
      <nav className="flex justify-between items-center mx-auto max-w-7xl">
        <Link to="/">
          <div className="text-3xl font-bold text-indigo-800 flex items-center ">
            <FileText className="inline-block w-10 h-10 mx-1" />
            Prime<span className="text-indigo-950 font-semibold">CV</span>
          </div>
        </Link>
        <Link to="/resumeBuilder">
          <button className=" p-3 bg-indigo-950 rounded-lg font-semibold text-white cursor-pointer hover:bg-indigo-800 transition-all duration-300 shadow-md hover:shadow-lg">
            Start Building Now →
          </button>
        </Link>
      </nav>

      <main className="grid grid-cols-1 md:grid-cols-[55%_45%] max-w-7xl mx-auto mt-14 gap-16">
        <div className="flex-1">
          <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 max-w-2xl mt-16 leading-tight">
            Build a professional resume
          </h1>
          <p className="text-slate-700 mb-8 text-lg sm:text-xl md:text-2xl tracking-wide opacity-80">
            Quickly create a standout CV that highlights your skills — no hassle, all impact. 🚀
          </p>
          <button className="bg-indigo-950 text-xl text-white font-bold p-4 rounded-lg cursor-pointer shadow-md hover:scale-105 hover:bg-indigo-800 hover:shadow-lg transition-all duration-300 flex items-center w-full md:w-auto">
            <ArrowUpRight className="inline-block w-10 h-10" />
            <Link to="/resumeBuilder" className="mx-2">
              Build Your Resume
            </Link>
          </button>
        </div>
        <div className="flex-1">
          <img
            src={ResumeImage}
            alt="Resume"
            className="w-full max-w-md mx-auto rounded-lg shadow-xl"
          />
        </div>
      </main>
    </div>
  );
}

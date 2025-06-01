import { useState } from "react";
import PersonalInformation from "../components/PersonalInformation";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";

export default function ResumeBuilderPage() {
  const [personalInfo, setPersonalInfo] = useState({});

  return (
    <div className="bg-slate-200 min-h-screen p-10">
      <div className="flex justify-between">
        <Link to="/">
          <div className="text-3xl font-bold text-indigo-800 flex items-center my-1">
            <FileText className="inline-block w-10 h-10 mx-1" />
            Prime<span className="text-indigo-950 font-semibold">CV</span>
          </div>
        </Link>{" "}
        <div className="flex justify-between gap-56">
          <div className="flex-shrink-0 ml-auto">
            <div className="w-[600px]">
              <PersonalInformation setPersonalInfo={setPersonalInfo} />
              <Experience />
              <Education />
              <Projects />
              <Skills />
            </div>
          </div>
        </div>
        <div className=" max-h-[90vh] overflow-auto scroll-smooth no-scrollbar">
          <div className="bg-white w-[210mm] h-[297mm] mx-auto p-8 shadow-lg ">
            {personalInfo && (
              <div>
                <h1>{personalInfo.name}</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import PersonalInformation from "../components/PersonalInformation";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";
import {
  samplePersonalInfo,
  generateExperience,
  generateEducation,
  generateProjects,
  generateSkills,
} from "../components/data";
import { v4 as uuid } from "uuid";

export default function ResumeBuilderPage() {
  const [personalInfo, setPersonalInfo] = useState(samplePersonalInfo);
  const [experience, setExperience] = useState([generateExperience()]);
  const [education, setEducation] = useState([generateEducation()]);
  const [projects, setProjects] = useState([generateProjects()]);
  const [skills, setSkills] = useState([generateSkills()]);

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSectionChange = (setState) => (e, id) => {
    const { name, value } = e.target;
    setState((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [name]: value } : item))
    );
  };

  const handleAddSection = (setState, newItem) => () => {
    setState((prev) => [...prev, newItem()]);
  };

  const handleDeleteSection = (setState) => (id) => {
    setState((prev) => prev.filter((item) => item.id !== id));
  };

  const handleAddSkills = (categoryId, skill) => {
    if (!skill.trim()) return;

    setSkills((prev) =>
      prev.map((cat) =>
        cat.id === categoryId
          ? {
              ...cat,
              list: [...cat.list, { id: uuid(), name: skill }],
            }
          : cat
      )
    );
  };

  const handleDeleteSkills = (categoryId, skillId) => {
    setSkills((prev) =>
      prev.map((cat) =>
        cat.id === categoryId
          ? {
              ...cat,
              list: cat.list.filter((skill) => skill.id !== skillId),
            }
          : cat
      )
    );
  };

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
          <div className="flex-shrink-0 ml-auto h-[90vh] scroll-smooth overflow-auto no-scrollbar">
            <div className="flex flex-col gap-6 w-[600px]">
              <PersonalInformation
                personalInfo={personalInfo}
                handlePersonalInfo={handlePersonalInfoChange}
              />
              <Experience
                experience={experience}
                handleExperience={handleSectionChange(setExperience)}
                handleAddExperience={handleAddSection(
                  setExperience,
                  generateExperience
                )}
                handleDeleteExperience={handleDeleteSection(setExperience)}
              />
              <Education
                education={education}
                handleEducation={handleSectionChange(setEducation)}
                handleAddEducation={handleAddSection(
                  setEducation,
                  generateEducation
                )}
                handleDeleteEducation={handleDeleteSection(setEducation)}
              />
              <Projects
                projects={projects}
                handleProjects={handleSectionChange(setProjects)}
                handleAddProjects={handleAddSection(
                  setProjects,
                  generateProjects
                )}
                handleDeleteProjects={handleDeleteSection(setProjects)}
              />
              <Skills
                skills={skills}
                handleSkills={handleSectionChange(setSkills)}
                handleAddSkills={handleAddSkills}
                handleDeleteSkills={handleDeleteSkills}
                handleDeleteCategory={handleDeleteSection(setSkills)}
                handleAddCategory={handleAddSection(setSkills, generateSkills)}
              />
            </div>
          </div>
        </div>
        <div className=" max-h-[90vh] overflow-auto scroll-smooth no-scrollbar">
          <div className="bg-white w-[210mm] h-[297mm] mx-auto p-8 shadow-lg ">
            {personalInfo && (
              <div>
                <h1 className="font-bold text-2xl">Personal Info</h1>
                <h1>{personalInfo.name}</h1>
                <h1>{personalInfo.email}</h1>
                <h1>{personalInfo.phone}</h1>

                {experience.map((expItem) => (
                  <div key={expItem.id}>
                    <h1 className="font-bold text-2xl">Experience</h1>
                    <h1>{expItem.employer}</h1>
                    <h1>{expItem.position}</h1>
                    <h1>{expItem.startDate}</h1>
                    <h1>{expItem.endDate}</h1>
                    <h1>{expItem.description}</h1>
                  </div>
                ))}
                {education.map((eduItem) => (
                  <div key={eduItem.id}>
                    <h1 className="font-bold text-2xl">Education</h1>
                    <h1>{eduItem.school}</h1>
                  </div>
                ))}

                {projects.map((projItem) => (
                  <div key={projItem.id}>
                    <h1 className="font-bold text-2xl">Projects</h1>
                    <h1>{projItem.title}</h1>
                    <h1>{projItem.subtitle}</h1>
                  </div>
                ))}

                {skills.map((item) => (
                  <div key={item.id}>
                    <h1 className="font-bold text-2xl">Skills</h1>
                    <h1>{item.category}</h1>
                    {item.list.map((skill) => (
                      <li key={skill.id}>{skill.name}</li>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

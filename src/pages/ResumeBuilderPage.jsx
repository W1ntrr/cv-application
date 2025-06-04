import { useState } from "react";
import PersonalInformation from "../components/sections/PersonalInformation";
import Experience from "../components/sections/Experience";
import Education from "../components/sections/Education";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import { Link } from "react-router-dom";
import { FileText, Mail, Phone, MapPin } from "lucide-react";
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

  const hasContent = (data) => {
    return (
      Array.isArray(data) &&
      data.some((item) =>
        Object.entries(item).some(
          ([key, value]) =>
            key !== "id" && typeof value === "string" && value.trim() !== ""
        )
      )
    );
  };

  return (
    <div className="bg-slate-200 min-h-screen p-10">
      <div className="flex justify-between">
        <Link to="/">
          <div className="text-3xl font-bold text-indigo-800 flex items-center">
            <FileText className="inline-block w-10 h-10 mx-1" />
            CV<span className="text-indigo-950 font-semibold">Builder</span>
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
        <div className=" max-h-[90vh] overflow-auto scroll-smooth no-scrollbar font-serif">
          <div className="bg-white w-[210mm] h-[297mm] mx-auto p-8 shadow-lg ">
            {personalInfo && (
              <div className="flex flex-col items-center gap-4">
                <h1 className="font-bold text-3xl">{personalInfo.name}</h1>
                <div className="flex gap-4">
                  {personalInfo.email && (
                    <p className="flex gap-2 items-center">
                      <Mail size={18} />
                      {personalInfo.email}
                    </p>
                  )}
                  {personalInfo.phone && (
                    <p className="flex gap-2 items-center">
                      <Phone size={18} />
                      {personalInfo.phone}
                    </p>
                  )}
                  {personalInfo.location && (
                    <p className="flex gap-2 items-center">
                      <MapPin size={18} />
                      {personalInfo.location}
                    </p>
                  )}
                </div>
              </div>
            )}

            {hasContent(experience) && (
              <div className="mt-6">
                <h1 className="font-bold text-xl">EXPERIENCE</h1>
                <div className="border-t-2 mb-3"></div>
                {experience.map((item) => (
                  <div key={item.id} className="mb-4">
                    <div className="flex justify-between">
                      <h2 className="font-semibold">{item.jobTitle}</h2>
                      <p>
                        {item.startDate}{" "}
                        {item.startDate && item.endDate ? "-" : ""}{" "}
                        {item.endDate}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className="italic">{item.employer}</p>
                      <p>{item.location}</p>
                    </div>
                    <p className="w-3/4">{item.description}</p>
                  </div>
                ))}
              </div>
            )}

            {hasContent(education) && (
              <div className="mt-6">
                <h1 className="font-bold text-xl">EDUCATION</h1>
                <div className="border-t-2 mb-3"></div>
                {education.map((eduItem) => (
                  <div key={eduItem.id} className="mb-4">
                    <div className="flex justify-between">
                      <h2 className="font-semibold">{eduItem.school}</h2>
                      <p>
                        {eduItem.startDate}{" "}
                        {eduItem.startDate && eduItem.endDate ? "-" : ""}{" "}
                        {eduItem.endDate}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className="italic">{eduItem.degree}</p>
                      <div className="w-fit">{eduItem.location}</div>
                    </div>
                    <p className="w-3/4">{eduItem.description}</p>
                  </div>
                ))}
              </div>
            )}

            {hasContent(projects) && (
              <div>
                <h1 className="font-bold text-xl">PROJECTS</h1>
                <div className="border-t-2 mb-3"> </div>
                {projects.map((projItem) => (
                  <div key={projItem.id} className="mb-4">
                    <div>
                      <h2 className="font-semibold">{projItem.title}</h2>
                      <p className="italic">{projItem.subtitle}</p>
                      <p className="w-3/4">{projItem.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {hasContent(skills) && (
              <div>
                <h1 className="font-bold text-xl">SKILLS</h1>
                <div className="border-t-2 mb-3"></div>
                {skills.map((skill) => (
                  <div key={skill.id}>
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="font-bold text-lg">{skill.category}:</p>
                      {skill.list.map((item, index) => (
                        <p key={item.id}>
                          {item.name}
                          {index < skill.list.length - 1 ? ", " : ""}
                        </p>
                      ))}
                    </div>
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

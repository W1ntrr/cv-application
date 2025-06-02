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
  sampleExperience,
  sampleEducation,
  sampleProjects,
} from "../components/data";
import { v4 as uuid } from "uuid";

export default function ResumeBuilderPage() {
  const [personalInfo, setPersonalInfo] = useState(samplePersonalInfo);
  const [experience, setExperience] = useState(sampleExperience);
  const [education, setEducation] = useState(sampleEducation);
  const [projects, setProjects] = useState(sampleProjects);

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleExperienceChange = (e, id) => {
    const { name, value } = e.target;

    setExperience((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [name]: value } : item))
    );
  };

  const handleAddExperience = () => {
    const newExperience = [...experience];
    newExperience.push({
      id: uuid(),
      employer: "",
      position: "",
      startDate: "",
      endDate: "",
      description: "",
    });
    setExperience(newExperience);
  };

  const handleDeleteExperience = (experienceId) => {
    const newExperience = experience.filter((item) => item.id !== experienceId);
    setExperience(newExperience);
  };

  const handleEducationChange = (e, id) => {
    const { name, value } = e.target;

    setEducation((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [name]: value } : item))
    );
  };

  const handleAddEducation = () => {
    const newEducation = [...education];
    newEducation.push({
      id: uuid(),
      school: "",
      degree: "",
      city: "",
      state: "",
      startDate: "",
      endDate: "",
      description: "",
    });
    setEducation(newEducation);
  };

  const handleDeleteEducation = (educationId) => {
    const newEducation = education.filter((item) => item.id !== educationId);
    setEducation(newEducation);
  };

  const handleProjectsChange = (e, id) => {
    const { name, value } = e.target;

    setProjects((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [name]: value } : item))
    );
  };

  const handleAddProjects = () => {
    const newProjects = [...projects];
    newProjects.push({
      id: uuid(),
      title: "",
      subtitle: "",
      description: "",
    });
    setProjects(projects);
  };

  const handleDeleteProjects = (projectsId) => {
    const newProjects = projects.filter((item) => item.id !== projectsId);
    setProjects(newProjects);
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
                handleExperience={handleExperienceChange}
                handleAddExperience={handleAddExperience}
                handleDeleteExperience={handleDeleteExperience}
              />
              <Education
                education={education}
                handleEducation={handleEducationChange}
                handleAddEducation={handleAddEducation}
                handleDeleteEducation={handleDeleteEducation}
              />
              <Projects
                projects={projects}
                handleProjects={handleProjectsChange}
                handleAddProjects={handleAddProjects}
                handleDeleteProjects={handleDeleteProjects}
              />
              <Skills />
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
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

import { v4 as uuid } from "uuid";

const samplePersonalInfo = {
  name: "",
  email: "",
  phone: "",
  location: "",
};

const generateExperience = () => ({
  id: uuid(),
  employer: "",
  position: "",
  startDate: "",
  endDate: "",
  description: "",
});

const generateEducation = () => ({
  id: uuid(),
  school: "",
  degree: "",
  city: "",
  state: "",
  startDate: "",
  endDate: "",
  description: "",
});

const generateProjects = () => ({
  id: uuid(),
  title: "",
  subtitle: "",
  description: "",
});

const generateSkills = () => ({
  id: uuid(),
  category: "",
  list: [],
});

export {
  samplePersonalInfo,
  generateExperience,
  generateEducation,
  generateProjects,
  generateSkills,
};

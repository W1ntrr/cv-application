import { v4 as uuid } from "uuid";

const samplePersonalInfo = {
  name: "",
  email: "",
  phone: "",
  location: "",
};

const sampleExperience = [
  {
    id: uuid(),
    employer: "",
    position: "",
    startDate: "",
    endDate: "",
    description: "",
  },
];

const sampleEducation = [
  {
    id: uuid(),
    school: "",
    degree: "",
    city: "",
    state: "",
    startDate: "",
    endDate: "",
    description: "",
  },
];

const sampleProjects = [
  {
    id: uuid(),
    title: "",
    subtitle: "",
    description: "",
  },
];

const sampleSkills = [
  {
    id: uuid(),
    category: "",
    list: [""],
  },
];

export {
  samplePersonalInfo,
  sampleExperience,
  sampleEducation,
  sampleProjects,
  sampleSkills,
};

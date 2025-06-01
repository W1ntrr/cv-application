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

export { samplePersonalInfo, sampleExperience };

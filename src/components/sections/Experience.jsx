import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Plus, Trash } from "lucide-react";
import TextField from "../ui/TextField";

export default function Experience({
  experience,
  handleExperience,
  handleAddExperience,
  handleDeleteExperience,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleSection = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <form className="font-poppins">
      <div className="rounded-xl shadow p-8 bg-white w-full max-w-xl  text-indigo-950 flex flex-col gap-6">
        <div
          className=" flex justify-between hover:opacity-70 cursor-pointer"
          onClick={handleToggleSection}
        >
          <h3 className="text-2xl font-semibold select-none">Experience</h3>
          <ChevronDown
            className={`${
              isOpen ? "rotate-180" : ""
            } transition-transform duration-300`}
          />
        </div>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              {experience.map((expItem) => (
                <div
                  key={expItem.id}
                  className="space-y-4 border-b border-dotted border-b-slate-400 mb-4"
                >
                  {/* Job Title */}
                  <TextField
                    label="Job Title"
                    type="text"
                    name="jobTitle"
                    id={expItem.id}
                    value={expItem.jobTitle}
                    placeholder="Enter Job Title "
                    onChangeField={handleExperience}
                  />

                  {/* Employer */}
                  <TextField
                    label="Employer"
                    type="text"
                    name="employer"
                    id={expItem.id}
                    value={expItem.employer}
                    placeholder="Enter Employer"
                    onChangeField={handleExperience}
                  />

                  <TextField
                    label={
                      <>
                        Location
                        <span className="mx-2 text-gray-400 text-sm">
                          optional
                        </span>
                      </>
                    }
                    type="text"
                    name="location"
                    id={expItem.id}
                    value={expItem.location}
                    placeholder="Enter Location"
                    onChangeField={handleExperience}
                  />

                  <div className="grid grid-cols-2">
                    {/* Start Date */}
                    <TextField
                      label="Start Date"
                      type="text"
                      name="startDate"
                      id={expItem.id}
                      value={expItem.startDate}
                      placeholder="e.g. Jan 2025 or Present"
                      onChangeField={handleExperience}
                    />

                    {/* End Date */}
                    <TextField
                      label="End Date"
                      type="text"
                      name="endDate"
                      id={expItem.id}
                      value={expItem.endDate}
                      placeholder="e.g. Jan 2025 or Present"
                      onChangeField={handleExperience}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor={`description-${expItem.id}`}
                      className="font-bold"
                    >
                      Description
                    </label>
                    <textarea
                      name="description"
                      id={`description-${expItem.id}`}
                      value={expItem.description}
                      onChange={(e) => handleExperience(e, expItem.id)}
                      placeholder="Describe your responsibilities or achievements"
                      className="w-full focus:outline-none h-24 bg-slate-100 px-4 py-2 resize-none"
                    />

                    <div className="flex justify-end p-1 ">
                      <button
                        type="button"
                        onClick={() => handleDeleteExperience(expItem.id)}
                        className="flex items-center gap-3 hover:text-red-500 hover:bg-red-200 py-1 px-3 rounded-lg cursor-pointer font-semibold"
                      >
                        <Trash size={20} />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex w-full items-center justify-center">
                <button
                  type="button"
                  onClick={handleAddExperience}
                  className="px-7 py-2 bg-indigo-100 rounded-full font-bold flex gap-2 cursor-pointer hover:bg-indigo-200 transition-all duration-300"
                >
                  <Plus className="inline-block" strokeWidth={3} />
                  Experience
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}

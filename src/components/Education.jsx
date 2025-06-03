import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Trash, Plus } from "lucide-react";

export default function Education({
  education,
  handleEducation,
  handleAddEducation,
  handleDeleteEducation,
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
          <h3 className="text-2xl font-semibold select-none">Education</h3>
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
              {education.map((eduItem) => (
                <div
                  key={eduItem.id}
                  className="space-y-4 border-b border-dotted border-b-slate-400 mb-4"
                >
                  {/* School */}
                  <div>
                    <label
                      htmlFor={`school-${eduItem.id}`}
                      className="font-bold"
                    >
                      School
                    </label>
                    <input
                      type="text"
                      name="school"
                      id={`school-${eduItem.id}`}
                      value={eduItem.school}
                      onChange={(e) => handleEducation(e, eduItem.id)}
                      placeholder="Enter school"
                      className="w-full focus:outline-none h-10 bg-slate-100 rounded px-4 py-2"
                      required
                    />
                  </div>

                  {/* Degree */}
                  <div>
                    <label
                      htmlFor={`degree-${eduItem.id}`}
                      className="font-bold"
                    >
                      Degree
                    </label>
                    <input
                      type="text"
                      name="degree"
                      id={`degree-${eduItem.id}`}
                      value={eduItem.degree}
                      onChange={(e) => handleEducation(e, eduItem.id)}
                      placeholder="Enter degree"
                      className="w-full focus:outline-none h-10 bg-slate-100 rounded px-4 py-2"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2">
                    {/* City */}
                    <div>
                      <label
                        htmlFor={`city-${eduItem.id}`}
                        className="font-bold"
                      >
                        City
                        <span className="mx-2 text-gray-400 text-sm">
                          optional
                        </span>
                      </label>
                      <input
                        type="text"
                        name="city"
                        id={`city-${eduItem.id}`}
                        value={eduItem.city}
                        onChange={(e) => handleEducation(e, eduItem.id)}
                        placeholder="Enter City"
                        className="w-full focus:outline-none h-10 bg-slate-100 rounded px-4 py-2"
                      />
                    </div>

                    {/* State */}
                    <div>
                      <label
                        htmlFor={`state-${eduItem.id}`}
                        className="font-bold"
                      >
                        State
                        <span className="mx-2 text-gray-400 text-sm">
                          optional
                        </span>
                      </label>
                      <input
                        type="text"
                        name="state"
                        id={`state-${eduItem.id}`}
                        value={eduItem.state}
                        onChange={(e) => handleEducation(e, eduItem.id)}
                        placeholder="Enter State"
                        className="w-full focus:outline-none h-10 bg-slate-100 rounded px-4 py-2"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2">
                    {/* Start Date */}
                    <div>
                      <label
                        htmlFor={`startDate-${eduItem.id}`}
                        className="font-bold"
                      >
                        Start Date
                      </label>
                      <input
                        type="text"
                        name="startDate"
                        id={`startDate-${eduItem.id}`}
                        value={eduItem.startDate}
                        onChange={(e) => handleEducation(e, eduItem.id)}
                        placeholder="e.g. Jan 2025 or Present"
                        className="w-full focus:outline-none h-10 bg-slate-100 rounded px-4 py-2"
                        required
                      />
                    </div>

                    {/* End Date */}
                    <div>
                      <label
                        htmlFor={`endDate-${eduItem.id}`}
                        className="font-bold"
                      >
                        End Date
                      </label>
                      <input
                        type="text"
                        name="endDate"
                        id={`endDate-${eduItem.id}`}
                        value={eduItem.endDate}
                        onChange={(e) => handleEducation(e, eduItem.id)}
                        placeholder="e.g. Jan 2025 or Present"
                        className="w-full focus:outline-none h-10 bg-slate-100 rounded px-4 py-2"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    {/* Description */}
                    <label
                      htmlFor={`description-${eduItem.id}`}
                      className="font-bold"
                    >
                      Description
                    </label>
                    <textarea
                      name="description"
                      id={`description-${eduItem.id}`}
                      value={eduItem.description}
                      onChange={(e) => handleEducation(e, eduItem.id)}
                      placeholder="Add a description of your education"
                      className="w-full focus:outline-none h-24 bg-slate-100 px-4 py-2 resize-none"
                    />

                    <div className="flex justify-end p-1 ">
                      <button
                        type="button"
                        onClick={() => handleDeleteEducation(eduItem.id)}
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
                  onClick={handleAddEducation}
                  className="px-7 py-2 bg-indigo-100 rounded-full font-bold flex gap-2 cursor-pointer hover:bg-indigo-200 transition-all duration-300"
                >
                  <Plus className="inline-block" strokeWidth={3} />
                  Education
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}

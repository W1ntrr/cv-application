import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Plus, Trash } from "lucide-react";

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
                  className="space-y-4 border-b border-dotted border-b-slate-400"
                >
                  <div>
                    <label
                      htmlFor={`employer-${expItem.id}`}
                      className="font-bold"
                    >
                      Employer
                    </label>
                    <input
                      type="text"
                      name="employer"
                      id={`employer-${expItem.id}`}
                      value={expItem.employer}
                      onChange={(e) => handleExperience(e, expItem.id)}
                      placeholder="Enter employer"
                      className="w-full focus:outline-none h-10 bg-slate-100 rounded px-4 py-2"
                      required
                    />
                  </div>

                  {/* Position */}
                  <div>
                    <label
                      htmlFor={`position-${expItem.id}`}
                      className="font-bold"
                    >
                      Position
                    </label>
                    <input
                      type="text"
                      name="position"
                      id={`position-${expItem.id}`}
                      value={expItem.position}
                      onChange={(e) => handleExperience(e, expItem.id)}
                      placeholder="Enter position"
                      className="w-full focus:outline-none h-10 bg-slate-100 rounded px-4 py-2"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2">
                    {/* Start Date */}
                    <div>
                      <label
                        htmlFor={`startDate-${expItem.id}`}
                        className="font-bold"
                      >
                        Start Date
                      </label>
                      <input
                        type="text"
                        name="startDate"
                        id={`startDate-${expItem.id}`}
                        value={expItem.startDate}
                        onChange={(e) => handleExperience(e, expItem.id)}
                        placeholder="e.g. Jan 2025 or Present"
                        className="w-full focus:outline-none h-10 bg-slate-100 rounded px-4 py-2"
                        required
                      />
                    </div>

                    {/* End Date */}
                    <div>
                      <label
                        htmlFor={`endDate-${expItem.id}`}
                        className="font-bold"
                      >
                        End Date
                      </label>
                      <input
                        type="text"
                        name="endDate"
                        id={`endDate-${expItem.id}`}
                        value={expItem.endDate}
                        onChange={(e) => handleExperience(e, expItem.id)}
                        placeholder="e.g. Jan 2025 or Present"
                        className="w-full focus:outline-none h-10 bg-slate-100 rounded px-4 py-2"
                        required
                      />
                    </div>
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

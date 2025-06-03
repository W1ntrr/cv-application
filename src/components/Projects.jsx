import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Plus, Trash } from "lucide-react";

export default function Projects({
  projects,
  handleProjects,
  handleAddProjects,
  handleDeleteProjects,
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
          <h3 className="text-2xl font-semibold select-none">Projects</h3>
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
              {projects.map((projItem) => (
                <div
                  key={projItem.id}
                  className="space-y-4 border-b border-dotted border-b-slate-400 mb-4"
                >
                  {/* Project Title */}
                  <div>
                    <label
                      htmlFor={`project-${projItem.id}`}
                      className="font-bold"
                    >
                      Project title
                    </label>
                    <input
                      type="text"
                      name="title"
                      id={`title-${projItem.id}`}
                      value={projItem.title}
                      onChange={(e) => handleProjects(e, projItem.id)}
                      placeholder="Enter Project title"
                      className="w-full focus:outline-none h-10 bg-slate-100 rounded px-4 py-2"
                      required
                    />
                  </div>

                  {/* Sub Title */}
                  <div>
                    <label
                      htmlFor={`subTitle-${projItem.id}`}
                      className="font-bold"
                    >
                      Sub Title
                    </label>
                    <input
                      type="text"
                      name="subtitle"
                      id={`subtitle-${projItem.id}`}
                      value={projItem.subtitle}
                      onChange={(e) => handleProjects(e, projItem.id)}
                      placeholder="Enter sub title"
                      className="w-full focus:outline-none h-10 bg-slate-100 rounded px-4 py-2"
                      required
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <label
                      htmlFor={`description-${projItem.id}`}
                      className="font-bold"
                    >
                      Description
                    </label>
                    <textarea
                      name="description"
                      id={`description-${projItem.id}`}
                      value={projItem.description}
                      onChange={(e) => handleProjects(e, projItem.id)}
                      placeholder="Describe the project and its outcomes"
                      className="w-full focus:outline-none h-24 bg-slate-100 px-4 py-2 resize-none"
                    />
                    <div className="flex justify-end p-1 ">
                      <button
                        type="button"
                        onClick={() => handleDeleteProjects(projItem.id)}
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
                  onClick={handleAddProjects}
                  className="px-7 py-2 bg-indigo-100 rounded-full font-bold flex gap-2 cursor-pointer hover:bg-indigo-200 transition-all duration-300"
                >
                  <Plus className="inline-block" strokeWidth={3} />
                  Projects
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Plus, Trash, X } from "lucide-react";
import TextField from "../ui/TextField";

export default function Projects({
  skills,
  handleSkills,
  handleAddSkills,
  handleDeleteSkills,
  handleDeleteCategory,
  handleAddCategory,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [editingCategoryId, setEditingCategoryId] = useState(null);
  const [skillInputs, setSkillInputs] = useState({});

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
          <h3 className="text-2xl font-semibold select-none">Skills</h3>
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
              {skills.map((item) => (
                <div
                  key={item.id}
                  className="space-y-4 border-b border-dotted border-b-slate-400 mb-4"
                >
                  <TextField
                    label="Category Name"
                    type="text"
                    id={item.id}
                    name="category"
                    value={item.category}
                    placeholder="Enter a category"
                    onChangeField={handleSkills}
                  />
                  <div className="flex flex-wrap items-center gap-4">
                    {item.list.map((skill) => (
                      <div
                        key={skill.id}
                        className="py-2 px-3 bg-indigo-100 rounded-xl h-10 flex gap-3 items-center"
                      >
                        {skill.name}
                        <X
                          size={18}
                          className="cursor-pointer hover:text-red-500"
                          onClick={() => handleDeleteSkills(item.id, skill.id)}
                        />
                      </div>
                    ))}

                    {editingCategoryId === item.id ? (
                      <div className="relative inline-block">
                        <input
                          type="text"
                          name="skills"
                          id={`skills-${item.id}`}
                          value={skillInputs[item.id] || ""}
                          onChange={(e) =>
                            setSkillInputs((prev) => ({
                              ...prev,
                              [item.id]: e.target.value,
                            }))
                          }
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              e.preventDefault();
                              const skill = skillInputs[item.id]?.trim();
                              if (skill) {
                                handleAddSkills(item.id, skill);
                                setSkillInputs((prev) => ({
                                  ...prev,
                                  [item.id]: "",
                                }));
                                setEditingCategoryId(null);
                              }
                            }
                          }}
                          className="focus:outline-none py-2 px-3 h-10 bg-indigo-100 rounded-xl "
                          placeholder="Enter a skill"
                          required
                        />
                        <X
                          className="absolute right-4 top-[0.7rem] cursor-pointer hover:text-red-500 "
                          size={20}
                          onClick={() => setEditingCategoryId(null)}
                          strokeWidth={2}
                        />
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setEditingCategoryId(item.id)}
                        className="py-2 px-3 bg-indigo-100 rounded-full font-bold flex gap-1 cursor-pointer text-sm hover:bg-indigo-200 transition-all duration-300  active:translate-y-1 "
                        required
                      >
                        <Plus
                          className="inline-block"
                          strokeWidth={3}
                          size={18}
                        />
                        Skill
                      </button>
                    )}
                  </div>

                  <div className="flex justify-end p-1 ">
                    <button
                      type="button"
                      onClick={() => handleDeleteCategory(item.id)}
                      className="flex items-center gap-3 hover:text-red-500 hover:bg-red-200 py-1 px-3 rounded-lg cursor-pointer font-semibold"
                    >
                      <Trash size={20} />
                      Delete
                    </button>
                  </div>
                </div>
              ))}
              <div className="flex w-full items-center justify-center">
                <button
                  type="button"
                  onClick={handleAddCategory}
                  className="px-7 py-2 bg-indigo-100 rounded-full font-bold flex gap-2 cursor-pointer hover:bg-indigo-200 transition-all duration-300"
                >
                  <Plus className="inline-block" strokeWidth={3} />
                  Category
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}

import { ChevronDown, Save } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TextField from "../ui/TextField";

export default function PersonalInformation({
  personalInfo,
  handlePersonalInfo,
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
          <h3 className="text-2xl font-semibold select-none">
            Personal Information
          </h3>
          <ChevronDown
            className={`${
              isOpen ? "rotate-180" : ""
            } transition-transform duration-300"`}
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
              {/* Full Name */}
              <TextField
                label="Full Name"
                type="text"
                id="name"
                name="name"
                value={personalInfo.name}
                placeholder="Enter full name"
                onChangeField={handlePersonalInfo}
              />

              <div className="grid grid-cols-2">
                {/*Email */}
                <TextField
                  label="Email"
                  type="email"
                  id="email"
                  name="email"
                  value={personalInfo.email}
                  placeholder="Enter email"
                  onChangeField={handlePersonalInfo}
                />
                {/* Phone */}
                <TextField
                  label="Phone"
                  type="tel"
                  id="phone"
                  name="phone"
                  value={personalInfo.phone}
                  placeholder="Enter phone"
                  onChangeField={handlePersonalInfo}
                />
              </div>

              {/* Location */}
              <TextField
                label="Location"
                type="text"
                id="location"
                name="location"
                value={personalInfo.location}
                placeholder="Enter Location"
                onChangeField={handlePersonalInfo}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}

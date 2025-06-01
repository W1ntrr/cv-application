import { ChevronDown, Save } from "lucide-react";
import { useState } from "react";

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

        {isOpen && (
          <>
            <div>
              <label htmlFor="name" className="font-bold">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={personalInfo.name}
                onChange={handlePersonalInfo}
                placeholder="Enter your first and last name"
                className="w-full focus:outline-none h-10 bg-slate-100 rounded px-4 py-2"
                required
              />
            </div>

            <div className="grid grid-cols-2">
              {/*Email */}
              <div>
                <label htmlFor="email" className="font-bold">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={personalInfo.email}
                  onChange={handlePersonalInfo}
                  placeholder="Enter email"
                  className="w-full focus:outline-none h-10 bg-slate-100 rounded px-4 py-2"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="font-bold">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={personalInfo.phone}
                  onChange={handlePersonalInfo}
                  placeholder="Enter phone"
                  className="w-full focus:outline-none h-10 bg-slate-100 rounded px-4 py-2"
                  required
                />
              </div>
            </div>

            {/* Location */}
            <div>
              <label htmlFor="location" className="font-bold">
                Location
              </label>
              <input
                type="text"
                name="location"
                id="location"
                value={personalInfo.location}
                onChange={handlePersonalInfo}
                placeholder="City, County"
                className="w-full focus:outline-none h-10 bg-slate-100 rounded px-4 py-2"
                required
              />
            </div>
          </>
        )}
      </div>
    </form>
  );
}

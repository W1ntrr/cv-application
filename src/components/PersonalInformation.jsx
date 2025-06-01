import { ChevronDown, Save } from "lucide-react";
import { useState } from "react";

export default function PersonalInformation({ setPersonalInfo }) {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
  });

  const handleToggleSection = () => {
    setIsOpen((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const savePersonalInformation = (e) => {
    e.preventDefault();
    setPersonalInfo(form);
    setIsOpen(false);
  };

  return (
    <form className="font-poppins" onSubmit={savePersonalInformation}>
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
                value={form.name}
                onChange={handleChange}
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
                  value={form.email}
                  onChange={handleChange}
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
                  value={form.phone}
                  onChange={handleChange}
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
                value={form.location}
                onChange={handleChange}
                placeholder="City, County"
                className="w-full focus:outline-none h-10 bg-slate-100 rounded px-4 py-2"
                required
              />
            </div>
            <div className="flex  justify-end">
              <button
                type="submit"
                className="bg-indigo-950 text-lg text-white font-bold  px-4 py-2 rounded-lg cursor-pointer shadow-md hover:scale-105 hover:bg-indigo-800 hover:shadow-lg transition-all duration-300 flex items-center w-full md:w-auto gap-2"
              >
                <Save />
                Save
              </button>
            </div>
          </>
        )}
      </div>
    </form>
  );
}

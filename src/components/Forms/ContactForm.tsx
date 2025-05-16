"use client";
import { sendContactEnquiry } from "../../../lib/Mail/ContactForm/sendContactEnquiry";
// import { message } from "antd";
import { Loader2Icon, Mail, MessageCircle, Phone, User } from "lucide-react";
import React, { useState } from "react";
// import toast from "react-hot-toast";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  // Update formData based on input name and value
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Dynamically update formData based on the input name
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await sendContactEnquiry({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      });
      if (response) {
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
        // toast.success("Form Submitted!");
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      // toast("Something went wrong, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full lg:w-[100%]">
      <form className="space-y-3" onSubmit={handleSubmit}>
        <div className="flex gap-3 items-center border-b py-2">
          <User size={20} color="#2e2f87" strokeWidth={1} />
          <input
            type="text"
            name="name"
            value={formData.name}
            required
            onChange={handleChange}
            className=" placeholder:text-gray-700 text-sm text-black  w-full focus:outline-none border border-[#312f83] rounded-md pl-3 !border-b py-1.5"
            placeholder="Your Name"
          />
        </div>
        <div className="flex gap-3 items-center border-b py-2">
          <Mail size={20} color="#2e2f87" strokeWidth={1} />
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="placeholder:text-gray-700 text-sm text-black  w-full focus:outline-none border border-[#312f83] rounded-md pl-3 !border-b py-1.5"
            placeholder="Your Email"
          />
        </div>
        <div className="flex gap-3 items-center border-b py-2">
          <Phone size={20} color="#2e2f87" strokeWidth={1} />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="placeholder:text-gray-700 text-sm text-black  w-full focus:outline-none border border-[#312f83] rounded-md pl-3 !border-b py-1.5"
            required
            placeholder="Your Contact"
          />
        </div>
        <div className="flex gap-3 items-start border-b py-2">
          <MessageCircle size={20} color="#2e2f87" strokeWidth={1} />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="placeholder:text-gray-700 text-sm text-black capitalize w-full focus:outline-none border border-[#312f83] rounded-md pl-3 !border-b py-1.5"
            required
            rows={5}
            placeholder="Message"
          />
        </div>
        <div className="mt-4 flex justify-center items-center">
          <button
            type="submit"
            className="bg-gradient-to-r font-medium border w-fit hover:opacity-90 tracking-wide from-darkGolden to-lightGolden px-6 py- text-sm border-[#312f83] rounded text-black" // Add transition classes
          >
            {/* Loader with transition */}
            {loading && (
              <span
                className="loader block transition-all duration-300 ease-in-out"
                style={{
                  width: loading ? "16px" : "0px",
                  opacity: loading ? 1 : 0,
                }}
              ></span>
            )}
            {/* Button text with transition */}
            <span
              className={`transition-opacity flex items-center gap-2 justify-center py-1.5 duration-300 ease-in-out ${
                loading ? "opacity-50" : "opacity-100"
              }`}
            >
              {loading && <Loader2Icon className="animate-spin" size={16} />}
              {loading ? "SUBMITTING..." : "SUBMIT"}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

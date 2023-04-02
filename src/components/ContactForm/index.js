import React from "react";
import Form from "./Form";
import Socials from "./Socials";

const ContactForm = () => {
  return (
    <div
      id="contact"
      className="lg:min-h-screen max-w-full md:max-w-[1200px]  mx-auto pl-[20px]  relative pr-[20px] py-[4rem]items-center justify-between flex flex-col lg:flex-row"
    >
      <Socials />
      <Form />
    </div>
  );
};

export default ContactForm;

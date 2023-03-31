import React from "react";
import Form from "./Form";
import Socials from "./Socials";

const ContactForm = () => {
  return (
    <div
      id="contact"
      className="lg:min-h-screen max-w-full  mx-auto pl-[20px] ml-[20px] md:ml-[100px] mr-auto relative pr-[20px] py-[4rem]items-center justify-between flex flex-col lg:flex-row"
    >
      <Socials />
      <Form />
    </div>
  );
};

export default ContactForm;

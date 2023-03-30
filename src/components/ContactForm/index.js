import React from "react";

const ContactForm = () => {
  return (
    <div className="h-screen xl:w-[calc(100vw-200px)] pl-[20px] ml-[20px] md:ml-[100px] mr-auto relative pr-[20px]">
      <h1 className="text-white mb-4 text-center">Contact Form</h1>
      <div className="flex flex-col gap-4 items-center">
        <div className="border border-1 h-[60px] w-[400px] max-w-full hover:border-[rgba(255,255,255,0.4)]">
          <input
            placeholder="Name"
            className="h-[60px] w-[400px]  max-w-full bg-transparent px-4 "
          />
        </div>
        <div className="border border-1 h-[60px] w-[400px] max-w-full hover:border-[rgba(255,255,255,0.4)]">
          <input
            placeholder="Email"
            className="h-[60px] w-[400px]  max-w-full bg-transparent px-4"
          />
        </div>
        <div className="border border-1 h-fit min-h-[120px] pt-[20px] w-[400px] max-w-full hover:border-[rgba(255,255,255,0.4)]">
          <textarea
            placeholder="Message"
            className="h-full w-[400px] max-w-full min-h-[120px]  bg-transparent px-4 text-white"
          />
        </div>
        <button className="h-[60px] w-[400px] max-w-full border border-1 hover:border-[rgba(255,255,255,0.4)] cursor-pointer ">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContactForm;

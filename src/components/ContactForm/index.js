import React from "react";
import EmailIcon from "../../assets/icons/EmailIcon";
import GithubIcon from "../../assets/icons/GithubIcon";
import LinkedInIcon from "../../assets/icons/LinkedInIcon";

const ContactForm = () => {
  return (
    <div
      id="contact"
      className="min-h-screen max-w-full  mx-auto pl-[20px] ml-[20px] md:ml-[100px] mr-auto relative pr-[20px] py-[4rem]items-center justify-between flex flex-col md:flex-row"
    >
      <div className="flex flex-col items-center justify-center flex-1 ">
        <h1 className="mb-4">My Socials</h1>
        <div className="w-fit h-[60px] flex gap-4 justify-center">
          <a href="mailto:dmc4719@gmail.com">
            <EmailIcon />
          </a>
          <a href="https://github.com/melanietr98">
            <GithubIcon />
          </a>
          <a href="">
            <LinkedInIcon />
          </a>
        </div>
      </div>
      <div className="flex-col flex flex-1 justify-center">
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
    </div>
  );
};

export default ContactForm;

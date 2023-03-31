import React from "react";
import EmailIcon from "../../assets/icons/EmailIcon";
import GithubIcon from "../../assets/icons/GithubIcon";
import LinkedInIcon from "../../assets/icons/LinkedInIcon";

const Socials = () => {
  return (
    <div className="min-h-[350px] flex flex-col items-center justify-center flex-1 ">
      <h1 className="mb-4">My Socials</h1>
      <div className="w-[200px] h-[60px] flex gap-4 justify-center">
        <a href="mailto:abc@gmail.com">
          <EmailIcon />
        </a>
        <a href="https://github.com/melanietr98">
          <GithubIcon />
        </a>
        <a href="https://www.linkedin.com/in/melanie-rodrigues-7577b2262/">
          <LinkedInIcon />
        </a>
      </div>
    </div>
  );
};

export default Socials;

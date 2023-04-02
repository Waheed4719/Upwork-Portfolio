import React from "react";
import EmailIcon from "../../assets/icons/EmailIcon";
import GithubIcon from "../../assets/icons/GithubIcon";
import LinkedInIcon from "../../assets/icons/LinkedInIcon";
import DownloadIcon from "../../assets/icons/download.svg";

const Socials = () => {
  return (
    <div className="min-h-[350px] flex flex-col items-center justify-center gap-[2rem] flex-1 ">
      <div>
        <h1 className="mb-4 text-white text-center">My Socials</h1>
        <div className="w-[200px] h-[60px] flex gap-4 justify-center">
          <a href="mailto:Meltrodriguess@gmail.com">
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
      <div>
        <a
          href="https://drive.google.com/file/d/1sLSxvlY2gEaX928Y_Iji8Qg_ZmnacJyO/view"
          className="mb-4 text-white text-[28px] uppercase font-[Ampersand-Regular] flex items-center gap-2"
        >
          <img src={DownloadIcon} className="h-10 w-10" alt="resume" /> My
          Resume
        </a>
      </div>
    </div>
  );
};

export default Socials;

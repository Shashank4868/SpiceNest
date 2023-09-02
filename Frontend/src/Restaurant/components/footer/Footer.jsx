import React from "react";

import {
  AiFillInstagram,
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="mt-8 mb-12 w-[90%] m-auto">
      <hr style={{ color: "black" }} />
      <div className="flex flex-row mt-8 justify-between items-center">
        <div className="text-sm ">© 2023 by SpiceNest. All Rights Reserved</div>
        <div className="flex flex-row w-[30%] justify-between">
          <a
            href="https://www.instagram.com/shhhashank.__/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillInstagram size={30} />
          </a>
          <a
            href="https://github.com/Shashank4868"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub size={30} />
          </a>
          <a
            href="https://twitter.com/shashankrajjais"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillTwitterSquare size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/shashank-raj-0625331b7/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

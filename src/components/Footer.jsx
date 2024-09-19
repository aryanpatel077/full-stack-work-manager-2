import React from "react";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-indigo-800 text-white py-8 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">
          © {new Date().getFullYear()} BrandName. All rights reserved.
        </p>
        <div className="space-x-4 md:mt-0">
        <div className="flex items-center justify-center py-2 space-x-2 md:space-x-4 text-3xl">
            <a href="https://github.com/codezaryan">
              <FaSquareGithub />
            </a>
            <a href="https://www.linkedin.com/in/aryan-patel-se">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/aryan_patel2.0">
              <FaSquareInstagram />
            </a>
            <a href="https://x.com/codezaryan">
              <FaSquareXTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="h-42 bg-blue-600 mt-5">
      <div className="flex py-2 justify-around">
        <div className="text-center flex flex-col justify-center">
          <div>
            <h1 className="text-3xl">Welcome to work manager</h1>
            <p className="font-sm">
              Manage your tasks status and update!
            </p>
          </div>
          <div className="mt-2 font-sm">Copyright © 2024 designed by Aryan Patel</div>

        </div>
        <div className="text-center">
          <h1>Developer Contect</h1>
          <ul>
            <li>
              <a href="https://x.com/AryanPa67254968?t=Jg301gzMYZmboVd1MSLYQw&s=09">Twitter / X</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/aryan-patel-se">Linkedin</a>
            </li>
            <li>
              <a href="https://www.facebook.com/profile.php?id=100081099168043&mibextid=ZbWKwL">Facebook</a>
            </li>
            <li>
              <a href="https://www.instagram.com/aryan_patel2.0?igsh=OGQ5ZDc2ODk2ZA==">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

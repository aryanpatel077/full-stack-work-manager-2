"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="h-40 bg-blue-600 mt-5">
      <div className="flex p-5 justify-around">
        <div className="text-center flex flex-col justify-center">
          <h1 className="text-3xl">Welcome to work manager</h1>
          <p>
            Manage your work(tasks) status and update
          </p>
        </div>
        <div className="text-center">
          <h1>Important Links</h1>
          <ul>
            <li>
              <a href="/https://www.facebook.com/">Facebook</a>
            </li>
            <li>
              <a href="/https://www.youtube.com/">YouTube</a>
            </li>
            <li>
              <a href="/https://www.instagram.com/">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

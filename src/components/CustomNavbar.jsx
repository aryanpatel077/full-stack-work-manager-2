"use client";

import UserContext from "@/context/userContext";
import { logout } from "@/services/userService";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const CustomNavbar = () => {
  const context = useContext(UserContext);
  const router = useRouter();

  async function doLogout() {
    try {
      const result = await logout();
      console.log(result);
      context.setUser(undefined);
      router.push("/");
    } catch (error) {
      console.log(error);
      toast.error("Logout Error");
    }
  }

  return (
    <nav className="bg-blue-600 h-16 w-screen py-2 px-2 flex justify-between items-center">
      <div className="brand">
        <h1 className="text-2xl font-sans">
          <a href="/">Task Manager</a>
        </h1>
      </div>
      <div>
        <ul className="flex space-x-4 font-sans">
          {context.user && (
            <>
              <li>
                <Link href={"/"} className=" hover:text-blue-200 ">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/add-task" className="hover:text-blue-200">
                  Add Task
                </Link>
              </li>
              <li>
                <Link href={"/show-tasks"} className="hover:text-blue-200">
                  Show Tasks
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="font-sm font-sans">
        <ul>
          {context.user && (
            <>
              <div className="flex space-x-6 ml-4">
                <li>
                  <Link href={"#!"}>{context.user.name}</Link>
                </li>
                <li className="flex items-center">
                  <button onClick={doLogout}>Logout</button>
                </li>
              </div>
            </>
          )}

          {!context.user && (
            <div className="flex space-x-3 ">
              <>
                <li>
                  <Link href="/login">Login</Link>
                </li>
                <li>
                  <Link href="/signup">Signup</Link>
                </li>
              </>
            </div>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default CustomNavbar;

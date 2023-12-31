"use client";

import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";
import Link from "next/link";
import {
  MagnifyingGlassIcon,
  SunIcon,
  MoonIcon,
  UserIcon,
  CodeBracketSquareIcon,
} from "@heroicons/react/24/outline";

export default function Navbar() {
  const [theme, setTheme] = useState<string>("");
  const [user] = useAuthState(auth);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    const body = document.body;
    body.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    setTheme(localStorage.getItem("theme") || "light");
  }, []);

  return (
    <div className="navbar bg-base-100">
      <div className="flex-none">
        <button
          className="btn btn-ghost btn-square rounded-btn"
          onClick={toggleTheme}
        >
          {theme === "light" ? (
            <SunIcon className="md:w-6 md:h-6 w-4 h-4" />
          ) : (
            <MoonIcon className="md:w-6 md:h-6 w-4 h-4" />
          )}
        </button>
        {user ? (
          <Link href={`/users/${user.uid}`} prefetch={true}>
            <button className="btn btn-ghost btn-square rounded-btn">
              <div className="avatar md:w-6 md:h-6 w-4 h-4">
                <div className="rounded-full">
                  {user.photoURL ? (
                    <img className="w-full h-full" src={user.photoURL} />
                  ) : (
                    <span className='text-sm'>{user.displayName}</span>
                  )}
                </div>
              </div>
            </button>
          </Link>
        ) : (
          <Link href="/login" prefetch={true}>
            <button className="btn btn-ghost btn-square rounded-btn">
              <UserIcon className="md:w-6 md:h-6 w-4 h-4" />
            </button>
          </Link>
        )}
      </div>
      <div className="flex-1 items-center justify-center">
        <Link href="/" legacyBehavior>
          <a className="btn btn-ghost normal-case md:text-3xl text-xl">
            Positivity Board
          </a>
        </Link>
      </div>
      <div className="flex-none">
        <div className="flex flex-row items-center relative">
          <div className="md:block hidden absolute right-[100px]">
            <kbd className="kbd kbd-sm">ctrl</kbd>+
            <kbd className="kbd kbd-sm">k</kbd>
          </div>
          <button className="btn btn-square btn-ghost">
            <MagnifyingGlassIcon className="md:w-6 md:h-6 w-4 h-4" />
          </button>
          <a
            className="btn btn-square btn-ghost"
            href="https://github.com/Arrangedgodly/message-board"
            target="_blank"
          >
            <CodeBracketSquareIcon className="md:w-6 md:h-6 w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

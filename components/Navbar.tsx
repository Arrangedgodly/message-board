"use client";

import { useState, useEffect } from "react";
import {
  MagnifyingGlassIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";

export default function Navbar() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    const body = document.body;
    body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="navbar bg-base-100">
      <div className="flex-none">
        <button
          className="btn btn-ghost btn-sm rounded-btn"
          onClick={toggleTheme}
        >
          {theme === "light" ? (
            <SunIcon className="w-6 h-6" />
          ) : (
            <MoonIcon className="w-6 h-6" />
          )}
        </button>
      </div>
      <div className="flex-1 justify-center">
        <a className="btn btn-ghost normal-case text-3xl">Positivity Board</a>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <MagnifyingGlassIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

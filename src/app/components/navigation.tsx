"use client";

import { useState } from "react";

export default function Navigation() {
  const [displayMenu, setDisplayMenu] = useState(false);

  return (
    <nav className="p-8 text-right text-lg">
      <div className="max-sm:hidden">
        <a href="#" className="mr-4 inline tracking-tighter">
          HOME
        </a>
        <a href="#issues" className="dropdown mr-4 inline">
          THE ISSUES
        </a>

        <a href="#about" className="mr-4 inline tracking-tighter">
          ABOUT
        </a>
        <a href="#contact" className="mr-4 inline tracking-tighter">
          CONTACT
        </a>
      </div>
      <div className="hidden max-sm:block">
        <button
          onClick={() => setDisplayMenu(!displayMenu)}
          className="cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#FFFFFF"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </button>
        {displayMenu && (
          <>
            <div className="dropdown-content [&>*]:block [&>*]:leading-6">
              <a href="#" className="inline tracking-tighter">
          HOME
        </a>
        <a href="#issues" className="dropdown inline">
          THE ISSUES
        </a>

        <a href="#about" className="inline tracking-tighter">
          ABOUT
        </a>
        <a href="#contact" className="inline tracking-tighter">
          CONTACT
        </a>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

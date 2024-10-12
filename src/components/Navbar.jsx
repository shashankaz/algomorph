"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { account } from "@/app/appwrite";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const session = await account.get();
        setUser(session);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchUser();
  }, []);

  const logout = async () => {
    try {
      await account.deleteSession("current");
      setUser(null);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 font-medium fixed top-0 w-full backdrop-blur-lg z-10">
      <div className="hidden md:flex justify-between items-center h-16 border-b">
        <h1 className="w-48 lowercase">
          <Link href="/">Algomorph</Link>
        </h1>
        <ul className="flex gap-4">
          <li>
            <Link href="/algorithms">Algorithms</Link>
          </li>
          <li>
            <Link href="/playground">Playground</Link>
          </li>
          <li>
            <Link href="/api-docs">API Docs</Link>
          </li>
          <li>
            <Link href="/community">Community</Link>
          </li>
        </ul>
        {user ? (
          <div className="flex items-center justify-end gap-4 w-48">
            <button onClick={logout}>Sign out</button>
            <Link href="/profile">
              <button className="bg-gradient-to-b from-gray-700 hover:from-gray-600 to-gray-900 hover:to-gray-900 text-white px-4 py-1 rounded-lg flex gap-1 items-center">
                Profile
              </button>
            </Link>
          </div>
        ) : (
          <div className="flex items-center justify-end gap-4 w-48">
            <Link href="/sign-in">
              <button>Sign in</button>
            </Link>
            <Link href="/sign-up">
              <button className="bg-gradient-to-b from-gray-700 hover:from-gray-600 to-gray-900 hover:to-gray-900 text-white px-4 py-1 rounded-lg flex gap-1 items-center">
                Get started
              </button>
            </Link>
          </div>
        )}
      </div>

      {/* Mobile Navbar */}
      <div className="flex md:hidden items-center justify-between h-12">
        <h1 className="lowercase">
          <Link href="/">Algomorph</Link>
        </h1>
        <button onClick={() => setIsMenuOpen((prev) => !prev)}>
          <RxHamburgerMenu />
        </button>
      </div>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className="flex flex-col bg-white text-gray-700 border-t border-gray-300 absolute w-full z-10">
          <ul className="flex flex-col p-4">
            <li className="py-2">
              <Link href="/algorithms">Algorithms</Link>
            </li>
            <li className="py-2">
              <Link href="/playground">Playground</Link>
            </li>
            <li className="py-2">
              <Link href="/api">API Docs</Link>
            </li>
            <li className="py-2">
              <Link href="/community">Community</Link>
            </li>
            {user ? (
              <>
                <li className="py-2">
                  <button onClick={logout}>Sign out</button>
                </li>
                <li className="py-2">
                  <Link href="/profile">
                    <button className="bg-gradient-to-b from-gray-700 hover:from-gray-600 to-gray-900 hover:to-gray-900 text-white px-4 py-1 rounded-lg">
                      Profile
                    </button>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="py-2">
                  <Link href="/sign-in">
                    <button>Sign in</button>
                  </Link>
                </li>
                <li className="py-2">
                  <Link href="/sign-up">
                    <button className="bg-gradient-to-b from-gray-700 hover:from-gray-600 to-gray-900 hover:to-gray-900 text-white px-4 py-1 rounded-lg">
                      Get started
                    </button>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

"use client";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

const Navbar = () => {
  const { currentUser, logOut} = useAuth();
  console.log(currentUser)

  return (
    <nav className="main-nav">
      <Link href="/">
        <img src="/images/logo.png" alt="Logo" className="h-4 lg:h-7" />
      </Link>

      <Menu as="div" className="relative">
        <Menu.Button className="btn-profile">
          <img
            className="rounded-full w-8 h-8"
            src={currentUser?.photoURL || "/images/default-slate.png"}
          />
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="main-nav-menu">
            {!currentUser && (
              <>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      className={`${active && "bg-gray-100"} main-nav-link`}
                      href="/login"
                    >
                      Login
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      className={`${active && "bg-gray-100"} main-nav-link`}
                      href="/register"
                    >
                      Register
                    </Link>
                  )}
                </Menu.Item>
              </>
            )}

            {currentUser && (
              <>
                <Menu.Item>
                  {({ active }) => (
                    <Link className={`${active && "bg-gray-100"} main-nav-link`} href="/profile" >
                      Profile
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <span className={`${active && "bg-gray-100"} main-nav-link cursor-pointer`}
                    onClick={()=>logOut()}
                    >
                      Log out
                    </span>
                  )}
                </Menu.Item>
              </>
            )}
          </Menu.Items>
        </Transition>
      </Menu>
    </nav>
  );
};

export default Navbar;

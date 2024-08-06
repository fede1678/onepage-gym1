"use client";

import { Container } from "./container";
import { Logo } from "./logo";
import { Mainmenu } from "./main-menu";
import { RiMenu3Line } from "react-icons/ri";
import { Menumobile } from "./menu-mobile";
import { useState } from "react";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header className="fixed left-0 top-0 w-full p-5 z-40 bg-black">
        <Container className="flex items-center justify-between w-4/5 mx-auto">
          <section>
            <Logo />
          </section>
          <section className="hidden lg:block">
            <Mainmenu />
          </section>
          <section className="lg:hidden">
            <button
              type="button"
              onClick={() => setShowMenu(true)}
              className="text-white"
            >
              <RiMenu3Line size={24} />
            </button>
          </section>
        </Container>
      </header>
      <Menumobile isOpen={showMenu} onClose={() => setShowMenu(false)} />
    </>
  );
};

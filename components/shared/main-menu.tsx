import { Buttonprimary } from "@/components/ui/button-primary";

export const Mainmenu = () => {
  return (
    <ul className="flex flex-col lg:flex-row items-center gap-4">
      <li>
        <a
          href="#home"
          className="py-2 px-4 border-b-2 border-primary transition-colors duration-300 text-white"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#services"
          className="py-2 px-4 border-b-2 border-transparent hover:border-primary transition-colors duration-300 text-white"
        >
          Services
        </a>
      </li>
      <li>
        <a
          href="#about"
          className="py-2 px-4 border-b-2 border-transparent hover:border-primary transition-colors duration-300 text-white"
        >
          About
        </a>
      </li>
      <li>
        <Buttonprimary type="button" text="Joint us" className="" />
      </li>
    </ul>
  );
};

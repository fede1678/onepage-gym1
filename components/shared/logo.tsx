import Link from "next/link";
import { SiOpenaigym } from "react-icons/si";

export const Logo = () => {
  return (
    <Link
      href="#home"
      className="flex items-center space-x-2 text-white text-2xl font-bold hover:text-gray-300"
    >
      <SiOpenaigym className="text-primary text-3xl" /> <span>GYM</span>
    </Link>
  );
};

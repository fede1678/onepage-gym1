import { cn } from "@/libs/utils";
import { Mainmenu } from "./main-menu";
import { FC } from "react";

interface MenuMobileProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Menumobile: FC<MenuMobileProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <div
        className={cn(
          "fixed left-0 top-0 w-[73%] h-full sm:w-[40%] z-50 bg-black flex items-center justify-center transition-all duration-300 ease-in-out",
          !isOpen ? "-left-full" : "left-0"
        )}
      >
        <Mainmenu />
      </div>
      <div
        onClick={onClose}
        className={cn(
          "fixed left-0 top-0 w-full h-full bg-black/30 z-40",
          !isOpen ? "hidden" : "block"
        )}
      />
    </>
  );
};

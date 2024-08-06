import { link } from "fs";
import { FC } from "react";

interface SectionProps {
  title: string;
  list: string[];
}

export const Section: FC<SectionProps> = ({ title, list }) => {
  return (
    <div>
      <section>
        <h5 className="text-xl font-semibold text-white mb-5">{title}</h5>
        <ul>
          {list.map((link, index) => (
            <li key={index} className="mb-2">
              {link}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

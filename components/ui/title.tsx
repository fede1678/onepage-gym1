import { FC } from "react";

interface TitleProps {
  title: string;
  titlePrimary: string;
}

export const Title: FC<TitleProps> = ({ title, titlePrimary }) => {
  return (
    <h1 className=" text-4xl flex flex-col sm:flex-row items-center gap-2 text-white font-semibold mb-14">
      {title}
      <span className="text-primary">{titlePrimary}</span>
    </h1>
  );
};

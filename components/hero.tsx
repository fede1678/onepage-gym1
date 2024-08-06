import Image from "next/image";
import { Container } from "./shared/container";
import { Buttonprimary } from "./ui/button-primary";

export const Hero = () => {
  return (
    <section id="home">
      <div className="relative w-full h-screen">
        <Image
          src="/images/hero.jpg"
          alt="Hero"
          fill
          className=" object-cover"
        />
        <Container>
          <div className="absolute bg-gradient-to-tr from-black to-transparent left-0 top-0 w-full h-full" />
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 lg:left-28 -translate-x-1/2 lg:translate-x-0 space-y-10">
            <h1 className="text-white text-6xl md:text-7xl lg:text-6xl  font-semibold text-center lg:text-left">
              Your body <br /> Will transform
            </h1>
            <p className="text-gray-500 md:text-2xl lg:text-lg text-center lg:text-left">
              We are commited to helping you transform your life <br /> as part
              of our commitmentto you.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Buttonprimary
                type="button"
                text="Get started"
                className="w-full"
              />
              <Buttonprimary
                type="button"
                text="Watch reviews"
                className=" border-2 border-primary bg-transparent w-full"
              />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

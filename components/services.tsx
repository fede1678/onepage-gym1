import { Title } from "@/components/ui/title";
import { Container } from "./shared/container";
import { Service } from "@/components/ui/service";

export const Services = () => {
  return (
    <section
      id="services"
      className="min-h-screen items-center justify-center lg:mt-24 pt-20 "
    >
      <Container>
        <div className=" md:ml-8 lg:ml-16 ">
          <Title title="Fitness Plans &" titlePrimary="Nutritions" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  ">
          <Service
            image="/icons/icon-1.png"
            title="Weight Loss"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, odio."
          />
          <Service
            image="/icons/yoga.png"
            title="Classic Yoga"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, odio."
          />
          <Service
            image="/icons/cycling.png"
            title="Cycling"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, odio."
          />
          <Service
            image="/icons/body.png"
            title="Body Building"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, odio."
          />
          <Service
            image="/icons/musculation.png"
            title="Musculation"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, odio."
          />
          <Service
            image="/icons/running.png"
            title="Fitness Running"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, odio."
          />
        </div>
      </Container>
    </section>
  );
};

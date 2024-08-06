import { Container } from "@/components/shared/container";
import { Logo } from "@/components/shared/logo";
import { Section } from "./components/section";
import { Tag } from "@/components/ui/tag";

export const Footer = () => {
  return (
    <div className="lg:pt-52">
      <footer className="bg-gray-light/15">
        <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 mb-10 px-5 py-10 lg:px-8 lg:py-20">
          <Logo />
          <Section title="Company" list={["About", "Carrer", "Blogs"]} />
          <Section title="Company" list={["Help / FAQ", "Press"]} />
          <Section title="More" list={["Program", "Plan", "Method"]} />
          <section>
            <h5 className="text-xl font-semibold text-white mb-5">
              Popular tags
            </h5>
            <div className="flex items-center gap-2 flex-wrap">
              <Tag text="Abs" />
              <Tag text="Workou" />
              <Tag text="Nutrition" />
              <Tag text="Boxing" />
              <Tag text="Gym" />
              <Tag text="Facilities" active />
              <Tag text="Plans" />
              <Tag text="Trainers" />
            </div>
          </section>
        </Container>
        <div className="bg-primary p-5 text-white text-center">
          <h5>&copy; 2024 All Rights Reserved</h5>
        </div>
      </footer>
    </div>
  );
};

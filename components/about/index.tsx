import { Container } from "@/components/shared/container";
import { Title } from "@/components/ui/title";
import { SectionList } from "./sections/section-list";
import { SectionIamges } from "./sections/section-iamges";

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen items-center justify-center lg:mt-24 pt-20"
    >
      <Container>
        <div className="md:ml-8 lg:ml-16 pt-10">
          <Title title="Whi Join With" titlePrimary="Us?" />
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <SectionList />
          <SectionIamges />
        </div>
      </Container>
    </section>
  );
};

import { Container } from "@/components/shared/container";
import { Title } from "@/components/ui/title";
import { Plan } from "@/components/ui/plan";

export const Plans = () => {
  return (
    <section
      id="plans"
      className="min-h-screen items-center justify-center lg:mt-16"
    >
      <Container>
        <div className="md:ml-8 lg:ml-16 pt-40">
          <Title title="Subscribe To" titlePrimary="Plans" />
        </div>
        <div className="md:ml-8 lg:mr-20 lg:pt-10 flex flex-col lg:flex-row items-center lg:justify-center space-y-8 lg:space-y-0 space-x-0 lg:space-x-8">
          <Plan name="Standard" duration={6} price={4800} priceMonth={800} />
          <Plan
            name="Fitness"
            duration={12}
            price={7200}
            priceMonth={600}
            active
          />
          <Plan
            name="Enterprise"
            duration={24}
            price={12000}
            priceMonth={500}
          />
        </div>
      </Container>
    </section>
  );
};

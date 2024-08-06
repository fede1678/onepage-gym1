import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Plans } from "@/components/plans";
import { Trainers } from "@/components/trainers";
import { About } from "@/components/about";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Plans />
      <Trainers />
      <About />
    </div>
  );
}

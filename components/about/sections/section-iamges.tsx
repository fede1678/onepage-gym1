import Image from "next/image";

export const SectionIamges = () => {
  return (
    <section className="flex-1 relative">
      <div className="lg:absolute -top-40 left-8">
        <div className="relative mb-5 w-[80vw] lg:w-48 h-72">
          <Image
            src="/images/trainer-6.png"
            alt="Trainer"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </div>

      <div className="lg:absolute top-0 right-28">
        <div className="relative mb-5 w-[80vw] lg:w-48 h-72">
          <Image
            src="/images/trainer-5.png"
            alt="Trainer"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </div>

      <div className="lg:absolute top-40 left-16">
        <div className="relative mb-5 w-[80vw] lg:w-64 h-72 lg:h-48">
          <Image
            src="/images/trainer-3.png"
            alt="Trainer"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </div>

      <div className="lg:absolute -top-56 right-36">
        <div className="relative mb-5 w-[80vw] lg:w-64 h-72 lg:h-48">
          <Image
            src="/images/trainer-4.png"
            alt="Trainer"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

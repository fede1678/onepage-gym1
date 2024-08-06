import { Buttonprimary } from "@/components/ui/button-primary";
import { cn } from "@/libs/utils";
import { FC } from "react";

interface PlanProps {
  name: string;
  duration: number;
  price: number;
  priceMonth: number;
  active?: boolean;
}

export const Plan: FC<PlanProps> = ({
  name,
  duration,
  price,
  priceMonth,
  active,
}) => {
  return (
    <div
      className={cn(
        "lg:ml-14  lg:w-80 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 p-5 rounded-lg flex flex-col items-center gap-y-3 shadow-lg hover:shadow-xl transition-shadow duration-300",
        active && "relative border-2 border-primary"
      )}
    >
      {active && (
        <div className="absolute bg-primary text-white py-2 px-4 -top-5 left-1/2 -translate-x-1/2 rounded-md">
          <h5>Recomended</h5>
        </div>
      )}

      <h2 className="text-3xl text-white font-medium">{name}</h2>
      <h3 className="text-gray-300">{duration} Month plan</h3>
      <h1 className="text-3xl font-semibold text-white">$ {price}</h1>
      <h3 className="text-gray-300">{priceMonth}/Month</h3>
      <Buttonprimary
        type="button"
        text="Select Plan"
        className="border-2 border-primary bg-transparent hover:bg-primary hover:text-white w-56 transition-colors duration-300"
      />
    </div>
  );
};

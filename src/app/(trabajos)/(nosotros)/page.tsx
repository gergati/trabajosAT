import {
  CardDescription,
  CardTitle,
} from "@/components/ui/card"
import { Header } from "./ui/Header";
import { Mision } from "./ui/Mision";
import { TrabajosUi } from "./ui/TrabajosUi";
import { BentoGridUI } from "./ui/BentoGridUI";
import { SectionGradient } from "./ui/SectionGradient";



export default function TrabajosPage() {
  return (

    <div className="w-full min-h-screen">
      <div className="bg-[#DEF4FC] mx-4 rounded-t-3xl -mt-[50px] h-[800px]">
        <Header />
      </div>
      <div className="relative min-h-screen w-[90%] m-auto">
        <div className="absolute z-[29] md:-top-[280px] -top-[80px] md:left-[100px] h-[200px] blur-3xl antialiased bg-gradient-to-br from-sky-600 via-blue-600 to-neutral-500 w-[85%] m-auto rounded-lg"></div>
        <Mision />
      </div>

      {/* <div>
        <TrabajosUi />
      </div> */}

      <div className="min-h-screen md:w-full w-[90%] m-auto top-[100px]">
        <SectionGradient />
      </div>

      {/* <div className="mt-52 md:mt-0 w-[90%] m-auto">
        <BentoGridUI />
      </div> */}
    </div>
  );
}
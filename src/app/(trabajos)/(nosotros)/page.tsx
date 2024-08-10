import {
  CardDescription,
  CardTitle,
} from "@/components/ui/card"
import { Header } from "./ui/Header";
import { Mision } from "./ui/Mision";
import { TrabajosUi } from "./ui/TrabajosUi";
import { BentoGridUI } from "./ui/BentoGridUI";



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
        <div className="mt-[230px] md:mt-[20px] flex flex-col justify-center">
          <CardTitle className=" text-2xl mt-28 md:mt-8">Completa con tus datos</CardTitle>
          <CardDescription className="text-[14px]">Llena nuestro formulario para buscar un profesional a tu medida.</CardDescription>
        </div>
        <div className="md:left-[400px] md:top-[1460px] left-[100px] top-[270vh] absolute h-[500px] md:h-[300px] blur-3xl antialiased bg-gradient-to-br from-sky-600 via-blue-600 to-neutral-500 w-[20%] m-auto rounded-lg"></div>
        <TrabajosUi />
      </div>

      <div className="mt-52 md:mt-0 w-[90%] m-auto">
        <BentoGridUI />
      </div> */}
    </div>
  );
}
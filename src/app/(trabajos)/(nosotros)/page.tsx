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
    <div className="w-full">
      <div className="mt-[120px] w-full md:w-[80%] m-auto">
        <div className="text-center m-auto border-none bg-none ">
          <Header />
        </div>
        <div className="relative min-h-screen w-[90%] m-auto">
          <div className="absolute z-[29] md:mt-28 mt-36 h-[200px] blur-3xl antialiased bg-gradient-to-br from-sky-600 via-blue-600 to-neutral-500 w-[50%] m-auto rounded-lg"></div>
          <Mision />
          <div className="md:left-[700px] left-[300px] top-[450px] md:top-[400px] absolute h-[200px] blur-3xl antialiased bg-gradient-to-br from-sky-600 via-blue-600 to-neutral-500 w-[20%] m-auto rounded-lg"></div>
        </div>

        <div>
          <div className="mt-[230px] md:mt-[20px] flex flex-col justify-center">
            <CardTitle className=" text-2xl mt-28 md:mt-8">Completa con tus datos</CardTitle>
            <CardDescription className="text-[14px]">Llena nuestro formulario para buscar un profesional a tu medida.</CardDescription>
          </div>
          <div className="md:left-[400px] md:top-[1460px] left-[100px] top-[270vh] absolute h-[500px] md:h-[300px] blur-3xl antialiased bg-gradient-to-br from-sky-600 via-blue-600 to-neutral-500 w-[20%] m-auto rounded-lg"></div>
          <TrabajosUi />
        </div>

        <div className="mt-52 md:mt-0 w-[90%] m-auto">
          <BentoGridUI />
        </div>
      </div>
    </div>
  );
}

'use client'
import { CardContent, CardHeader} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";


export default function Loading() {
  // await sleep(4)
  return (
    <div className="mt-20 min-h-screen grid grid-cols-1 w-[90%] md:w-[70%] m-auto gap-3">
      <div className="md:h-[250px] h-[450px] w-full shadow-lg">
        <CardHeader className="flex h-[90px] w-full mb-12 md:mb-0">
          <div className="flex md:flex-row flex-col md:justify-between items-start gap-2">
            <div className="flex flex-col">
              <Skeleton className="md:w-[40%]" />
              <Skeleton className="w-[100px]" />
            </div>
            <div className="flex md:flex-row gap-2 justify-start">
              <Skeleton className="md:h-10 hidden md:w-48 md:inline-flex gap-2 w-full" />
              <Skeleton className="md:h-10 hidden md:w-48 md:inline-flex gap-2 w-full" />
              <Skeleton className="md:h-10 hidden md:w-48 md:inline-flex gap-2 w-full" />
            </div>
            <div className="md:hidden flex flex-row gap-4 mt-2 ">
              <Skeleton className="text-center" />
              <Skeleton className="text-center" />
              <Skeleton className="text-center" />
            </div>
          </div>
        </CardHeader>
        <Separator className="w-[95%] m-auto mt-20 md:mt-2 " />
        <CardContent className="flex flex-col mt-4 md:flex-row h-full md:gap-2">
          <Skeleton className="flex md:h-28 justify-center gap-2 flex-col w-full text-sm" />
          <Skeleton className="flex mt-6 md:mt-0 md:h-28 flex-col w-full text-sm" />
          <Separator orientation="vertical" className="hidden" />
        </CardContent>
      </div>
    </div>
  );
}
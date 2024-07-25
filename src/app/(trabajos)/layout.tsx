import { Footer, TopMenu } from "@/components";

export default function TrabajosLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="w-full min-h-screen bg-[#EDF7F5] dark:bg-[#020817]">
            <div className=" m-auto relative ">
                <div className="z-[99] sticky top-6">
                    <TopMenu />
                    <div className="w-[90%] md:left-[183px] left-[22px] md:w-[70%] md:-top-[1px] -top-[0.5px] z-[80] h-[60px] absolute dark:bg-[hsla(0,0%,93%,0.72)] bg-[#8cbbdf] px-2 sm:px-4 md:py-2.5 rounded-full m-auto blur-2xl "></div>
                </div>
                <div>
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    );
}
import { Footer, TopMenu } from "@/components";

export default function TrabajosLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="w-full min-h-screen bg-[#EDF7F5]">
            <div className="relative">
                <div className="z-[99] sticky top-6 ">
                    <TopMenu />
                </div>
                <div>
                    {children}
                    <Footer />
                </div>
            </div>
        </div>
    );
}
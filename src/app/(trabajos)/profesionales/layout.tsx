import { Sidebar } from "@/components";


export default function ProfesionalesLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="md:w-[70%] w-[90%] m-auto grid md:grid-cols-4 grid-cols-1 mt-20">
            <Sidebar />
            <div className="col-span-3 border-[#eee9fe] bg-[#F7F5FF] ml-1 rounded">
                {children}
            </div>
        </div>
    );
}
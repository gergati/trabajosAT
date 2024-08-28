'use client'
import Link from "next/link"
import { usePathname } from "next/navigation";

interface Props {
    icon: React.ReactNode;
    path: string;
    title: string;
}

export const SidebarItem = ({ icon, path, title }: Props) => {
    const pathName = usePathname()
    return (
        <li>
            <Link href={path} className={`w-full flex gap-2 hover:bg-gray-200 h-10 m-auto items-center text-start justify-start rounded-md
                ${path === pathName ? 'text-white bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-blue-500 via-blue-600 to-blue-700' : ''} 
            `}>
                {icon}
                <span>{title}</span>
            </Link>
        </li>
    )
}

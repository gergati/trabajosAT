'use client'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Badge } from "../badge";
import { obtenerNombre } from "@/utils";
import { useSession } from "next-auth/react";

interface Props {
    name: string;
    email: string;
    image?: string;
}

export const UserCard = ({ name, email, image }: Props) => {
    const session = useSession()
    const init = session.data?.user
    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <a className="dark:text-white cursor-pointer">
                    <span className="underline text-xs">
                        {name}
                    </span>
                </a>
            </HoverCardTrigger>
            <HoverCardContent className="">
                <div className="flex space-x-4">
                    <Avatar className="">
                        <AvatarImage src={image} />
                        <AvatarFallback>{obtenerNombre(name)}</AvatarFallback>
                    </Avatar>
                    <div className="dark:text-white">
                        <h4 className="text-sm font-semibold">{name}</h4>
                        <p className="text-sm">
                            {
                                init ? `${email}` : <p className="text-xs text-gray-300 mt-2">No estas logueado...</p>
                            }
                        </p>
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    )
}

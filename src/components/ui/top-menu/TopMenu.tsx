'use client';

import Image from "next/image";
import Link from "next/link"
import { useSession } from 'next-auth/react'
import { Profile } from "../profile/Profile";
import { Button } from "../button";
import { OpenMenu } from "../open-menu/OpenMenu";
import { DropMenu } from "../drop-menu/DropMenu";
import { usePathname } from "next/navigation";
import { BriefcaseBusiness, Flame, Home } from "lucide-react";


export const TopMenu = () => {

  const { data: session } = useSession()
  const isAuthenticated = !!session?.user
  const isAdmin = session?.user.role === 'admin'
  const pathname = usePathname()


  return (
    <nav className="w-[90%] md:w-[70%] z-[99] h-[60px] relative bg-transparent backdrop-blur-xl border border-gray-800/50 dark:border-gray-400 md:px-2 px-4  rounded-full m-auto">

      <div className="flex justify-between items-center">
        <div>
          <Link
            href="/"
            className=""
          >
            <div className="flex">
              <Image src={"/icon/logo-icon.png"} alt="Icon logo trabajosAT" width={56} height={56} className="w-14 h-14"/>
              <span className=" dark:text-black self-center text-2xl font-semibold whitespace-nowrap hidden md:block">
                TrabajosAT
              </span>
            </div>

          </Link>
        </div>

        <div className="flex items-center">
          <span
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden"
            id="menu-toggle"
          >
            <OpenMenu />

            <DropMenu />
          </span>
        </div>

        <div className="w-full md:inline-flex md:w-auto hidden">
          <ul className="flex transition-all flex-col items-center justify-center mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <Button className="dark:hover:bg-[hsla(0,0%,93%,0.72)]" variant='ghost'>
                <Link
                  aria-current="page"
                  className={`flex items-center gap-2 justify-center py-2 pr-4 text-lg pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 ${pathname === '/' ? 'text-blue-400' : 'dark:text-white'}`}
                  href='/'
                >
                  <Home className="size-6" />
                  Nosotros
                </Link>
              </Button>
            </li>
            <li>
              <Button className="dark:hover:bg-[hsla(0,0%,93%,0.72)]" variant='ghost'>
                <Link
                  aria-current="page"
                  className={`flex justify-center gap-2 py-2 pr-4 pl-3 border-b text-lg border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 ${pathname === '/trabajos' ? 'text-blue-400' : 'dark:text-white'}`}
                  href='/trabajos'
                >
                  <BriefcaseBusiness />
                  Trabajos
                </Link>
              </Button>
            </li>
            {
              isAdmin && (
                <>
                  <li>

                    <Button className="dark:hover:bg-[hsla(0,0%,93%,0.72)]" variant='ghost'>
                      <Link
                        aria-current="page"
                        className={`flex justify-center gap-2 text-lg py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 ${pathname === '/publicar' ? 'text-blue-400' : 'dark:text-white'}`}
                        href='/publicar'
                      >
                        <Flame />
                        Publicar
                      </Link>
                    </Button>
                  </li>
                </>
              )
            }
            {
              isAuthenticated && (
                <div className="text-center items-center justify-between flex m-auto">
                  <Profile />
                </div>
              )
            }

            <li>
              {
                !isAuthenticated && (
                  <Button className=" bg-gradient-to-r from-sky-400 to-blue-500" variant='ghost'>
                    <Link
                      aria-current="page"
                      className="flex uppercase justify-center gap-2 py-2 pr-4 text-sm pl-3 dark:text-white text-black hover:text-gray-800 border-b border-gray-100 md:border-0 "
                      href='/auth/login'
                    >
                      Ingresar
                    </Link>
                  </Button>
                )
              }
            </li>

            <div>
              <DropMenu />
            </div>
          </ul>
        </div>
      </div>
    </nav >
  )
}

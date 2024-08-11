'use client';

import Image from "next/image";
import Link from "next/link"
import { useSession } from 'next-auth/react'
import { Profile } from "../profile/Profile";
import { Button } from "../button";
import { OpenMenu } from "../open-menu/OpenMenu";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";


export const TopMenu = () => {

  const [scrollNavbar, setScrollNavbar] = useState(false)
  const { data: session } = useSession()
  const isAuthenticated = !!session?.user
  const isAdmin = session?.user.role === 'admin'
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setScrollNavbar(true);
      } else {
        setScrollNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <nav className={`w-[90%] z-[99] h-[55px] relative border border-[#FFFFFF] bg-[#F7F5FF] rounded-lg m-auto ${scrollNavbar ? 'md:w-[50%]' : 'md:w-[50%]'}`}>

      <div className="flex justify-between items-center bg-[#F7F5FF] rounded-lg">
        <div>
          <Link href="/" className="">
            <div className="flex items-center">
              <Image
                src="/icon/logo-icon.png"
                alt="Icon logo trabajosAT"
                width={56}
                height={56}
                className="w-12 h-12 transition-transform duration-300 ml-2"
              />
              <span
                className={`transition-all transform duration-300 ${scrollNavbar ? 'transform -translate-x-10 opacity-0' : 'transform translate-x-0 opacity-100'
                  } text-lg font-semibold whitespace-nowrap hidden md:block`}
              >
                TrabajosAT
              </span>
            </div>
          </Link>
        </div>
        <div className={`transition-all transform duration-300 h-[50%] m-auto w-[1px] bg-[#b9b8bf] absolute ${scrollNavbar ? 'md:left-[100px] md:-translate-x-10 translate-x-20' : 'md:left-[200px] md:translate-x-0 translate-x-20'}`}></div>

        <div className="flex items-center">
          <span
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden"
            id="menu-toggle"
          >
            <OpenMenu />
          </span>
        </div>

        <div className="w-full md:inline-flex md:w-auto hidden">
          <ul className="flex transition-all flex-col items-center justify-center md:flex-row md:space-x-8 md:text-sm md:font-medium">
            <li>
              <Button className="" variant='ghost'>
                <Link
                  aria-current="page"
                  className={`flex justify-center items-center gap-2 py-2 pr-4 pl-3 border-b text-sm border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#003791] md:p-0 ${pathname === '/' ? 'text-[#003791]' : 'text-black'}`}
                  href='/'
                >
                  <span>Nosotros</span>
                </Link>

              </Button>
            </li>
            <li>
              <Button className="" variant='ghost'>
                <Link
                  className={`flex justify-center items-center gap-2 py-2 pr-4 pl-3 border-b text-sm border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#003791] md:p-0 ${pathname === '/trabajos' ? 'text-[#003791]' : 'text-black'}`}
                  href='/trabajos'
                >
                  <span>Trabajos</span>
                </Link>
              </Button>

            </li>
            {
              isAdmin && (
                <>
                  <li>

                    <Button className="" variant='ghost'>
                      <Link
                        aria-current="page"
                        className={`flex justify-center gap-2 text-sm py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#003791] md:p-0 ${pathname === '/publicar' ? 'text-[#003791]' : 'text-black'}`}
                        href='/publicar'
                      >
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
                  <div className="flex">
                    <Button className="mr-2" variant={'ghost'}>
                      <Link
                        aria-current="page"
                        className={`flex leading-5 justify-center gap-2 py-2 pr-4 text-sm pl-3`}
                        href='/auth/login'>
                        Iniciar sesión
                      </Link>
                    </Button>
                    <span
                      className={`transition-all transform duration-300 border mr-5 border-[#f4f1fb] shadow-sm text-[#003791] rounded-lg ${scrollNavbar ? 'transform md:inline-block translate-x-0' : 'transform md:hidden translate-x-10 '}`}
                    >
                      <Link
                        aria-current="page"
                        className={`flex leading-5 justify-center gap-2 py-2 pr-4 text-sm pl-3`}
                        href='/auth/new-account'>
                        Registrate
                      </Link>
                    </span>
                  </div>
                )
              }
            </li>

            {/* <div>
              <DropMenu />
            </div> */}
          </ul>
        </div>
      </div>
    </nav >
  )
}

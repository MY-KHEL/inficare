"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { MenuIcon, X } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

interface INavLinks {
  title: string;
  href: string;
}
// might considering changing interface to type in the future

export function NavBar() {
  const navLinks: INavLinks[] = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Find Doctor",
      href: "/",
    },
    {
      title: "How It Works",
      href: "/",
    },
  ];

  return (
    <nav className="py-2.5 bg-white max-md:rounded-b-[10px] md:rounded-b-[15px] fixed w-full max-w-[100dvw] z-50 flex justify-between px-5 xl:px-22.5 items-center">
      <h1 className="font-bold text-xl md:text-2xl  xl:text-3xl leading-[100%]  bg-linear-to-b bg-clip-text text-transparent from-[#2563EB] to-[#14B8A6] ">
        Infi-Care
      </h1>
      <div className=" hidden md:flex gap-12.5 items-center">
        {navLinks.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className="text-[#061a46] font-medium text-[14px] xl:text-lg leading-[145%]"
          >
            {link.title}
          </Link>
        ))}
      </div>
      <div className="hidden md:flex items-center">
        <Link
          href={"/"}
          className="font-semibold px-[38.5px] max-lg:text-[14px] text-[#2563EB] leading-[145%] "
        >
          {" "}
          Login
        </Link>
        <Button className="bg-[#2563EB] p-6.5 max-lg:py-2.5 max-lg:px-6  rounded-[10px] lg:rounded-[15px] max-lg:text-[14px] w-fit cursor-pointer">
          Get Started
        </Button>
      </div>
{/* mobile navigation*/}
      <Sheet>
        <SheetTrigger className={"max-md:flex md:hidden"}>
          <MenuIcon width={24} height={24} color="black" />
        </SheetTrigger>
        <SheetContent
          showCloseButton={false}
          className="bg-white flex justify-between flex-col pb-30"
        >
          <div className=" flex flex-col gap-12">
          <SheetHeader className="flex flex-row items-center justify-between px-5 py-3.75 border-b border-[#8E98A899]">
            <h1 className="font-bold text-[20px] leading-[100%]  bg-linear-to-b bg-clip-text text-transparent from-[#2563EB] to-[#14B8A6] ">
              Infi-Care
            </h1>
            <SheetClose>
              {" "}
              <X color="black " size={30} />
            </SheetClose>
          </SheetHeader>
         <div className=" flex flex-col gap-12.5 items-center">
        {navLinks.map((link, index) => (
          <SheetClose className={"w-full"} key={index}>
          <Link
            href={link.href}
            
            className="text-[#061a46] font-medium text-[14px] xl:text-lg leading-[145%]"
          >
            {link.title}
          </Link>
          </SheetClose>
        ))}
      </div>
      </div>
          <div className="flex flex-col items-center w-full gap-2.5  border-t-[0.5px] border-[#8E98A899] px-[23px] py-5">
            <SheetClose className={"w-full"}>
              <Link
                href={"/"}
                className="font-semibold py-6 text-[14px] text-[#2563EB] leading-[145%] "
              >
                Login
              </Link>
            </SheetClose>
            <SheetClose  className="bg-[#2563EB] text-white rounded-[15px] py-[10px] text-[16px] w-full cursor-pointer">
                Get Started
            
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}

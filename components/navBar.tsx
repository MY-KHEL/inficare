import Link from "next/link";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

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
      <h1 className="font-bold text-xl  xl:text-3xl leading-[100%]  bg-linear-to-b bg-clip-text text-transparent from-[#2563EB] to-[#14B8A6] ">Infi-Care</h1>
      <div className=" hidden md:flex gap-12.5 items-center">
        {navLinks.map((link, index) => (
          <Link href={link.href} key={index} className="text-[#061a46] font-medium text-lg leading-[145%]">
            {link.title}
          </Link>
        ))}
      </div>
      <div className="hidden md:flex items-center">
            <Link href={'/'} className="font-semibold px-[38.5px] text-[#2563EB] leading-[145%] "> Login</Link>
            <Button className="bg-[#2563EB] p-6.5 rounded-[15px] w-fit cursor-pointer">Get Started</Button>
      </div>

      <div className="max-md:flex md:hidden">
        <MenuIcon width={24} height={24} color="black" />
      </div>
    </nav>
  );
}

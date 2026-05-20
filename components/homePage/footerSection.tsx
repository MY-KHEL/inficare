"use client"
import Link from "next/link";
import {
  CrossIcon,
  FaceBookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "../ui/icons";
import { Button, Heading, Paragraph } from "../ui/typography";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { start } from "repl";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger)
export function FooterSection() {
  const headingRef = useRef<HTMLHeadingElement | null> (null)
  const textRef =useRef<HTMLParagraphElement | null>(null)
  const formRef =useRef<HTMLDivElement | null> (null)
  const footerRef = useRef<HTMLDivElement| null>(null)
    const year = new Date().getFullYear();
  const SocialIcons = [
    {
      href: "/",
      icon: <FaceBookIcon />,
    },
    {
      href: "/",
      icon: <TwitterIcon />,
    },
    {
      href: "/",
      icon: <InstagramIcon />,
    },
    {
      href: "/",
      icon: <LinkedInIcon />,
    },
    
  ];

  useGSAP(()=>{
     const tl = gsap.timeline({
        scrollTrigger:{
            trigger:headingRef.current,
            start:"top 80%",
            end: "+=200",
            scrub:true,
            // markers:true
          
        }
      })


      tl.fromTo(
        headingRef.current,{
          opacity:0,
          x:-200
        },
        {
          opacity:1,
          x:0
        }
      ).fromTo(
        textRef.current,{
          opacity:0,
          x:200
        },
        {
          opacity:1,
          x:0
        }).fromTo(
        formRef.current,{
          opacity:0,
          y:20
        },
        {
          opacity:1,
          y:0
        }).fromTo(
        footerRef.current,{
          opacity:0,
          y:20
        },
        {
          opacity:1,
          y:0
        })


  },[])
  return (
    <section className=" bg-white">
      <div className="md:px-22.5 px-5 md:py-16 py-[41px] w-full flex gap-7.5 flex-col md:gap-8 items-center">
        <div className=" max-w-[353px] md:max-w-[384px] flex flex-col gap-2.5 md:gap-3">
          <h1 className="text-[20px] md:text-[24px] text-center font-semibold text-[#061A46]" ref={headingRef}>
            Subscribe to our newsletter
          </h1>
          <Paragraph className="text-center max-md:text-[12px] text-[14px]" ref={textRef}>
            InfiCare connects you to trusted doctors and helps you manage your
            health anytime, anywhere.
          </Paragraph>
        </div>
        <div className="flex w-full items-center justify-center " ref={formRef}>
          <form action="" className="flex w-full justify-center  max-md:flex-col gap-4 items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded-[6px] w-full py-4.5 md:max-w-[398px] px-4 border border-[#D0D5DD] outline-none"
            />
            <Button className="w-full md:max-w-[149px]">Subscribe</Button>
          </form>
        </div>
      </div>
      <div className="md:border-t-2 flex flex-col justify-between gap-4 md:gap-16 w-full md:border-[#E4E7EC] max-md:pb-12.5 md:pt-[32px] md:pb-[61px] md:px-[90px]" ref={footerRef}>
        <div className="flex max-md:flex-col w-full gap-4.5 justify-between items-center">
          <div className="flex gap-2.5  items-center">
            <CrossIcon />
            <h1 className="font-bold text-3xl leading-[100%]  bg-linear-to-b bg-clip-text text-transparent from-[#2563EB] to-[#14B8A6] ">
              Infi-Care
            </h1>
          </div>
          <div className="flex max-md:flex-col gap-4.5 w-fit  items-center  md:gap-14">
            <FooterLinkTemplate
              title="Contact Us"
              content={
                <Link
                  href="mailto:Hello@infi-care.com"
                  className="text-[#2563EB] max-md:text-[10px] font-medium"
                >
                  Hello@infi-care.com
                </Link>
              }
            />

            <FooterLinkTemplate
              title="Follow us"
              content={
                <div className="flex gap-2  items-center">
                  {SocialIcons.map((icons, index) => (
                    <Link href={icons.href} key={index} className="p-1.5 aspect-square flex justify-center items-center rounded-full  bg-[#2563eb]">
                        {icons.icon}
                    </Link>
                  ))}
                </div>
              }
            />
          </div>
        </div>
        <div className="flex  gap-2.5 md:justify-between justify-center items-center px-5 ">
                <div className="flex items-center max-md:text-[10px]">
                    <Link href={'/'} className="text-[#64748B] md:font-semibold max-md:text-[10px] ">Privacy Policy</Link>
                    
                    <span className="w-1 bg-[#64748B] aspect-square rounded-full mx-4"></span>
                    
                    <Link href={'/'} className="text-[#64748B] font-semibold max-md:text-[10px]">Terms of Use</Link>
                </div>
                <p className="text-[#64748B]  max-md:hidden">© {year} . Powered by <span className="font-bold"> Infi-Care.</span> All Rights Reserved.</p>
                <p className="md:hidden text-[#64748B] justify-center max-md:text-[10px]">© {year} . Powered by Infi-Care</p>
        </div>
      </div>
    </section>
  );
}

const FooterLinkTemplate = ({
  title,
  content,
}: {
  title?: string;
  content: React.ReactNode;
}) => (
  <div className="flex  items-center gap-3">
    <h1 className="text-[#64748B] text-[10px] md:text-[14px] font-medium md:font-semibold">{title}</h1>
    {content}
  </div>
);

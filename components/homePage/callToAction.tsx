"use client"
import Image from "next/image";
import { BlurredCircle } from "../blurredCircle";
import {  PadlockIcon } from "../ui/icons";
import { Button, Heading, Paragraph } from "../ui/typography";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export function CallToAction() {
   const buttonRef = useRef<HTMLButtonElement | null>(null)
    useEffect(()=>{
           gsap.fromTo(
             buttonRef.current,{
               opacity:0,
               y:-50
             }
             ,{
               opacity:1,
               y:0,
               scrollTrigger:{
                 trigger:buttonRef.current,
                 start:"top 80%",
                 end:"bottom center",
                 // markers:true,
                 scrub:true
               }
               
             }
           )
       },[])
  return (
    <section className="py-[47px] md:py-[70px] px-5 md:px-[90px] relative overflow-hidden">
      <div className=" relative rounded-[15px] py-16 w-full px-[15px] md:px-16.5 flex  items-center aspect-1280/560">
      <div className="absolute left-0 top-0 w-full h-full rounded-[15px]">
        <Image src={'/jpgs/ctabanner.jpg'} alt="banner" fill className="object-cover rounded-[15px]"/>
        <div className="w-full h-full bg-black/40 z-20 absolute rounded-[15px]">

        </div>
      </div>
        <div className="bg-white/80 z-20 rounded-[15px] max-w-[600px] px-[10px]  py-[25px] md:py-[67px] w-full flex flex-col gap-[21px] gap-12.5">
          <Heading
            title="Take control of your health today"
            subHeading="Join Infi-Care to consult verified doctors, manage your health records, and get care anytime you need it."
            className="text-center w-full max-w-[560px] "
          />
          <div className="w-full max-w-[480px] mx-auto flex flex-col gap-7.5 ">
            <Button className={"w-full"} ref={buttonRef} >Get Started</Button>
            <div className="flex gap-2.5 items-center justify-center text-[#64748B] text-[10px] md:text-[14px]">
              <div className="flex gap-2.5 items-center">
                <PadlockIcon width={14} height={17} color="#64748B" />
                <p> No credit card</p>
              </div>
              <span className="w-1.5 bg-[#64748B] aspect-square rounded-full"></span>
              <p>Secure and private</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
7
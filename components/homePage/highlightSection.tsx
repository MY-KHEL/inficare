"use client"
import Image from "next/image";
import { GreenTick } from "../ui/icons";
import { Heading } from "../ui/typography";
import { BlurredCircle } from "../blurredCircle";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)


export function HighlightSection() {
  const imageRef =useRef<HTMLDivElement | null >(null)
  const highlightRef = useRef<HTMLDivElement | null>(null)
  const subHeading = (
    <p>
      Infi-Care securely stores your diagnoses, prescriptions, and consultation
      notes — so you can access them anytime, anywhere.
      <br />
      <br />
      No more lost prescriptions or forgotten diagnoses.
    </p>
  );
  const highLights = [
    "Secure and private records.",
    "Updated after every consultation.",
    "Accessible anytime you need it.",
  ];
    useEffect(() => {
    if (!imageRef.current || !highlightRef.current) return;
  
    // Image animation
    gsap.fromTo(
      imageRef.current,
      {
        opacity: 0,
        x: 2000,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 90%",
         end:"top 40%",
         scrub:true
        },
      }
    );
  
    // Get cards AFTER ref exists
    const cards = gsap.utils.toArray(highlightRef.current.children);
  
    // Stagger cards
    gsap.from(cards, {
      opacity: 0,
      y: 60,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: highlightRef.current,
        start: "top 80%",
        end: "top 60%",
        // markers:true,
        scrub:true
      },
    });
  }, []);
  return (
    <section className="px-[20px] md:px-[79px] relative py-[25px] md:py-22.5 flex max-md:flex-col gap-7.5 md:justify-between items-center overflow-hidden">
      <div className="max-w-[518px] w-full flex flex-col gap-9">
        <Heading
          title="Your health records, always within reach"
          subHeading={subHeading}
          className=""
        />
        <div className="flex flex-col max-md:hidden gap-6.5 "   >
          {highLights.map((highlight, index) => (
            <div className="flex gap-2.5 items-center" key={index}>
              <GreenTick />
              <p className="font-medium text-xl text-[#061A46CC]"> {highlight}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full aspect-707/496 relative " ref={imageRef} >
      <Image src={'/pngs/dashboardlook.png'} alt="dashboard look" fill className="object-cover"/>
      </div>
      <div className="flex flex-col w-full md:hidden z-20 gap-2 md:gap-6.5" ref={highlightRef}>
          {highLights.map((highlight, index) => (
            <div className="flex gap-[5px] md:gap-2.5 items-center" key={index}>
              <GreenTick className="max-md:w-2.5" />
              <p className="font-medium text-[14px] md:text-xl text-[#061A46CC]"> {highlight}</p>
            </div>
          ))}
        </div>
          <BlurredCircle className=" max-md:hidden  -top-[24%] left-90"/>
          <BlurredCircle className=" max-md:hidden -bottom-[24%] -left-20"/>
          <BlurredCircle className=" max-md:hidden  -bottom-[24%] right-10"/>
    </section>
  );
}

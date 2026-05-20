"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Noto_Sans_Khmer } from "next/font/google";

gsap.registerPlugin(ScrollTrigger);

export const Paragraph = ({
  children,
  className,
  ref,
}: {
  children: React.ReactNode;
  className?: string;
  ref?: React.Ref<HTMLParagraphElement>;
}) => {
  return (
    <p className={cn("text-[#64748B] max-lg:text-[10px]", className)} ref={ref}>
      {" "}
      {children}
    </p>
  );
};

export const Heading = ({
  title,
  subHeading,
  className,
  logo,
  ref,
}: {
  title: string;
  subHeading: React.ReactNode;
  className?: string;
  logo?: boolean;
  ref?: React.Ref<HTMLHeadingElement>;
}) => {
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const logoRef = useRef<HTMLSpanElement | null>(null);
  const subHeadingRef = useRef<HTMLDivElement | null>(null);
  const tl = gsap.timeline();
  useEffect(() => {
    if (headingRef.current) {
      tl.fromTo(
        headingRef.current,
        {
          opacity: 0,
        //  scale: 0.8,
        x:-30
        },
        {
          opacity: 1,
          // scale : 1,
          // ease: "bounce.out",
          x:0,
          duration: .5,
          scrollTrigger:{
            trigger: headingRef.current,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
            // markers:true,
            scrub: true,
          }
        },
      );
    }

    if (logoRef.current) {
      tl.fromTo(
        logoRef.current,
        {
          opacity: 0,
          color: "black",
          y: -20,
          
        },
        {
          opacity: 1,
          color:"transparent",
          duration: 1,
          ease: "power2.out",
          y: 0,
        },
      );
    }

    if (subHeadingRef.current) {
        gsap.fromTo(
          subHeadingRef.current,
          {
            opacity: 0,
            x: 50,
          }
          ,{
            opacity: 1,
            x: 0,
            scrollTrigger:{
              trigger: subHeadingRef.current,
              start: "top 80%",
              end: "bottom 40%",
              toggleActions: "play none none reverse",
              // markers:true,
              scrub: true,
            }
          }
        )
    }
  }, []);

  return (
    <div
      className={cn(
        "flex flex-col max-md:gap-[6px] gap-[10px]  text-[#061A46] ",
        className,
      )}
      ref={ref}
    >
      <h1
        className="text-[20px]  xl:text-[38px] font-mona font-semibold"
        ref={headingRef}
      >
        {title}
        <br />
        {logo && (
          <span
            className=" bg-linear-to-b bg-clip-text text-transparent from-[#2563EB] to-[#14B8A6] "
            ref={logoRef}
          >
            Infi-Care
          </span>
        )}
      </h1>

      <div className="text-medium text-[#64748B] max-xlext-[12px]" ref={subHeadingRef}>
        {subHeading}
      </div>
    </div>
  );                     
};

export const Button = ({
  children,
  className,
  outline,
  ref
}: {
  children: React.ReactNode;
  className?: string;
  outline?: boolean;
  ref?: React.Ref<HTMLButtonElement>;
}) => {
  return (
    <button
      className={cn(
        `${outline ? "border max-lg:border-2 border-[#2563EB] bg-white text-[#2563eb]" : "bg-[#2563EB] text-white"} font-semibold py-2.5 md:p-4.5 rounded-[15px] w-fit cursor-pointer`,
        className,
      )}
      ref={ref}
    >
      {children}
    </button>
  );
};

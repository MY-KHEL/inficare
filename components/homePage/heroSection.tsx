"use client";
import Image from "next/image";
import {
  EmailIcon,
  FiveStars,
  PadlockIcon,
  PhoneIcon,
  StarIcon,
  VerifiedDoctorsIcon,
  VideoIcon,
} from "../ui/icons";
import { Button, Paragraph } from "../ui/typography";
import { BlurredCircle } from "../blurredCircle";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrambleTextPlugin);

export function HeroSection() {
  const heroLeftSection = useRef<HTMLDivElement | null>(null);
  const heroImage = useRef<HTMLImageElement | null>(null);
  const phoneIconRef = useRef<HTMLDivElement | null>(null);
  const videoIconRef = useRef<HTMLDivElement | null>(null);
  const emailIconRef = useRef<HTMLDivElement | null>(null);
  const reviewSectionRef = useRef<HTMLDivElement | null>(null);
  const doctorProfileRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | HTMLParagraphElement | null>(null);
  const mainTextRef = useRef<HTMLDivElement | HTMLParagraphElement | null>(
    null,
  );
  const element = useRef<HTMLSpanElement | null>(null);
  const heroTextRef = useRef<HTMLHeadingElement | null>(null);
  const dropDownRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);
  let mm = gsap.matchMedia();
  let textTl = gsap.timeline();
  let imageTl = gsap.timeline();
  useGSAP(() => {
    gsap.fromTo(
      element.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,

        duration: 2,
        delay: 1.3,
        ease: "power2.out",

        scrambleText: {
          text: "Minutes",
          chars: "dsfpah",
          revealDelay: 0,
          speed: 0.7,
          newClass: "myClass",
        },
      },
    );

    textTl
      .fromTo(
        textRef.current,
        {
          opacity: 0,
          y: 30,
          scale: 0.6,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
        },
      )
      .fromTo(
        heroTextRef.current,
        {
          opacity: 0,
          y: 30,
          scale: 0.6,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
        },
      )
      .fromTo(
        mainTextRef.current,
        {
          opacity: 0,
          y: 30,
          scale: 0.6,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
        },
      )
      .fromTo(
        buttonRef.current,
        {
          opacity: 0,
          y: -50,
          ease: "bounce.out",
        },
        {
          opacity: 1,
          y: 0,
        },
        "-=1",
      )
      .fromTo(
        dropDownRef.current,
        {
          opacity: 0,
          y: -50,
        },
        {
          opacity: 1,
          y: 0,
          ease: "bounce.out",
         
        },
         "-=1",
      );

    mm.add("(min-width: 768px)", () => {
      if (heroLeftSection.current) {
        imageTl
          .fromTo(
            heroLeftSection.current,
            {
              opacity: 0,
              scale: 0.2,
            },
            {
              opacity: 1,
              scale: 1,
              duration: 0.4,
            },
          )
          .fromTo(
            heroImage.current,
            {
              opacity: 0,
              y: 20,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power2.out",
            },
          )
          .fromTo(
            phoneIconRef.current,
            {
              opacity: 0,
              scale: 0.5,
            },
            {
              opacity: 1,
              scale: 1,
              duration: 0.5,
            },
          )
          .fromTo(
            videoIconRef.current,
            {
              opacity: 0,
              scale: 0.5,
            },
            {
              opacity: 1,
              scale: 1,
              duration: 0.5,
            },
          )
          .fromTo(
            emailIconRef.current,
            {
              opacity: 0,
              scale: 0.5,
            },
            {
              opacity: 1,
              scale: 1,
              duration: 0.5,
            },
            "-=1",
          )
          .fromTo(
            reviewSectionRef.current,
            {
              opacity: 0,
              scale: 0.5,
              y: 50,
            },
            {
              opacity: 1,
              scale: 1,
              duration: 0.5,
              y: 0,
            },
          )
          .fromTo(
            doctorProfileRef.current,
            {
              opacity: 0,
              scale: 0.5,
            },
            {
              opacity: 1,
              scale: 1,
              duration: 0.5,
            },
            "-=1",
          );
      }
    });

    mm.add("(max-width: 767px)", () => {
      if (heroLeftSection.current) {
        textTl
          .fromTo(
            heroLeftSection.current,
            {
              opacity: 0,
              scale: 0.2,
            },
            {
              opacity: 1,
              scale: 1,
              duration: 1,
            },
          )
          .fromTo(
            heroImage.current,
            {
              opacity: 0,
              y: 20,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power2.out",
            },
          )
          .fromTo(
            phoneIconRef.current,
            {
              opacity: 0,
              scale: 0.5,
            },
            {
              opacity: 1,
              scale: 1,
              duration: 0.5,
              scrollTrigger: {
                trigger: phoneIconRef.current,
                start: "top 75%",
                end: "bottom 70%",
                // markers:true,
                scrub: true,
              },
            },
          )
          .fromTo(
            videoIconRef.current,
            {
              opacity: 0,
              scale: 0.5,
            },
            {
              opacity: 1,
              scale: 1,
              duration: 0.5,
              scrollTrigger: {
                trigger: phoneIconRef.current,
                start: "top 75%",
                end: "bottom 70%",
                // markers:true,
                scrub: true,
              },
            },
          )
          .fromTo(
            emailIconRef.current,
            {
              opacity: 0,
              scale: 0.5,
            },
            {
              opacity: 1,
              scale: 1,
              duration: 0.5,
              scrollTrigger: {
                trigger: emailIconRef.current,
                start: "top 75%",
                end: "bottom 70%",
                // markers:true,
                scrub: true,
              },
            },
            "-=1",
          )
          .fromTo(
            reviewSectionRef.current,
            {
              opacity: 0,
              scale: 0.5,
              y: 50,
            },
            {
              opacity: 1,
              scale: 1,
              duration: 0.5,
              y: 0,
              scrollTrigger: {
                trigger: reviewSectionRef.current,
                start: "top 80%",
                end: "bottom 50%",
                // markers:true,
                scrub: true,
              },
            },
          )
          .fromTo(
            doctorProfileRef.current,
            {
              opacity: 0,
              scale: 0.5,
            },
            {
              opacity: 1,
              scale: 1,
              duration: 1,
              scrollTrigger: {
                trigger: doctorProfileRef.current,
                start: "top 75%",
                end: "bottom 70%",
                // markers:true,
                scrub: true,
              },
            },
            "-=1",
          );
      }
    })
     
 return () => {
  mm.revert();
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); }
  }, []);
  const features = [
    {
      title: "Verified Doctors",
      icon: <VerifiedDoctorsIcon className="max-lg:w-3 aspect-square" />,
    },
    {
      title: "Secure and Private",
      icon: <PadlockIcon className="inline max-lg:w-3 aspect-square " />,
    },
    {
      title: "200 + Happy Patients",
      icon: <StarIcon className="max-lg:w-3 aspect-square" />,
    },
  ];
  return (
    <section className=" px-5 xl:pl-[91px] relative justify-between overflow-hidden  min-h-[100dvh] flex max-md:flex-col md:gap-4 ">
      {/* Left hand text */}
      <div className="flex w-full flex-col z-20 pt-20 gap-20 items-center xl:pt-30 md:pb-11.5 gap-[13px] lg:max-w-[544px] justify-between ">
        {/* text and button container */}
        <div className="flex flex-col gap-[40px] ">
          {/* only text section */}
          <div className="flex flex-col gap-5.5">
            <Paragraph className="max-lg:font-medium opacity-0" ref={textRef}>
              Consult top doctors anytime, from any location.
            </Paragraph>

            <h1
              className="font-bold text-2xl xl:text-[60px] max-lg:text-center tracking-normal font-mona text-[#061A46]"
              ref={heroTextRef}
            >
              Talk to a verified doctor in{" "}
              <span className="underline text-[#2563EB]" ref={element}>
                Minutes{" "}
              </span>{" "}
            </h1>

            <Paragraph
              className="max-lg:text-[12px] max-lg:font-medium max-lg:text-center"
              ref={mainTextRef}
            >
              Access quality healthcare without long wait times or stress.
              Connect with verified doctors quickly and easily. Get the care you
              need — anytime, anywhere.
            </Paragraph>
          </div>

          {/* only button section */}
          <div className="flex max-lg:flex-col gap-4.5 w-full" ref={buttonRef}>
            <Button className="w-full max-lg:p-2.5">Get Started</Button>
            <Button outline className="w-full max-lg:p-2.5">
              Consult a doctor
            </Button>
          </div>
        </div>

        {/* white secion near the bottom of the hero section */}
        <div
          className="bg-white flex items-center justify-center rounded-[15px] gap-2 w-full p-2.5"
          ref={dropDownRef}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-[7px] p-1 pr-2 lg:gap-2.5 border-r-2 border-[#14B8A666] last:border-0 "
            >
              {feature.icon}
              <Paragraph className="text-[14px] max-md:text-[8px]">
                {feature.title}
              </Paragraph>
            </div>
          ))}
        </div>
      </div>

      <div
        className=" w-full flex justify-center opacity-0
         relative "
        ref={heroLeftSection}
      >
        <div className=" max-md:hidden absolute right-0 -bottom-25 w-full aspect-square ">
          <Image
            src={"/pngs/heroblue.png"}
            alt="hero-blue"
            fill
            className="object-contain"
          />
        </div>
        <div className="md:absolute  w-full max-w-[558px] md:-bottom-15 md:left-1/2 md:-translate-x-1/2   aspect-558/812 z-20 ">
          <Image
            src={"/pngs/herodoctor.png"}
            alt="hero doctor"
            fill
            className="object-contain opacity-0  "
            ref={heroImage}
          />
          <div
            className="absolute md:left-25 left-10 top-20 md:top-55  w-[35px] md:w-12.5 flex justify-center items-center aspect-square rounded-full bg-white"
            ref={phoneIconRef}
          >
            <PhoneIcon width={24} height={24} className="max-md:w-3" />
          </div>
          <div
            className="absolute right-10 top-40 md:right-0 md:top-75 md:w-12.5  w-[35px] flex justify-center items-center aspect-square rounded-full bg-white"
            ref={videoIconRef}
          >
            <VideoIcon width={24} height={24} className="max-md:w-5" />
          </div>
          <div
            className="absolute md:left-12 top-65 md:top-100 w-[35px] md:w-12.5  flex justify-center items-center aspect-square rounded-full bg-white"
            ref={emailIconRef}
          >
            <EmailIcon width={24} height={24} className="max-md:w-5" />
          </div>

          <div
            className="w-full absolute rounded-[15px]  bottom-6 md:bottom-50 shadow-md -left-4 md:-left-30 max-w-[190px] md:max-w-[241px] py-[7.5px] md:py-[13px] bg-white px-[9.5px] md:px-[29px]"
            ref={doctorProfileRef}
          >
            <div className="flex gap-3.5 items-center">
              <div className="w-12.5 relative aspect-square ">
                <Image
                  src={"/pngs/firstdoctor.png"}
                  alt="doctor profile"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col gap-.75">
                <h1 className="font-semibold max-md:text-[14px] text-[#061A46]">
                  Dr Uba Franklin
                </h1>
                <p className="font-medium max-md:text-[12px] text-[#64748B]">
                  Cardiologist
                </p>
                <FiveStars />
              </div>
            </div>
          </div>
          <div
            className="flex flex-col shadow-md  items-center justify-center absolute right-0 md:right-5 bottom-9 md:bottom-20 bg-white/85 rounded-[15px] p-3 w-full max-w-[85px] md:max-w-[115px]"
            ref={reviewSectionRef}
          >
            <svg
              width="30"
              height="24"
              className="max-md:w-4"
              viewBox="0 0 30 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.3333 0C18.5333 0 16.0667 1.4 14.6667 3.6C13.2667 1.4 10.8 0 8 0C3.6 0 0 3.6 0 8C0 15.9333 14.6667 24 14.6667 24C14.6667 24 29.3333 16 29.3333 8C29.3333 3.6 25.7333 0 21.3333 0Z"
                fill="#F44336"
              />
            </svg>
            <h1 className="font-bold text-[#061A46] text-[14px] md:text-[18px]">
              {" "}
              50+{" "}
            </h1>
            <p className="font-medium text-[#061A46] text-[10px] md:text-[14px]">
              Reviews
            </p>
          </div>
        </div>
      </div>
      <BlurredCircle className=" max-md:hidden -bottom-20 -left-10" />
      <BlurredCircle className="max-md:hidden   top-[0%] left-50" />
    </section>
  );
}


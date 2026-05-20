"use client";
import Image from "next/image";
import { Heading, Paragraph } from "../ui/typography";
import {
  CalendarIcon,
  FileIcon,
  MessagingIcon,
  StethoscopeIcon,
} from "../ui/icons";
import { BlurredCircle } from "../blurredCircle";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

interface IFeature {
  title: string;
  subTitle: string;
  icon: React.ReactNode;
}

export function ExploreSection() {
  const imageRef = useRef<HTMLDivElement | null>(null);
  const exploreRef = useRef<HTMLDivElement | null>(null)
  
  const subHeading = (
    <p>
      Choose how you want to access care — from booking appointments to instant
      consultations.
    </p>
  );

  const features: IFeature[] = [
    {
      title: "Find a doctor",
      subTitle: "Browse verified doctors by specialty and experience.",
      icon: <StethoscopeIcon className="max-md:w-4" />,
    },
    {
      title: "Book Appointment",
      subTitle: "Schedule a visit at a time that works for you.",
      icon: <CalendarIcon className="max-md:w-4" />,
    },
    {
      title: "Instant Consultationr",
      subTitle: "Talk to a doctor instantly via chat or video.",
      icon: <MessagingIcon className="max-md:w-4" />,
    },
    {
      title: "Health Records (Mini EMR)",
      subTitle: "Access your medical history anytime, anywhere.",
      icon: <FileIcon className="max-md:w-4" />,
    },
  ];
  useEffect(() => {
  if (!imageRef.current || !exploreRef.current) return;

  // Image animation
  gsap.fromTo(
    imageRef.current,
    {
      opacity: 1,
      x: -2000,
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
  const cards = gsap.utils.toArray(exploreRef.current.children);

  // Stagger cards
  gsap.from(cards, {
    opacity: 0,
    y: 60,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: exploreRef.current,
      start: "top 80%",
      end:"+=300",
      scrub:true
    },
  });
}, []);
  return (
    <section className=" py-13 xl:py-[79px] relative overflow-hidden px-5 md:py-9  xl:px-[95px] flex max-md:flex-col max-md:gap-[24px] gap-[57px] 2xl:justify-center md:items-start xl:items-center  ">
      <Heading
        title="Explore what you can do with "
        subHeading={subHeading}
        logo
        className="md:hidden"
      />
      <div
        className="relative aspect-612/756 w-full z-30 max-w-[612px] 2xl:max-w-1/2 2xl:aspect-square"
        ref={imageRef}
      >
        <Image
          src={"/jpgs/exploreimage.jpg"}
          alt="explore-image"
          fill
          className="w-full object-cover rounded-[15px]"
        />
      </div>
      <div className="w-full   max-w-[583px] flex flex-col gap-[30px]">
        <Heading
          title="Explore what you can do with "
          subHeading={subHeading}
          logo
          className="max-md:hidden"
        />

        <div
          className="flex flex-col gap-[12px] md:gap-[25px] z-30"
          ref={exploreRef}
        >
          {features.map((feature, index) => (
            <div
              className="bg-white border-[0.5px] border-[#8E98A8B2] flex p-4 gap-7.5 rounded-[15px]"
              key={index}
            >
              <div className=" w-10 max-md:h-10 rounded-[15px] md:w-15 md:h-15 aspect-square  bg-[#ECF2FE] flex justify-center items-center">
                {feature.icon}
              </div>
              <div className="flex flex-col w-full  max-md:gap-[7px] gap-2.5 ">
                <h3 className="text-[#061A46CC]  max-xl:text-[14px]  font-semibold">
                  {feature.title}
                </h3>
                <Paragraph className="font-medium max-xl:text-[12px]">
                  {feature.subTitle}
                </Paragraph>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BlurredCircle className="max-md:hidden  md:-top-[25%] left-1/2" />
      <BlurredCircle className=" -bottom-[10%] md:-bottom-[12%] -left-20" />
      <BlurredCircle className=" -bottom-[15%] -right-12" />
    </section>
  );
}

"use client";
import Image from "next/image";
import { ApostropheIcon, FiveStars, FourStars } from "../ui/icons";
import { Heading, Paragraph } from "../ui/typography";
import { BlurredCircle } from "../blurredCircle";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import * as React from "react";
import "embla-carousel-auto-scroll";
import AutoScroll from "embla-carousel-auto-scroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger)

export function TestimonialSection() {
  const plugin = React.useRef(
    AutoScroll({ stopOnMouseEnter: false, speed: 1 }),
  );
 const imageRef = React.useRef<HTMLDivElement | null>(null)
 const textRef = React.useRef<HTMLParagraphElement | null>(null)

  const testimonials = [
    {
      isFiveStars: true,
      content:
        "I was able to consult a doctor within minutes without leaving my house. It's fast and reliable.",
      imageLink: "/pngs/firstdoctor.png",
      author: "David A.",
      location: "Lagos State, Nigeria",
    },
    {
      isFiveStars: false,
      content:
        "Having my medical records in one place has made managing my health so much easier.",
      imageLink: "/pngs/seconddoctor.png",
      author: "mary D.",
      location: "Edo State, Nigeria",
    },
    {
      isFiveStars: true,
      content:
        "I love that I can see my prescriptions and past consultations anytime. It makes follow-ups much easier.",
      imageLink: "/pngs/thirddoctor.png",
      author: "Amina K.",
      location: "Lagos State, Nigeria",
    },
    {
      isFiveStars: true,
      content:
        "Booking an appointment was so easy, and I didn't have to deal with long hospital queues. It saved me a lot of time.",
      imageLink: "/pngs/fourthdoctor.png",
      author: "Chinedu O.",
      location: "Abuja FCT, Nigeria",
    },
  ];

  const subHeading = (
    <Paragraph>Real experiences from people using Infi-Care</Paragraph>
  );

React.useEffect(() => {
  if (!imageRef.current) return;
   const tl = gsap.timeline()
  const units = gsap.utils.toArray(imageRef.current.children);

  gsap.fromTo(
    units,
    {
      opacity: 0,
      y: -40,
    },
    {
      opacity: 1,
      y: 0,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 65%",
        end:"top 60%",
        scrub: true,
      },
    }
  )
  gsap.fromTo(textRef.current,{
    opacity:0,
    y:-20,
   
  },{
    opacity:1,
    y:0,
    delay:1,
    
    scrollTrigger:{
      trigger: imageRef.current,
      scrub:true,

    }
  })
}, []);
  return (
    <>
      <section className=" relative  overflow-hidden py-[51px] md:py-[78px] pl-5 md:px-[90px]  max-md:gap-[30px] gap-[97px] flex max-md:flex-col w-full md:items-center">
        <div className="flex md:hidden flex-col z-20 max-md:gap-[15px] gap-[47px]">
          <Heading title="Trusted by people like you" subHeading={subHeading} />

          <div className="flex gap-2.5">
            <div className="flex " ref={imageRef}>
              {testimonials.map((testimonial, index) => (
                <div
                  className={` ${index < 1 ? "ml-0" : "-ml-4"} w-12.5 relative aspect-square rounded-full bg-[#2563EB] `}
                  key={index}
                >
                  <Image
                    src={testimonial.imageLink}
                    alt="testimonial image"
                    fill
                    className="object-cover rounded-full border-3 border-white"
                  />
                </div>
              ))}
            </div>
            <Paragraph className="font-semibold " ref={textRef}>
              More than 500+ <br /> Trusted Infi-Care{" "}
            </Paragraph>
          </div>
        </div>
        <div className="md:max-w-[697px] z-20 max-md:hidden w-full overflow-auto flex max-md:pr-5  md:grid grid-cols-2 gap-[14px] md:gap-9  ">
          {testimonials.map((testimonial, index) => (
            <div
              className="p-5 flex flex-col gap-3 md:gap-[35px] justify-between max-md:min-w-[247px]  md:max-w-[331px]  w-full  bg-white rounded-[15px] border-[0.5px] border-[#8E98A8B2]"
              key={index}
            >
              <div className="flex flex-col gap-[25px]">
                <div className="flex justify-between">
                  <ApostropheIcon />

                  {testimonial.isFiveStars ? <FiveStars /> : <FourStars />}
                </div>
                <h3 className="font-semibold max-md:text-[12px] text-[#061A46B2]">
                  {testimonial.content}
                </h3>
              </div>
              <div className="flex gap-2.5 items-center">
                <div className="w-[70px] max-md:w-[35px] relative aspect-square  ">
                  <Image
                    src={testimonial.imageLink}
                    alt="first-doctor"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div className="flex flex-col gap-1.5 md:gap-2.5">
                  <p className="text-[#64748B] max-md:text-[14px]">
                    {testimonial.author}
                  </p>
                  <p className="text-[#64748B] max-md:text-[12px]">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex max-md:hidden flex-col gap-[47px]">
          <Heading title="Trusted by people like you" subHeading={subHeading} />

          <div className="flex gap-2.5">
            <div className="flex ">
              {testimonials.map((testimonial, index) => (
                <div
                  className={` ${index < 1 ? "ml-0" : "-ml-4"} w-12.5 relative aspect-square rounded-full bg-[#2563EB] `}
                  key={index}
                >
                  <Image
                    src={testimonial.imageLink}
                    alt="testimonial image"
                    fill
                    className="object-cover rounded-full border-3 border-white"
                  />
                </div>
              ))}
            </div>
            <Paragraph className="font-semibold">
              More than 500+ <br /> Trusted Infi-Care{" "}
            </Paragraph>
          </div>
        </div>
        <BlurredCircle className=" -bottom-[27%] left-0" />
        <BlurredCircle className=" -bottom-[27%] left-1/2 tanslate-x-1/2" />
        <BlurredCircle className=" bottom-[27%] -right-[12%] tanslate-x-1/2" />
        <BlurredCircle className=" -top-[27%] left-[22%] tanslate-x-1/2" />

        <Carousel
          plugins={[plugin.current]}
          className="w-full md:hidden  mx-auto "
          opts={{
            loop: true,
          }}
        >
          <CarouselContent className=" p-4 ml-4 gap-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                className="p-5 basis-1/3 flex flex-col gap-3 md:gap-[35px] justify-between max-md:min-w-[247px]  md:max-w-[331px]  w-full  bg-white rounded-[15px] border-[0.5px] border-[#8E98A8B2]"
                key={index}
              >
                <div className="flex flex-col gap-[25px]">
                  <div className="flex justify-between">
                    <ApostropheIcon />

                    {testimonial.isFiveStars ? <FiveStars /> : <FourStars />}
                  </div>
                  <h3 className="font-semibold max-md:text-[12px] text-[#061A46B2]">
                    {testimonial.content}
                  </h3>
                </div>
                <div className="flex gap-2.5 items-center">
                  <div className="w-[70px] max-md:w-[35px] relative aspect-square  ">
                    <Image
                      src={testimonial.imageLink}
                      alt="first-doctor"
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 md:gap-2.5">
                    <p className="text-[#64748B] max-md:text-[14px]">
                      {testimonial.author}
                    </p>
                    <p className="text-[#64748B] max-md:text-[12px]">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute hidden " />
          <CarouselNext className={"absolute hidden"} />
        </Carousel>
      </section>
    </>
  );
}

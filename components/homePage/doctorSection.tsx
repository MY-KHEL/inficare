"use client"
import Image from "next/image";
import { Button, Heading, Paragraph } from "../ui/typography";
import { GrayCalendarIcon } from "../ui/icons";
import { Star } from "lucide-react";
import { BlurredCircle } from "../blurredCircle";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import React, { useEffect, useRef } from "react";
import AutoScroll from "embla-carousel-auto-scroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)
export function DoctorSection() {
  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const plugin = React.useRef(
      AutoScroll({ stopOnMouseEnter: false, speed: 1 }),
    );

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

  const doctorProfiles = [
    {
      fullName: "Dr Okafor Obisike ",
      specialty: "Cardiologist",
      yearsOfExperience: "10",
      amountOfPatientTreated: "200",
      imageLink: "/pngs/firstdoctor.png",
      rating: "4.5",
      amountOfRatings: "125",
    },
    {
      fullName: "Dr Oby Obianuju  ",
      specialty: "Dermatologist",
      yearsOfExperience: "20",
      amountOfPatientTreated: "1100",
      imageLink: "/pngs/seconddoctor.png",
      rating: "4.8",
      amountOfRatings: "256",
    },
    {
      fullName: "Dr Kunle Balogun",
      specialty: "Dentist",
      yearsOfExperience: "8",
      amountOfPatientTreated: "90",
      imageLink: "/pngs/thirddoctor.png",
      rating: "4.8",
      amountOfRatings: "89",
    },
    {
      fullName: "Dr Uba Franklin",
      specialty: "Cardiologist",
      yearsOfExperience: "25",
      amountOfPatientTreated: "800",
      imageLink: "/pngs/fourthdoctor.png",
      rating: "4.9",
      amountOfRatings: "1456",
    },
  ];
  return (
    <section className="px-5 md:px-[90px] py-[37.5px] md:py-[79px] relative overflow-hidden flex flex-col gap-[50px]">
      <div className="flex  z-20  flex-col gap-[35px]">
        <div className="flex max-md:flex-col gap-[15px] md:justify-between md:items-center">
          <Heading
            title="Meet the doctors behind "
            subHeading="Connect with experienced, verified doctors across a wide range of medical fields."
            logo
          />
          <div className="flex gap-2.5 items-center max-md:ml-auto max-md:rounded-[5px] rounded-[15px] bg-[#DAE4FC] max-md:px-[11.5px] w-fit max-md:py-[10px] px-[22.5px] py-[16.5px]">
            <div className="aspect-square  max-md:w-[5px] w-2.5 bg-[#2563EB] rounded-full"></div>
            <p className="text-[#061A46] max-md:text-[10px] font-semibold">Trusted Specialists</p>
          </div>
        </div>
        <div className="flex max-md:hidden gap-[22px] justify-between w-full overflow-x-auto">
          {doctorProfiles.map((profile, index) => (
            <div className="rounded-[15px]" key={index}>
              <div className="relative aspect-298/322  h-full  max-h-[227px] md:max-h-[322px] w-[233px] md:w-[298px]">
                <Image
                  src={profile.imageLink}
                  alt="first-doctor"
                  fill
                  className="object-cover rounded-t-[15px]"
                />
              </div>
              <div className="p-4  bg-white">
                <div className="flex justify-between">
                  <h3 className="text-[#061A46CC] max-md:text-[14px] font-semibold text-lg ">
                    {profile.fullName}
                  </h3>
                  <Paragraph className="max-md:hidden font-medium">
                    {" "}
                    <Star
                      color="#FFD70099"
                      fill="#FFD70099"
                      className="inline"
                    />{" "}
                    {profile.rating} ({profile.amountOfRatings}){" "}
                  </Paragraph>
                </div>
                <div className="flex flex-col gap-1.5">
                  <p className="text-[#2563EB] max-md:text-[12px]">{profile.specialty}</p>
                  <Paragraph className="fort-medium max-md:text-[10px]">
                    <GrayCalendarIcon /> {profile.yearsOfExperience} + years
                  </Paragraph>
                  <Paragraph className="font-medium max-md:text-[10px]">
                    {profile.amountOfPatientTreated} + patients treated
                  </Paragraph>
                </div>
              </div>
            </div>
          ))}
        </div>
          <Carousel
          plugins={[plugin.current]}
          className="w-full md:hidden  mx-auto "
          opts={{
            loop: true,
          }}
        >
          <CarouselContent className=" p-4 ml-4 gap-4">
            {doctorProfiles.map((profile, index) => (
            <div className="rounded-[15px]" key={index}>
              <div className="relative aspect-298/322  h-full  max-h-[227px] md:max-h-[322px] w-[233px] md:w-[298px]">
                <Image
                  src={profile.imageLink}
                  alt="first-doctor"
                  fill
                  className="object-cover rounded-t-[15px]"
                />
              </div>
              <div className="p-4  bg-white">
                <div className="flex justify-between">
                  <h3 className="text-[#061A46CC] max-md:text-[14px] font-semibold text-lg ">
                    {profile.fullName}
                  </h3>
                  <Paragraph className="max-md:hidden font-medium">
                    {" "}
                    <Star
                      color="#FFD70099"
                      fill="#FFD70099"
                      className="inline"
                    />{" "}
                    {profile.rating} ({profile.amountOfRatings}){" "}
                  </Paragraph>
                </div>
                <div className="flex flex-col gap-1.5">
                  <p className="text-[#2563EB] max-md:text-[12px]">{profile.specialty}</p>
                  <Paragraph className="fort-medium max-md:text-[10px]">
                    <GrayCalendarIcon /> {profile.yearsOfExperience} + years
                  </Paragraph>
                  <Paragraph className="font-medium max-md:text-[10px]">
                    {profile.amountOfPatientTreated} + patients treated
                  </Paragraph>
                </div>
              </div>
            </div>
          ))}
          </CarouselContent>
          <CarouselPrevious className="absolute hidden " />
          <CarouselNext className={"absolute hidden"} />
        </Carousel>
      </div>
      <Button className="min-w-[263px] z-20 w-full  md:w-fit mx-auto" ref={buttonRef} >Get Started</Button>
      <BlurredCircle className=" -top-[18%] left-1/2" />
      <BlurredCircle className=" -bottom-[12%] -left-20" />
      <BlurredCircle className=" -bottom-[15%] -right-12" />

          
      
    </section>
  );
}

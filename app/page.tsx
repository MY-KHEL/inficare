import { CallToAction } from "@/components/homePage/callToAction";
import { DoctorSection } from "@/components/homePage/doctorSection";
import { ExploreSection } from "@/components/homePage/exploreSection";
import { FooterSection } from "@/components/homePage/footerSection";
import { HeroSection } from "@/components/homePage/heroSection";
import { HighlightSection } from "@/components/homePage/highlightSection";
import { TestimonialSection } from "@/components/homePage/testimonialSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-hidden max-w-[100dvw]">
      <HeroSection />
      <ExploreSection />
      <DoctorSection/>
      <HighlightSection/>
      <TestimonialSection/>
      <CallToAction/>
      <FooterSection/>
    </div>
  );
}

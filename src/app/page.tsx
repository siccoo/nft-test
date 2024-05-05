import Entry from "./home";
import SectionTwo from "./sectionTwo";
import SectionThree from "./sectionThree";
import SectionFour from "./sectionFour";
import SectionFive from "./sectionFive";
import SectionSix from "./sectionSix";
import SmSectionTwo from "./smSectionTwo";
import Footer from "@/components/footer";
import SmSectionFour, { MobileVersion } from "./smSectionFour";

export default function Home() {
  return (
    <div className="w-full">
      <Entry />
      <div className={`w-full flex justify-center mx-auto relative z-0`}>
        <div className="w-[80%]  mb-0 mt-16 lg:block hidden">
          <SectionTwo />
        </div>
        <div className="lg:hidden   justify-center w-[95%] md:flex hidden  mb-20 mt-16">
          <SectionThree />
        </div>
        <div className="md:hidden  justify-center w-[99%] sm:flex hidden mb-20 mt-16">
          <SmSectionFour />
        </div>
        <div className="sm:hidden w-[95%] justify-center flex mb-20 mt-16">
          <MobileVersion />
        </div>
      </div>
      <div className={`w-full flex justify-center mx-auto relative z-0`}>
        <div className="lg:w-[80%] w-[95%]  mb-20 mt-5">
          <SectionThree />
          <SectionFour />
          <SectionFive />
        </div>
      </div>
      <SectionSix />
      <div className=" flex justify-center lg:hidden">
        <div className="w-[95%]">
          <div className="md:block hidden">
            <SectionTwo />
          </div>
          <div className="md:hidden block">
            <SmSectionTwo />
          </div>
          <SectionFive />
        </div>
      </div>
      <Footer />
    </div>
  );
}

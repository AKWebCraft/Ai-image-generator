import { curve, heroBackground } from "../assets";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { useRef } from "react";
import Section from "./Section";
import Generating from "./Generating";
import img3 from "../assets/gallery-img1.jpg";
import { loading as load } from "../assets";
import { handleDownload } from "../utils/downloadImage";

const Hero = ({
  heading,
  text,
  prompt,
  setPrompt,
  imageUrl,
  loading,
  handleGenerate,
}) => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            {heading ? heading : `Explore the Possibilities with  ${` `}`}
            {heading ? (
              " "
            ) : (
              <span className="inline-block relative">
                AI Image Generator{" "}
                <img
                  src={curve}
                  className="absolute top-full left-0 w-full xl:-mt-2"
                  width={624}
                  height={28}
                  alt="Curve"
                />
              </span>
            )}
          </h1>
          {text ? (
            <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
              {" "}
              {text}
            </p>
          ) : (
            <p className="body-1 max-w-3xl mx-auto mt-4 mb-6 text-n-2 lg:mb-8">
              Unleash the power of AI within Ai Image Generator. Upgrade your
              productivity.
            </p>
          )}
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={imageUrl ? imageUrl : img3}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />
              </div>
              {imageUrl ? (
                <div className="absolute top-5 left-2">
                  <img
                    src={imageUrl}
                    alt="img"
                    className="h-[250px] rounded-lg"
                  />
                  <button
                    className="bg-transparent mt-2 ms-11 border-1 border-gray-300 rounded-lg px-6 py-2 text-white text-lg font-semibold hover:bg-gray-200 hover:border-gray-400 backdrop-blur-md transition-all"
                    onClick={() => handleDownload(imageUrl)}
                  >
                    Download
                  </button>
                </div>
              ) : (
                ""
              )}
              {loading ? (
                <img
                  className="absolute top-[50%] left-[45%] w-[100px] h-[100px] mr-4 animate-spin"
                  src={load}
                  alt="Loading"
                />
              ) : (
                ""
              )}

              <Generating
                className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2"
                prompt={prompt}
                setPrompt={setPrompt}
                handleGenerate={handleGenerate}
              />
            </div>
          </div>
          <Gradient />
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>
          <BackgroundCircles />
        </div>
      </div>
      <BottomLine />
    </Section>
  );
};

export default Hero;

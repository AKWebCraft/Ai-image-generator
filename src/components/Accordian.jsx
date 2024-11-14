import { useSpring, animated } from "react-spring";
import Section from "./Section";
import { useState } from "react";
import Heading from "./Heading";

const Accordian = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section>
      <Heading text="Do you have a Question?" />
      <div className="w-[70%] mx-auto space-y-4">
        {data.map((item, index) => {
          const isOpen = openIndex === index;
          const animation = useSpring({
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
            overflow: "hidden",
          });

          return (
            <div key={index}>
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left py-4 px-6 flex justify-between items-center bg-n-8 transition-all duration-300 focus:outline-none"
              >
                <span className="text-lg font-medium">{item.question}</span>
                <svg
                  className={`w-5 h-5 transform transition-transform ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <animated.div style={animation} className="px-6">
                <div className="py-4 text-n-2">{item.answer}</div>
              </animated.div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Accordian;

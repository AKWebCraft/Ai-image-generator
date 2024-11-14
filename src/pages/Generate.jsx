import Section from "../components/Section";
import Input from "../components/Input";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useGenerateAI from "../hooks/useGenerateAI";
import { loading as load } from "../assets";
import img13 from "../assets/img-12.webp";
import { handleDownload } from "../utils/downloadImage";

const Generate = () => {
  const { setPrompt, imageUrl, loading, handleGenerate } = useGenerateAI();

  const { prmpt, image } = useSelector((state) => state.generate);
  const [input, setInput] = useState(prmpt);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    setPrompt(input);
  }, [input]);

  return (
    <Section>
      <div className="flex items-center justify-center h-screen bg-n-8/90 ">
        <div className="relative p-4 bg-n-8/90 shadow-lg rounded-lg">
          <img
            src={imageUrl ? imageUrl : image ? image : img13}
            alt="Sample"
            className="rounded-lg w-[500px]"
          />
          {loading ? (
            <div className="absolute top-[50%] left-[45%]">
              <img
                className="h-[100px] mr-4 animate-spin"
                src={load}
                alt="Loading"
              />
            </div>
          ) : (
            ""
          )}
          {imageUrl ? (
            <button
              className="absolute bottom-5 ms-1 bg-transparent mt-2 border-1 border-gray-300 rounded-lg px-6 py-2 text-white text-lg font-semibold hover:bg-gray-200 hover:border-gray-400 backdrop-blur-md transition-all"
              onClick={() => handleDownload(imageUrl)}
            >
              Download
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
      <div>
        <Input
          input={input}
          setInput={setInput}
          handleChange={handleChange}
          handleGenerate={handleGenerate}
          loading={loading}
        />
      </div>
    </Section>
  );
};

export default Generate;

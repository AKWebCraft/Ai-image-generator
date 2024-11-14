import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import { useDispatch } from "react-redux";
import { setPrmpt } from "../store/generateSlice";
import Benefits from "../components/Benefits";
import Collaboraton from "../components/Collaboraton";
import Services from "../components/Services";
import Accordian from "../components/Accordian";
import { faqData } from "../constants/index";
import useGenerateAI from "../hooks/useGenerateAI";

const Home = () => {
  const dispatch = useDispatch();

  const { prompt, setPrompt, imageUrl, loading, handleGenerate } =
    useGenerateAI();

  const getPrompt = ({ text, img }) => {
    const data = {
      image: img,
      prmpt: text,
    };
    dispatch(setPrmpt(data));
  };

  return (
    <div>
      <Hero
        prompt={prompt}
        setPrompt={setPrompt}
        imageUrl={imageUrl}
        loading={loading}
        handleGenerate={handleGenerate}
      />
      <Gallery getPrompt={getPrompt} />
      <Benefits />
      <Collaboraton />
      <Services />
      <Accordian data={faqData} />
    </div>
  );
};

export default Home;

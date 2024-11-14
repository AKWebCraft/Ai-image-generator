import Section from "./Section";
import { Link } from "react-router-dom";
import { gallery } from "../constants/index";

const Gallery = ({ getPrompt }) => {
  const handleClick = (text, img) => {
    getPrompt({ text, img });
  };
  return (
    <Section>
      <div className="container mx-auto px-20 py-8">
        <div>
          <h1 className="text-4xl font-bold text-center mb-8">
            AI Image Generator
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8 text-center">
            Generate an image using Generative AI by describing what you want to
            see, all images are published publicly by default.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {gallery.map((item) => (
            <div
              className="relative bg-transparent rounded-lg overflow-hidden shadow-lg group"
              key={item.id}
            >
              <img
                src={item.img}
                alt="AI-img"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-end">
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent opacity-80"></div>
                <div className="relative z-10 bg-opacity-75 text-white text-center p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link to="/generate">
                    <h6
                      className="text-lg font-semibold"
                      onClick={(e) => handleClick(e.target.innerText, item.img)}
                    >
                      {item.title}
                    </h6>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Gallery;

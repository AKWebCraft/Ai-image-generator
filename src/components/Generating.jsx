import { AiOutlineSend } from "react-icons/ai";
import { AiOutlineRobot } from "react-icons/ai";

const Generating = ({ className, prompt, setPrompt, handleGenerate }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      <AiOutlineRobot size={70} color="white" className="w-5 h-5 mr-4" />
      <input
        type="text"
        placeholder="Enter a prompt for image generation"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="bg-transparent border-none focus:outline-none w-full"
      />
      <AiOutlineSend
        className={`text-xl hover:cursor-pointer ${
          prompt ? "text-white" : "text-gray-500 cursor-not-allowed"
        }`}
        onClick={() => {
          if (prompt) handleGenerate();
        }}
      />
    </div>
  );
};

export default Generating;

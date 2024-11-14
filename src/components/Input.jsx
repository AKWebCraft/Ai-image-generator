import Button from "./Button";

const Input = ({ input, handleChange, handleGenerate }) => {
  return (
    <div className="flex  justify-center bg-n-8/90 ">
      <div className="w-full max-w-lg p-6 bg-n-8/90  rounded-lg shadow-lg">
        <div className="flex items-center">
          <input
            type="text"
            value={input}
            onChange={handleChange}
            className="flex-grow px-11 py-6 text-white bg-gray-700 rounded-lg focus:outline-none border border-gray-600 focus:border-blue-400"
            placeholder="Enter something..."
          />
        </div>
        <div className="flex justify-center py-6 mt-3">
          <Button
            className="ps-11 pe-11"
            onClick={() => {
              if (input) handleGenerate();
            }}
          >
            Generate
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Input;

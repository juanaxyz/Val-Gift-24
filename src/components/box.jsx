import { useState } from "react";
import "./box.css";
import { TypeAnimation } from "react-type-animation";
import { useNavigate } from "react-router-dom";

function Box() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };


  const navigate = useNavigate();
  const RouteChange = () => {
    let path = `/jigsaw`;
    navigate(path);
  };

  return (
    <>
      <div className="container h-screen overflow-hidden flex justify-center items-center">
       {/* shadow */}
        <div
          className={`shadow relative w-[150px] h-[20px] bg-black bg-opacity-40 rounded-[50%] top-[60px] animate-BounceOut ${
            isClicked ? "animate-none" : "animate-BounceOut"
          }`}
        ></div>
        {/* box */}
        <div
          className={`gift-box w-[150px] h-[100px] bg-[#ec9c4a] absolute ${
            isClicked ? "animate-none" : "animate-BounceIn"
          }`}
        >
          <div
            className={`click absolute bg-[#ec9c4a] w-[190px] h-[50px] -top-[50px] -left-[20px] cursor-pointer z-10 transition ease-in-out duration-500  ${
              isClicked ? "-translate-y-[500px] animate-none" : ""
            }`}
            onClick={handleClick}
          ></div>

          <div
            className={`text w-full bg-[#ec9c4a] p-2 -top-5 absolute text-center text-2xl text-red-800 rounded-2xl  transition ease-in-out duration-500 -translate-y-[140px] font-semibold ${
              isClicked ? "opacity-1 " : "opacity-0"
            }`}
            onClick={handleClick}
          >
            {isClicked && (
              <TypeAnimation
                sequence={[
                  "Apple Start With A",
                  1000,
                  "Banana Start With B",
                  1000,
                  "Chicken Start With C",
                  1000,
                  "I Thought Happiness started with H",
                  1500,
                  "But Mine, it started with U",

                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "1em", display: "inline-block" }}
                repeat={"no"}
              />
            )}

          </div>
        </div>
            
           
      </div>

    </>
  );
}

export default Box;

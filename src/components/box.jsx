import { useState } from "react";
import "./box.css";
import { TypeAnimation } from "react-type-animation";
import Swal from "sweetalert2";
import audioBG from "/image/audiobg.mp3"

function Box() {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  const LastMessage = () => {
    Swal.fire({
      title: "Sekian Dari SESEORANG",
      icon: "info",
    }).then((res) => {
      if (res.isConfirmed) {
        Swal.fire({
          title: "Thank youu",
          iconHtml: '<img src="/image/thank-you.png">',
          customClass: {
            icon: "no-border",
          },
          text: "ehh bentar 1 video lagiii",
        }).then((respon) => {
          if (respon.isConfirmed) {
            window.open("/image/vid1.mp4");
          }
        });
      }
    });
  };

  return (
    <>
    <audio src="/image/audiobg.mp3" loop autoPlay></audio>
      <div className="container h-screen overflow-hidden flex justify-center items-center">
        {/* shadow */}
        <div
          className={`shadow relative w-[150px] h-[20px] bg-black bg-opacity-40 rounded-[50%] top-[26%] animate-BounceOut ${
            isClicked ? "animate-none" : "animate-BounceOut"
          }`}
        ></div>
        {/* box */}
        <div
          className={`gift-box w-[150px] h-[100px] bottom-1/4 bg-[#ec9c4a] absolute ${
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
                  2500,
                  () => {
                    LastMessage();
                  },
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

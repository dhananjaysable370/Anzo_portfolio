import { useRef } from "react";
import Page1Bottom from "../components/Page1Bottom";
import gsap from "gsap";
import TiltText from "../components/TiltText";

function Page1() {
  const tiltRef = useRef(null);

  const mouseMoving = (e) => {
    const xVal = (e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width / 2) / 20;
    const yVal = -(e.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height / 2) / 10;

    // Directly apply gsap animation on mouse movement for smoother updates
    
      gsap.to(tiltRef.current, {
      transform: `rotateX(${yVal}deg) rotateY(${xVal}deg) scale(1)`,
      duration: 7,
      ease: "power3.out"
    });

  };

  return (
    <div onMouseMove={mouseMoving} className="h-screen p-3 bg-white">
      <div
        id="page1-in"
        className="relative shadow-md p-9 rounded-[30px] shadow-gray-400 h-full w-full bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_1855,h_842,fp_0.69_0.64,q_85,usm_0.66_1.00_0.01,enc_auto/ANZO.jpg)] bg-cover"
      >
        <img
          className="h-[60px] ml-5"
          src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_99,h_99,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%2053.png"
          alt=""
        />
        <TiltText abc={tiltRef} />
        <Page1Bottom />
      </div>
    </div>
  );
}

export default Page1;

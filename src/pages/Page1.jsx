import { useRef, useState } from "react"
import Page1Bottom from "../components/Page1Bottom"
// import TiltText from "../components/TiltText"

function Page1() {

  const [xVal, setxVal] = useState(0)
  const [yVal, setyVal] = useState(0)
  const tiltRef = useRef(null);

  const mouseMoving = (e) => {
    setxVal((e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width/2)/20)
    setyVal(-(e.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height/2)/10)
    tiltRef.current.style.transform = `rotateX(${yVal}deg) rotateY(${xVal}deg)`
  }
  return (
    <div onMouseMove={(e) => {
      mouseMoving(e)
    }} className='h-screen p-3 bg-white'>
          <div id="page1-in"  className='relative shadow-xl p-9 rounded-[30px] shadow-gray-400 h-full w-full bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_1855,h_842,fp_0.69_0.64,q_85,usm_0.66_1.00_0.01,enc_auto/ANZO.jpg)] bg-cover '>
        <img className="h-[60px] ml-5" src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_99,h_99,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%2053.png" alt="" />
        

            <div id="tiltDiv" ref={tiltRef} className='mt-36 ml-3 text-white'>
      <h1 className="text-[4.3vw] font-[anzo1] leading-[4vw] uppercase">I AM <span className="text-black">DARK MODE</span>™</h1>
      <h1 className="text-[8.5vw] font-[anzo1] leading-[7vw]">DESIGNER</h1>
      <h1 className="text-[4.3vw] font-[anzo1] leading-[4vw] uppercase">TO HIRE</h1>

    </div>
              {/* <TiltText /> */}
              <Page1Bottom/>
              
      </div>
    </div>
  )
}

export default Page1

import Page1Bottom from "../components/Page1Bottom"
import TiltText from "../components/TiltText"

function Page1() {
  return (
    <div className='h-screen p-3  bg-white'>
          <div className='shadow-xl shadow-gray-400 h-full w-full bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_1855,h_842,fp_0.69_0.64,q_85,usm_0.66_1.00_0.01,enc_auto/ANZO.jpg)] bg-cover rounded-3xl'>
              <img src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_99,h_99,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%2053.png" alt="" />
            
              <TiltText />
              <Page1Bottom/>
              
      </div>
    </div>
  )
}

export default Page1

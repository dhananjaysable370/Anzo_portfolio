import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

function Page2() {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const rotateTexts = document.querySelectorAll('.rotateText');

        rotateTexts.forEach((text, index) => {
            gsap.fromTo(text, {
                opacity: 0,
                y: 100,
                rotationX: -80,
            }, {
                opacity: 1,
                y: 0,
                rotationX: 0,
                duration: 1.5,
                stagger:1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: text,
                    start: 'top 90%',  // Animates when the text is 80% from the top of the viewport
                    toggleActions: 'play none none none',
                }
            });
        });
    }, []);

    return (
        <div id="section2" className="bg-white text-black p-8 text-center min-h-screen flex flex-col items-center justify-center">
            <h3 className="text-gray-500 font-[anzo3] mb-12">© anzo.studio 2024 | designed and developed</h3>
            <div className="rotateText mt-20">
                <h1 className="text-[42vw] text-black font-[anzo4] uppercase leading-[35vw]">IMPACTFUL</h1>
            </div>
            <div className="rotateText">
                <h1 className="text-[42vw] text-black font-[anzo4] uppercase leading-[35vw]">design</h1>
            </div>
            <div className="rotateText">
                <h1 className="text-[42vw] text-black font-[anzo4] uppercase leading-[35vw]">is that</h1>
            </div>
            <div className="rotateText">
                <h1 className="text-[42vw] text-black font-[anzo4] uppercase leading-[35vw]">design</h1>
            </div>
            <div className="rotateText">
                <h1 className="text-[42vw] text-black font-[anzo4] uppercase leading-[35vw]">that</h1>
            </div>
            <div className="rotateText">
                <h1 className="text-[42vw] text-black font-[anzo4] uppercase leading-[35vw]">works!</h1>
            </div>
        </div>
    )
}

export default Page2;

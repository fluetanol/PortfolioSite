'use client';

import Image from "next/image";
import { useEffect, useRef } from "react";


const show_style = "opacity-100 translate-y-0 transition-all duration-800"

const show = ([entry] :IntersectionObserverEntry[])=>{
            if(entry.isIntersecting){
                entry.target.classList.remove("opacity-0","translate-y-6");
                entry.target.classList.add(...show_style.split(" "));
            }
            else{
                entry.target.classList.add("opacity-0","translate-y-6");
                entry.target.classList.remove(...show_style.split(" "));
            }
        }


export function IntroductionSection() {
    const ref = useRef<HTMLDivElement>(null);
    
    useEffect(()=>{
        const currentRef = ref.current;
        if(!currentRef) return;
        const observer = new IntersectionObserver(show, {threshold: 0.2});
        observer.observe(currentRef);

    },[]);

    return(
         <section className="flex min-w-[50vw] max-w-full h-screen p-4 gap-6 justify-center items-center">
                <div
                aria-label="Profile Image and Links"
                className = "flex flex-col">
                  <div className ="flex w-[500px] h-[500px] justify-center items-center">
                    <Image
                      className="rounded-full grayscale-100"
                      src="/image/profile.jpg"
                      alt="Profile picture"
                      width={300}
                      height={400}
                    />
                  </div>
                    <div className = "flex flex-col items-center text-xl gap-2">
        
                      <a className ="flex gap-2  items-center" href="https://github.com/taeseungjeong">
                      <Image
                        src="/svg-icon/github.svg"
                        alt="Signature"
                        width={18}
                        height={18}
                      />
                      <span className = "relative after:content-[''] after:absolute after:inset-0 after:w-0 hover:after:w-full after:border-b-2 after:border-black after:transition-all after:duration-300">Github</span>
                      </a>
        
                      <a className ="flex gap-2 items-center" href="https://www.notion.so/taeseungjeong/taeseungjeong-s-Portfolio-Page-6b2f3fbf3f3b4e1eaed3f5e0e4c8e4b3">
                      <Image
                        src="/svg-icon/notion.svg"
                        alt="Signature"
                        width={18}
                        height={18}
                        
                      />
                      <span className = "relative after:content-[''] after:absolute after:inset-0 after:w-0 hover:after:w-full after:border-b-2 after:border-black after:transition-all after:duration-300">Notion</span>
                      </a>
        
                    </div>
                </div>
        
                <div aria-label="Introduction" className ="flex flex-col gap-20">
                  <div ref={ref} className ="space-y-2 whitespace-nowrap translate-y-6 opacity-0">
                    <h1 className ="text-6xl font-bold">재미를 구현하는 개발자</h1>
                    <h2 className="text-5xl">정태승입니다</h2>
                  </div>
        
        
                  <p  className ="text-xl">
                    {"까불지 마세요 여러분 저는 개발자입니다."} <br />
                    {"당신들 다 큰일난거야 알아?"}<br />
                    {"저는 재미있는 것을 만드는 개발자 정태승입니다."}
                  </p>
            
        
                </div>
              </section>
    )

}
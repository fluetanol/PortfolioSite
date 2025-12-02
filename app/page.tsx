import Image from "next/image";


export default function Home() {
  return (
    <section>

      <div className="flex min-w-[50vw] max-w-full h-screen p-4 gap-6 justify-center items-center">
        
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
            <div className = "flex flex-col items-center text-2xl gap-2">

              <a className ="flex gap-2 items-center" href="https://github.com/taeseungjeong">
              <Image
                src="/svg-icon/github.svg"
                alt="Signature"
                width={24}
                height={24}
              />
              <span className = "relative after:content-[''] after:absolute after:inset-0 after:w-0 hover:after:w-full after:border-b-2 after:border-black after:transition-all after:duration-300">Github</span>
              </a>

              <a className ="flex gap-2 items-center" href="https://www.notion.so/taeseungjeong/taeseungjeong-s-Portfolio-Page-6b2f3fbf3f3b4e1eaed3f5e0e4c8e4b3">
              <Image
                src="/svg-icon/notion.svg"
                alt="Signature"
                width={24}
                height={24}
                
              />
              <span className = "relative after:content-[''] after:absolute after:inset-0 after:w-0 hover:after:w-full after:border-b-2 after:border-black after:transition-all after:duration-300">Notion</span>
              </a>

            </div>
        </div>

        <div aria-label="Introduction" className ="flex flex-col gap-20">
          <div className ="space-y-2 whitespace-nowrap">
            <h1 className ="text-6xl font-bold">재미를 구현하는 개발자</h1>
            <h2 className="text-5xl">정태승입니다</h2>
          </div>


          <p className ="text-xl">
            {"까불지 마세요 여러분 저는 개발자입니다."} <br />
            {"당신들 다 큰일난거야 알아?"}<br />
            {"저는 재미있는 것을 만드는 개발자 정태승입니다."}
          </p>
    

        </div>
      </div>
      <div className="flex justify-center items-center w-full h-screen">
          테스트입니다.
      </div>
    </section>
  );
}

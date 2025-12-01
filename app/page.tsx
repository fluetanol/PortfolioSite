import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col gap-2 justify-center items-center w-screen h-screen">
          테스트입니다.
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
      </div>
      <div className="flex justify-center items-center w-screen h-screen">
          테스트입니다.
      </div>
    </div>
  );
}

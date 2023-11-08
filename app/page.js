import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen md:flex items-center justify-center">
      <div className="h-1/2 md:h-full  flex items-center justify-center md:w-1/2 md:border-r-4 border-gray-700 flex-col">
        <h1 className="font-bold text-white text-6xl mt-2">
          Task<span className="text-red-600">ly</span>
        </h1>
        <Image
          alt="img"
          src={"/img.png"}
          width={700}
          height={700}
          className="brightness-105"
        />
      </div>
      <div className="h-1/2 md:h-full flex items-center justify-center md:w-1/2">
        <Link href={"/login"}>
          <button className="bg-blue-700 text-white px-8 py-3 rounded-md hover:bg-blue-800 font-semibold">
            Start
          </button>
        </Link>
      </div>
    </div>
  );
}

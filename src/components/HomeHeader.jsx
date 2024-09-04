import Link from "next/link";
import { TbGridDots } from "react-icons/tb";
export default function HomeHeader() {
  return (
    <header className=" flex justify-end text-sm p-5 ">
      <div className="flex space-x-4 items-center">
        <Link className="hover:underline hover:underline-offset-1" href={"#"}>
          Gmail
        </Link>
        <Link className="hover:underline hover:underline-offset-1" href={"#"}>
          Images
        </Link>
        <Link className="hover:underline hover:underline-offset-1" href={"#"}>
          <TbGridDots className="bg-transparent hover:bg-gray-200 rounded-full text-3xl p-2" />
        </Link>
        <button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow duration-200">
          Sign in
        </button>
      </div>
    </header>
  );
}

import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HomeHeader />

      <div className="flex flex-col mt-24 justify-center items-center">
        <Image
          width="300"
          height="100"
          src="https://globaldataops.com/wp-content/uploads/2024/03/google.png"
        />

        <HomeSearch />
      </div>
    </>
  );
}

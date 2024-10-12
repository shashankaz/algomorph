import Image from "next/image";

export const metadata = {
  title: "Under Construction",
};

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 h-screen px-4 sm:px-8 md:px-16">
      <div className="h-48 w-48 md:h-72 md:w-72">
        <Image
          src="/construction.png"
          width={200}
          height={200}
          className="h-full w-full object-cover"
          alt="Under Construction"
        />
      </div>
      <div className="text-center text-lg md:text-2xl text-gray-500">
        <p>Oops! This page is still being built.</p>
        <p>We appreciate your patience as we work on it!</p>
      </div>
    </div>
  );
};

export default Page;

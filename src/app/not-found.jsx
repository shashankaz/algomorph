import Image from "next/image";

export const metadata = {
  title: "404",
};

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-6 px-4 sm:px-8 md:px-16">
      <div className="h-48 w-48 md:h-72 md:w-72">
        <Image
          src="/sad.png"
          width={300}
          height={300}
          alt="404"
          className="h-full w-full object-cover filter grayscale"
          draggable="false"
        />
      </div>
      <h1 className="text-5xl md:text-7xl font-semibold">404</h1>
      <p className="text-lg md:text-xl font-semibold">Page not found</p>
      <div className="text-center">
        <p className="text-base md:text-lg">
          The page you are looking for doesn&apos;t exist or another error
          occurred.
        </p>
        <p className="text-base md:text-lg">
          Go back, or head over to home to choose a new direction.
        </p>
      </div>
    </div>
  );
};

export default NotFound;

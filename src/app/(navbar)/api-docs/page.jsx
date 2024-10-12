import ApiIntroduction from "./ApiIntroduction";
import ApiAuthentication from "./ApiAuthentication";
import ApiEndpoints from "./ApiEndpoints";

export const metadata = {
  title: "API Documentation",
};

const APIDocs = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 py-20 flex flex-col gap-10">
      <ApiIntroduction />
      <ApiAuthentication />
      <ApiEndpoints />
    </div>
  );
};

export default APIDocs;

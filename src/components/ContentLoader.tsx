import { FC } from "react";

const ContentLoader: FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="loading loading-ring loading-lg"></div>
    </div>
  );
};

export default ContentLoader;

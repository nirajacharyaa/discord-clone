import React from "react";

const ServerIcon = ({ image }) => {
  return (
    <div>
      <img
        src={image}
        className="h-12 cursor-pointer transition-all rounded-full duration-100 ease-out hover:rounded-xl"
      />
    </div>
  );
};

export default ServerIcon;

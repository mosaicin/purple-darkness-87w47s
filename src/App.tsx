import React, { useState } from "react";

const ToggleButton: React.FC = () => {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  const toggleHandler = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="flex items-center justify-center p-4">
      <button
        onClick={toggleHandler}
        className={`${
          isToggled ? "bg-blue-500" : "bg-gray-300"
        } relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
      >
        <span className="sr-only">Enable notifications</span>
        <span
          className={`${
            isToggled ? "translate-x-6" : "translate-x-1"
          } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
        />
      </button>
      <span className="ml-3 text-sm font-medium text-gray-900">
        {isToggled ? "On" : "Off"}
      </span>
    </div>
  );
};

export default ToggleButton;
import React from "react";

const ModalContent = ({ children }) => {
  return (
    <div className="overflow-auto relative z-[1] h-screen">
      {children ?? (
        <div className="h-full flex items-center justify-center">
          <h4 className="text-center text-gray-400">No Content Available</h4>
        </div>
      )}
    </div>
  );
};

export default ModalContent;

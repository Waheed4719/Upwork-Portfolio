import React, { useRef } from "react";

const SnapParent = React.forwardRef(({ ...props }, ref) => (
  <div ref={ref} {...props} className="snap-parent-y-mandatory">
    {props.children}
  </div>
));

const Container = ({ children }) => {
  const ref = useRef();

  return (
    <SnapParent
      ref={ref}
      style={{
        position: "absolute",
      }}
    >
      {children}
    </SnapParent>
  );
};

export default Container;

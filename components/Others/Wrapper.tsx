import React from "react";

const Wrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={`${className ?? ""} md:px-20 px-5  `}>{children}</div>;
};

export default Wrapper;

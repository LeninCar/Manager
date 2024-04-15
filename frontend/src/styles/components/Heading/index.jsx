import React from "react";

const sizes = {
  s: "text-xl font-semibold",
  md: "text-[40px] font-semibold md:text-[38px] sm:text-4xl",
  xs: "text-base font-bold",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-blue_gray-900 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };

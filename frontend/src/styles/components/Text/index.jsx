import React from "react";

const sizes = {
  xs: "text-[9px] font-normal",
  lg: "text-sm font-normal",
  s: "text-[11px] font-normal",
  "2xl": "text-lg font-light",
  xl: "text-base font-light",
  md: "text-xs font-normal",
};

const Text = ({ children, className = "", as, size = "s", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-blue_gray-900_01 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };

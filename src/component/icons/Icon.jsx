import React from "react";
import { IconSet } from "./IconSet";
import "./Icon.scss";

const Icon = ({ name, size = 24, className = "", ...props }) => {
  const icon = IconSet[name];

  if (!icon) {
    console.warn(`Icon "${name}" not found in IconSet`);
    return null;
  }

  return (
    <span
      className={`icon ${className}`}
      style={{ width: size, height: size }}
      {...props}
    >
      {icon}
    </span>
  );
};

export default Icon;

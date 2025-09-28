"use client";
import React from "react";

type ButtonProps = {
  className?: string;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ className, children }) => {
  return (
    <button className={className}>
      {children}
    </button>
  );
};

export default Button;

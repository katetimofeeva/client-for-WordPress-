import React from "react";

interface IPropsButton {
  handleClick: () => void;
  className: string;
  children: string | React.ReactNode;
}

const Button = ({ handleClick, children, className }: IPropsButton) => {
  return (
    <button
      onClick={handleClick}
      className={className}
    >
      {children}
    </button>
  );
};

export default Button;

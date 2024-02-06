import React from "react";

type Props = {
  children: React.ReactNode;
  handleClick: () => void;
  disabled?: boolean;
};

const Button = ({ children, handleClick, disabled }: Props) => {
  return (
    <button
      type="button"
      onClick={handleClick}
      className="bg-white text-black rounded-sm hover:bg-inherit hover:text-white hover:border  w-[100px] h-6"
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;

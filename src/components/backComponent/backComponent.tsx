import React from "react";

type Props = {
  handleClick: (e: any) => void;
};

const BackComponent = ({ handleClick }: Props) => {
  return <div>BackComponent</div>;
};

export default BackComponent;

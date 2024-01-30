import React from "react";
import { Box, Button } from "@mui/material";

type Props = {
  handleClick: (e: any) => void;
};

const FrontComponent = ({ handleClick }: Props) => {
  return (
    <>
      <Box
        width="auto"
        sx={{
          border: "1px solid red",
        }}
      >
        FrontComponent
      </Box>
      <Button onClick={handleClick}>翻頁</Button>
    </>
  );
};

export default FrontComponent;

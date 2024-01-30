import { styled, IconButton, CardContent, Tooltip } from "@mui/material";

export const StyledFlopIcon = styled(IconButton)(() => ({
  marginLeft: "auto",
}));

export const StyledCardContent = styled(CardContent)(() => ({
  display: "flex",
  flexDirection: "column",
  rowGap: "10px",
}));

export const StyledTooltip = styled(Tooltip)(() => ({}));
StyledTooltip.defaultProps = {
  PopperProps: {
    sx: {
      "& > .MuiTooltip-tooltip": {
        backgroundColor: "#fff",
        padding: "10px 12px 14px",
        color: "grey.800",
        borderRadius: "8px",
        boxShadow: "0px 12px 24px -4px rgba(145, 158, 171, 0.16)",
        "& > .MuiTooltip-arrow": {
          color: "#fff",
        },
      },
    },
  },
};

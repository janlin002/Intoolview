import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  Typography,
  CardActions,
} from "@mui/material";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

import { StyledFlopIcon, StyledCardContent, StyledTooltip } from "./card.style";
import { Data } from "@/types";

type Props = {
  handleClick: (e: any) => void;
  data: Data;
  isFront?: boolean;
};

const CardComponent = ({ handleClick, data, isFront = true }: Props) => {
  const contentData = isFront ? data.questionContent : data.answerContent;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader subheader={isFront && data.questionType} />

      <StyledCardContent>
        {contentData.map((item, index) =>
          Array.isArray(item) ? (
            <CardMedia
              component="img"
              height="194"
              image={item[0]}
              alt="question image"
              key={index}
            />
          ) : (
            <Typography variant="body2" color="text.secondary" key={index}>
              {item}
            </Typography>
          )
        )}
      </StyledCardContent>

      <CardActions disableSpacing>
        <StyledTooltip
          title={isFront ? "查看答案" : "查看題目"}
          placement="top"
          arrow
        >
          <StyledFlopIcon>
            <TrendingFlatIcon onClick={handleClick} />
          </StyledFlopIcon>
        </StyledTooltip>
      </CardActions>
    </Card>
  );
};

export default CardComponent;

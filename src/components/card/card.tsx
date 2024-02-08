import React from "react";
import { Icon } from "@iconify/react";
import { IconButton } from "@material-tailwind/react";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Data } from "@/types";

type Props = {
  handleClick: (e: any) => void;
  data: Data;
  isFront?: boolean;
};

const CardComponent = ({ handleClick, data, isFront = true }: Props) => {
  const contentData = isFront ? data?.questionContent : data?.answerContent;

  return (
    <Card className="w-[500px]">
      <CardHeader>
        <CardTitle>{isFront ? data?.questionType : "解答"}</CardTitle>
      </CardHeader>
      <CardContent>
        {contentData?.map((content: Array<string> | string, index: number) =>
          Array.isArray(content) ? (
            <div key={index}>
              <Image
                unoptimized
                src={content[0]}
                width={0}
                height={0}
                style={{
                  width: "auto",
                  height: "auto",
                }}
                alt=""
              />
            </div>
          ) : (
            <p key={index}>{content}</p>
          )
        )}
      </CardContent>
      <CardFooter>
        <IconButton
          variant="text"
          className="rounded-full ml-auto"
          placeholder=""
          onClick={handleClick}
        >
          <Icon icon="fluent:arrow-hook-up-right-24-regular" width={16} />
        </IconButton>
      </CardFooter>
    </Card>
  );
};

export default CardComponent;

import * as React from "react";
import { Box, Stack, Typography } from "@mui/material";
import IconButtonWithText from "@/_components/IconWithText";

interface Props {
  text: string;
  icon?: React.ReactNode;
  buttonList?: React.ReactNode[];
}

export default function AppBoardHeader(props: Props) {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      padding={1}
    >
      <Box
        sx={{
          color: "white",
        }}
      >
        {props.icon ? (
          <IconButtonWithText text={props.text} icon={props.icon} />
        ) : (
          <Typography>{props.text}</Typography>
        )}
      </Box>
      <Stack direction="row" spacing={1} alignItems={"center"}>
        {props?.buttonList?.map((item, idx) => (
          <span key={idx}>{item}</span>
        ))}
      </Stack>
    </Box>
  );
}

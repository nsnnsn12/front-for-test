import React from "react";
import { Box, Typography } from "@mui/material";

interface Props {
  text: string;
  icon: React.ReactNode;
  fontSize?: number | string; // 폰트 사이즈
}

export default function IconWithText ({
  text,
  icon,
  fontSize = "inherit",
}: Props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
      {icon} {/* 아이콘 */}
      <Typography fontSize={fontSize}>{text}</Typography> {/* 텍스트 */}
    </Box>
  );
}

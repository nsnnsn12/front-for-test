import { Box, Stack } from "@mui/material";

interface AppSubMenuBarProps {
  children?: React.ReactNode;
}

export default function AppSubMenuBar({ children }: AppSubMenuBarProps) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "black",
      }}
      py={1}
      px={1}
      marginBottom={1}
    >
      <Stack direction="row" spacing={1} alignItems={"center"}>
        {children}
      </Stack>
    </Box>
  );
}

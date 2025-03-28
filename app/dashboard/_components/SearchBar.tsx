import IconWithText from "@/_components/IconWithText";
import { Button, Paper, Stack, TextField } from "@mui/material";
import NextLink from "next/link";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  return (
    <Paper
      sx={{
        minHeight: "50px",
        backgroundColor: "white",
        alignItems: "center",
        display: "flex", // Paper 내부에서 중앙 정렬
        justifyContent: "space-between",
      }}
    >
      <Stack direction="row" spacing={2} margin={1}>
        <IconWithText
          icon={<SearchIcon fontSize="small" />}
          text="검색"
          fontSize={"14px"}
        />
        <TextField size="small" id="username" label="성명" />
        <TextField size="small" id="car-number" label="차량번호" />
        <TextField size="small" id="phone-number" label="전화번호" />
        <Button
            variant="outlined"
            color="inherit"
            component={NextLink}
            size="small"
            href="#"
            startIcon={<SearchIcon/>}
          >
            조회
          </Button>
      </Stack>
      <Stack direction="row" spacing={2} alignItems={"center"} margin={1}>
      <Button
            variant="outlined"
            color="inherit"
            size="small"
            component={NextLink}
            href="#"
          >
            압류촉탁: 0건
          </Button>
      </Stack>
    </Paper>
  );
}

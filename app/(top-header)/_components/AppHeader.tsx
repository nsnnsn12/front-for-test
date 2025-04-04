import NextLink from "next/link";
import Link from "@mui/material/Link";
import { Box, Button, Stack } from "@mui/material";
import { Home as HomeIcon } from "@mui/icons-material";
import PersonalVideoIcon from "@mui/icons-material/PersonalVideo";

export default function AppHeader() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
      }}
      py={1}
      px={1}
    >
      <Stack direction="row" spacing={1} alignItems={"center"}>
        <Link href="/" component={NextLink} underline="hover" color="black">
          서대문구도시관리공단
        </Link>
        <Button
          variant="contained"
          size="small"
          color="secondary"
          component={NextLink}
          href="/dashboard"
          startIcon={<HomeIcon />}
        >
          HOME
        </Button>
        <Button
          startIcon={<PersonalVideoIcon />}
          size="small"
          href="/public-parking"
          variant="contained"
          color="secondary"
          component={NextLink}
        >
          노상노외
        </Button>
        <Button
          startIcon={<PersonalVideoIcon />}
          size="small"
          href="/residence"
          variant="contained"
          color="secondary"
          component={NextLink}
        >
          거주자
        </Button>
        <Button
          startIcon={<PersonalVideoIcon />}
          size="small"
          href="#"
          variant="contained"
          color="secondary"
          component={NextLink}
        >
          부정주차
        </Button>
        <Button
          startIcon={<PersonalVideoIcon />}
          size="small"
          href="#"
          variant="contained"
          color="secondary"
          component={NextLink}
        >
          미수금
        </Button>
        <Button
          startIcon={<PersonalVideoIcon />}
          size="small"
          href="#"
          variant="contained"
          color="secondary"
          component={NextLink}
        >
          견인보관소
        </Button>
        <Button
          startIcon={<PersonalVideoIcon />}
          size="small"
          href="#"
          variant="contained"
          color="secondary"
          component={NextLink}
        >
          홈페이지
        </Button>
        <Button
          startIcon={<PersonalVideoIcon />}
          size="small"
          href="#"
          variant="contained"
          color="secondary"
          component={NextLink}
        >
          시스템
        </Button>
        <Button
          startIcon={<PersonalVideoIcon />}
          size="small"
          href="#"
          variant="contained"
          color="secondary"
          component={NextLink}
        >
          유지보수 게시판
        </Button>
        <Button
          startIcon={<PersonalVideoIcon />}
          size="small"
          href="#"
          variant="contained"
          color="secondary"
          component={NextLink}
        >
          지도보기
        </Button>
        <Button
          startIcon={<PersonalVideoIcon />}
          size="small"
          href="#"
          variant="contained"
          color="secondary"
          component={NextLink}
        >
          홈페이지 바로가기
        </Button>
      </Stack>
      <Stack direction="row" spacing={1} alignItems={"center"}>
        <Button
          size="small"
          href="/login"
          variant="contained"
          color="secondary"
          component={NextLink}
        >
          로그인
        </Button>
      </Stack>
    </Box>
  );
}

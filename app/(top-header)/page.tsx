import { Typography } from "@mui/material";

export default function Home() {
  const context = (
    <>
      주차 시설 관리 페이지에
      <br />
      오신 것을 환영합니다.
    </>
  );
  return (
    <Typography variant="h1" component="h1" gutterBottom align="center" mt={2}>
      {context}
    </Typography>
  );
}

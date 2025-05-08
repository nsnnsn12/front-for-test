"use client";
import { Box, Grid2 } from "@mui/material";
import SearchHistory from "./_components/SearchHistory";
import SearchBar from "./_components/SearchBar";
import UnresolvedCounts from "./_components/UnresolvedCounts";
import MemberRegistrationCounts from "./_components/MemberRegistrationCounts";
import RequestCountsByTime from "./_components/RequestCountsByTime";
import SignUpCounts from "./_components/SignUpCounts";
import ReadyAndAssignmentCounts from "./_components/ReadyAndAssignmentCounts";
import AlarmSend from "./_components/AlarmSend";
export default function MainDashBoard() {
  return (
    <Box marginTop={1}>
      <Grid2 container spacing={2}>
        <Grid2 size={4}>
          {/* 검색이력 */}
          <SearchHistory />
        </Grid2>
        <Grid2 size={8} container>
          <Grid2 size={12}>
            {/* 검색바 */}
            <SearchBar />
          </Grid2>
          <Grid2 size={6}>
            {/* 민원 관리 미처리 현황 */}
            <UnresolvedCounts />
          </Grid2>
          <Grid2 size={6}>
            {/* 회원등록 신청 현황 */}
            <MemberRegistrationCounts />
            <Box padding={1} />
            {/* 이용시간별 신청 현황 */}
            <RequestCountsByTime />
          </Grid2>
          <Grid2 size={6} container>
            <Grid2 size={6}>
              {/* 회원 가입 현황 */}
              <SignUpCounts />
            </Grid2>
            <Grid2 size={6}>
              {/* 대기 및 배정자 현황 */}
              <ReadyAndAssignmentCounts />
            </Grid2>
          </Grid2>
          <Grid2 size={6}>
            {/* 알림톡발송 */}
            <AlarmSend />
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
  );
}

"use client";
import AppBoard, { AppBoardProps } from "@/_components/AppBoard/AppBoard";
import CustomTable, {
  CustomColumn,
} from "@/_components/CustomTable/CustomTable";
import ModeOutlinedIcon from "@mui/icons-material/ModeOutlined";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import { Box, Button } from "@mui/material";
import NextLink from "next/link";
import axiosInstance from "@/utils/axios";
import { useApi } from "@/hooks/useApi";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
const APP_BOARD_TITLE = "검색 이력";
const columns = [
  {
    id: "searchDate",
    label: "일시",
    minWidth: 170,
    align: "center",
    getLabel: (value) => value as string,
  },
  {
    id: "carNumber",
    label: "차량번호",
    minWidth: 100,
    align: "left",
    headerAlign: "center",
    getLabel: (value) => value as string,
  },
] as CustomColumn[];

export default function SearchHistory() {
  const { enqueueSnackbar } = useSnackbar();
  const { data, isLoading, error, fetchData } = useApi<[]>();
  //api를 전달해주고 해당 api를 use hook이 호출하여 데이터를 세팅
  const searchHistory = () => {
    fetchData(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return await axiosInstance.get("/dashboard/searchCarHistory");
    });
  };

  //error가 발생했을 때 snackbar를 띄워줌
  useEffect(() => {
    //아 오류 상태가 변경되는 경우지
    if (error) {
      enqueueSnackbar(error.message, { variant: "error" });
    }
  }, [error, enqueueSnackbar]);

  const searchHistoryProps = {
    title: APP_BOARD_TITLE,
    titleIcon: <ModeOutlinedIcon />,
    buttonList: [
      <Button
        key={1}
        size="small"
        color="secondary"
        variant="contained"
        onClick={searchHistory}
        href="#"
        startIcon={<DirectionsCarIcon />}
      >
        차량검색이력
      </Button>,
      <Button
        key={2}
        size="small"
        color="secondary"
        variant="contained"
        component={NextLink}
        href="#"
        startIcon={<DirectionsCarIcon />}
      >
        구획검색이력
      </Button>,
    ],
  } as AppBoardProps;
  return (
    <>
      <AppBoard {...searchHistoryProps} sx={{ height: "100%" }}>
        <Box padding={1}>
          <CustomTable
            columns={columns}
            rows={data || []}
            sx={{ maxHeight: "600px" }}
            loading={isLoading}
          />
        </Box>
      </AppBoard>
    </>
  );
}

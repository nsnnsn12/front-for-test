"use client";
import AppBoard, { AppBoardProps } from "@/_components/AppBoard/AppBoard";
import CustomTable, {
  CustomColumn,
} from "@/_components/CustomTable/CustomTable";
import ModeOutlinedIcon from "@mui/icons-material/ModeOutlined";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import { Box, Button, Skeleton } from "@mui/material";
import NextLink from "next/link";
import axiosInstance from "@/utils/axios";
import { Suspense, useState } from "react";
const APP_BOARD_TITLE = "검색 이력";

export default function SearchHistory() {
  const [rows, setRows] = useState([]);
  
  const searchCarHistory = {
    search: async () => {
      try {
        const response = await axiosInstance.get("/dashboard/searchCarHistory");
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay
        if (response.status === 200) {
          // Handle successful login
          console.log("search car history successful");
          console.log(response.data?.data);
          const result = response.data?.data || [];
          setRows(result);
          // Redirect to dashboard or perform other actions
        }
      } catch (error) {
        console.error("Login failed:", error);
      }
    },
    columns: [
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
    ] as CustomColumn[],
    rows: [] as Array<{ searchDate: string; carNumber: string }>,
  };
  const searchHistoryProps = {
    title: APP_BOARD_TITLE,
    titleIcon: <ModeOutlinedIcon />,
    buttonList: [
      <Button
        key={1}
        size="small"
        color="secondary"
        variant="contained"
        onClick={searchCarHistory.search}
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
    <AppBoard {...searchHistoryProps} sx={{ height: "100%" }}>
      <Box padding={1}>
        <Suspense fallback={<Skeleton />}>
          <CustomTable
            columns={[...searchCarHistory.columns]}
            rows={rows}
            sx={{ maxHeight: "600px" }}
          />
        </Suspense>
      </Box>
    </AppBoard>
  );
}

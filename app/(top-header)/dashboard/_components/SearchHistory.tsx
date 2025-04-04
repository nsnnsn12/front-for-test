'use client'
import AppBoard, { AppBoardProps } from "@/_components/AppBoard/AppBoard";
import CustomTable, {
  CustomColumn,
} from "@/_components/CustomTable/CustomTable";
import ModeOutlinedIcon from "@mui/icons-material/ModeOutlined";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import { Box, Button } from "@mui/material";
import NextLink from "next/link";
import axiosInstance from "@/utils/axios";
const APP_BOARD_TITLE = "검색 이력";

const searchCarHistory = {
  onClick: async () => {
    try {
      const response = await axiosInstance.get("/dashboard/searchCarHistory");
  
      if(response.status === 200) {
        // Handle successful login
        console.log("search car history successful");
        searchCarHistory.rows = response.data?.data || [];
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
  rows: [],
}
const searchHistoryProps = {
  title: APP_BOARD_TITLE,
  titleIcon: <ModeOutlinedIcon />,
  buttonList: [
    <Button
      key={1}
      size="small"
      color="secondary"
      variant="contained"
      onClick={searchCarHistory.onClick}
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

export default function SearchHistory() {
  return (
    <AppBoard {...searchHistoryProps} sx={{ height: "100%" }}>
      <Box padding={1}>
        <CustomTable columns={[...searchCarHistory.columns]} rows={[...searchCarHistory.rows]} sx={{maxHeight: '600px'}} />
      </Box>
    </AppBoard>
  );
}

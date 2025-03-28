import AppBoard, { AppBoardProps } from "@/_components/AppBoard/AppBoard";
import CustomTable, {
  CustomColumn,
} from "@/_components/CustomTable/CustomTable";
import ModeOutlinedIcon from "@mui/icons-material/ModeOutlined";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import { Box, Button } from "@mui/material";
import NextLink from "next/link";
const APP_BOARD_TITLE = "검색 이력";
const columns: readonly CustomColumn[] = [
  {
    id: "date",
    label: "일시",
    minWidth: 170,
    align: "center",
    getLabel: (value) => value as string,
  },
  {
    id: "carNo",
    label: "차량번호",
    minWidth: 100,
    align: "left",
    headerAlign: "center",
    getLabel: (value) => value as string,
  },
];

interface Data extends Record<string, unknown> {
  date: string;
  carNo: string;
}

function createData(date: string, carNo: string): Data {
  return { date, carNo };
}

const rows = [
  createData("2023-04-08 19:24", "15너6927"),
  createData("2023-04-07 15:42", "15너6927"),
  createData("2023-04-06 17:45", "379고2219"),
  createData("2023-04-06 17:45", "22수7461"),
  createData("2023-04-06 17:40", "15너6927"),
  createData("2023-04-06 17:38", "15너6927"),
  createData("2023-04-03 22:42", "181마7420"),
  createData("2023-04-03 22:40", "1234"),
  createData("2023-04-02 16:24", "181마7420"),
  createData("2023-04-02 16:22", "181마7420"),
  createData("2023-04-02 16:19", "181마7420"),
  createData("2023-04-02 16:16", "181마7420"),
  createData("2023-04-02 16:16", "181마7420"),
  createData("2023-04-02 16:12", "181마7420"),
  createData("2023-04-02 16:12", "181마7420"),
  createData("2023-04-02 15:28", "1234"),
  createData("2023-04-02 15:26", "181마7420"),
  createData("2023-04-02 15:26", "181ak7420"),
  createData("2023-03-31 12:45", "34조6180"),
  createData("2023-03-17 10:59", "1234"),
  createData("2023-03-17 10:59", "1234"),
  createData("2023-03-17 10:59", "1234"),
  createData("2023-03-17 10:59", "1234"),
  createData("2023-03-17 10:59", "1234"),
  createData("2023-03-17 10:59", "1234"),
];
const searchHistoryProps = {
  title: APP_BOARD_TITLE,
  titleIcon: <ModeOutlinedIcon />,
  buttonList: [
    <Button
      key={1}
      size="small"
      color="secondary"
      variant="contained"
      component={NextLink}
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
        <CustomTable columns={[...columns]} rows={rows} sx={{maxHeight: '600px'}} />
      </Box>
    </AppBoard>
  );
}

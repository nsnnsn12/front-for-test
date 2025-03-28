import AppBoard, { AppBoardProps } from "@/_components/AppBoard/AppBoard";
import CustomTable, {
  CustomColumn,
} from "@/_components/CustomTable/CustomTable";
import { Box } from "@mui/material";
import WindowIcon from '@mui/icons-material/Window';
const APP_BOARD_TITLE = "민원 관리 미처리 현황";
const columns: readonly CustomColumn[] = [
  {
    id: "type",
    label: "분류",
    minWidth: 170,
    align: "center",
    getLabel: (value) => value as string,
  },
  {
    id: "unResolvedCount",
    label: "미답건수",
    minWidth: 100,
    align: "center",
    getLabel: (value) => `${value}건`,
  },
];

interface Data extends Record<string, unknown> {
  type: string;
  unResolvedCount: number;
}

function createData(type: string, unResolvedCount: number): Data {
  return { type, unResolvedCount };
}

const rows = [
  createData("신규신청", 2419),
  createData("회원탈퇴신청", 2),
  createData("환불요청", 5),
  createData("차량변경신청", 0),
];
const appBoardProps = {
  title: APP_BOARD_TITLE,
  titleIcon: <WindowIcon />,
} as AppBoardProps;

export default function UnresolvedRequests() {
  return (
    <AppBoard {...appBoardProps} sx={{ height: "100%" }}>
      <Box padding={2} >
        <CustomTable columns={[...columns]} rows={rows} />
      </Box>
    </AppBoard>
  );
}

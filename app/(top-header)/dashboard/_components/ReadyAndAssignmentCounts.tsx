import AppBoard, { AppBoardProps } from "@/_components/AppBoard/AppBoard";
import CustomTable, {
  ColSpanInfo,
  CustomColumn,
} from "@/_components/CustomTable/CustomTable";
import { Box } from "@mui/material";
import WindowIcon from "@mui/icons-material/Window";

const APP_BOARD_TITLE = "대기 및 배정자 현황";

const colspanInfo: readonly ColSpanInfo[] = [
  {
    label: "회원가입",
    colSpan: 2,
  },
];
const columns: readonly CustomColumn[] = [
  {
    id: "memberType",
    label: "회원유형",
    minWidth: 100,
    align: "center",
    getLabel: (value) => {
      switch (value) {
        case "resident":
          return "거주자";
        case "business":
          return "사업자";
        case "worker":
          return "재직자";
        case "etc":
          return "기타";
        case "total":
          return "전체";
        default:
          return value as string;
      }
    },
  },
  {
    id: "readyCount",
    label: "건수",
    minWidth: 150,
    align: "right",
    getLabel: (value, row) => {
      const data = row as Data;
      return `${value}/${data.assignmentCount}건`;
    },
  },
];

interface Data extends Record<string, unknown> {
  memberType: string;
  readyCount: number;
  assignmentCount: number;
}

const rows = [
  {
    memberType: "거주자",
    readyCount: 3393,
    assignmentCount: 2997,
  },
  {
    memberType: "사업자",
    readyCount: 289,
    assignmentCount: 173,
  },
  {
    memberType: "재직자",
    readyCount: 1503,
    assignmentCount: 740,
  },
  {
    memberType: "기타",
    readyCount: 0,
    assignmentCount: 0,
  },
  {
    memberType: "전체",
    readyCount: 9119,
    assignmentCount: 9119,
  },
] as Data[];
const appBoardProps = {
  title: APP_BOARD_TITLE,
  titleIcon: <WindowIcon />,
} as AppBoardProps;

export default function ReadyAndAssignmentCounts() {
  return (
    <AppBoard {...appBoardProps}>
      <Box padding={2}>
        <CustomTable
          columns={[...columns]}
          rows={rows}
          colspanInfo={[...colspanInfo]}
        />
      </Box>
    </AppBoard>
  );
}

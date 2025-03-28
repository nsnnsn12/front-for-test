import AppBoard, { AppBoardProps } from "@/_components/AppBoard/AppBoard";
import CustomTable, {
  ColSpanInfo,
  CustomColumn,
} from "@/_components/CustomTable/CustomTable";
import { Box } from "@mui/material";
import WindowIcon from "@mui/icons-material/Window";

const APP_BOARD_TITLE = "회원가입 신청 현황";

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
    id: "counts",
    label: "건수",
    minWidth: 170,
    align: "right",
    getLabel: (value) => `${value}건`,
  },
];

interface Data extends Record<string, unknown> {
  memberType: string;
  counts: number;
}

const rows = [
  {
    memberType: "거주자",
    counts: 6400,
  },
  {
    memberType: "사업자",
    counts: 462,
  },
  {
    memberType: "재직자",
    counts: 2257,
  },
  {
    memberType: "기타",
    counts: 0,
  },
  {
    memberType: "전체",
    counts: 9119,
  },
] as Data[];
const appBoardProps = {
  title: APP_BOARD_TITLE,
  titleIcon: <WindowIcon />,
} as AppBoardProps;

export default function SignUpCounts() {
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

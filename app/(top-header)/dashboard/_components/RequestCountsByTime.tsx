import AppBoard, { AppBoardProps } from "@/_components/AppBoard/AppBoard";
import CustomTable, {
  ColSpanInfo,
  CustomColumn,
} from "@/_components/CustomTable/CustomTable";
import { Box } from "@mui/material";
import WindowIcon from '@mui/icons-material/Window';

const APP_BOARD_TITLE = "이용시간별 신청 현황";
const colspanInfo: readonly ColSpanInfo[] = [
  {
    label: "이용시간별 신청 현황",
    colSpan: 4,
  },
]
const columns: readonly CustomColumn[] = [
  {
    id: "dateType",
    label: "날짜",
    minWidth: 170,
    align: "center",
    getLabel: (value) => {
      switch (value) {
        case 'yesterday':
          return '어제';
        case 'today':
          return '오늘';
        default:
          return value as string;
      }
    },
  },
  {
    id: "total",
    label: "전일",
    minWidth: 100,
    align: "center",
    getLabel: (value) => `전일(${value})건`,
  },
  {
    id: "dayCount",
    label: "주간",
    minWidth: 100,
    align: "center",
    getLabel: (value) => `주간(${value})건`,
  },
  {
    id: "nightCount",
    label: "야간",
    minWidth: 100,
    align: "center",
    getLabel: (value) => `야간(${value})건`,
  },
];

interface Data extends Record<string, unknown> {
  dateType: string;
  total: number;
  dayCount: number;
  nightCount: number;
}

const rows = [
  {
    dateType: 'yesterday',
    total: 4,
    dayCount: 1,
    nightCount: 0,
  },
  {
    dateType: 'today',
    total: 2,
    dayCount: 0,
    nightCount: 0,
  }
] as Data[];
const appBoardProps = {
  title: APP_BOARD_TITLE,
  titleIcon: <WindowIcon />,
} as AppBoardProps;

export default function RequestStatusByTime() {
  return (
    <AppBoard {...appBoardProps}>
      <Box padding={2} >
        <CustomTable columns={[...columns]} rows={rows} colspanInfo={[...colspanInfo]} />
      </Box>
    </AppBoard>
  );
}

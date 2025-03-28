import AppBoard, { AppBoardProps } from "@/_components/AppBoard/AppBoard";
import CustomTable, {
  ColSpanInfo,
  CustomColumn,
} from "@/_components/CustomTable/CustomTable";
import { Box } from "@mui/material";
import WindowIcon from '@mui/icons-material/Window';
const APP_BOARD_TITLE = "회원등록 신청 현황";

const colspanInfo: readonly ColSpanInfo[] = [
  {
    label: "회원가입 현황",
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
    id: "adminCount",
    label: "관리자 등록 요청",
    minWidth: 100,
    align: "center",
    getLabel: (value) => `관리자 등록(${value})건`,
  },
  {
    id: "userCount",
    label: "사용자 등록 요청",
    minWidth: 100,
    align: "center",
    getLabel: (value) => `홈페이지 가입(${value})건`,
  },
  {
    id: "deleteCount",
    label: "삭제 요청",
    minWidth: 100,
    align: "center",
    getLabel: (value) => `삭제(${value})건`,
  },
];

interface SignUpRequestData extends Record<string, unknown> {
  dateType: string;
  adminCount: number;
  userCount: number;
  deleteCount: number;
}

const rows = [
  {
    dateType: 'yesterday',
    adminCount: 0,
    userCount: 6,
    deleteCount: 0,
  },
  {
    dateType: 'today',
    adminCount: 7,
    userCount: 0,
    deleteCount: 0,
  }
] as SignUpRequestData[];
const appBoardProps = {
  title: APP_BOARD_TITLE,
  titleIcon: <WindowIcon />,
} as AppBoardProps;

export default function SignUpRequest() {
  return (
    <AppBoard {...appBoardProps}>
      <Box padding={2} >
        <CustomTable columns={[...columns]} rows={rows} colspanInfo={[...colspanInfo]} />
      </Box>
    </AppBoard>
  );
}

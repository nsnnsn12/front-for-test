import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
} from "@mui/material";

//colspan 설정을 위한 interface
export interface ColSpanInfo {
  label: string;
  colSpan: number;
  align?: "right" | "left" | "center";
  minWidth?: number;
}

//json의 key값과 헤더에 표시될 값, cell 정렬 방식, 헤더 정렬 방식을 설정하기 위한 interface
export interface CustomColumn {
  id: string; //json의 key값
  label: string; //표의 헤더에 표시될 값
  getLabel: (value: unknown, row: unknown) => string; //json의 key값에 해당하는 value를 받아서 표시할 값으로 변환하는 함수
  minWidth?: number; //cell의 최소 너비
  align: "right" | "left" | "center"; //cell 정렬 방식
  headerAlign?: "right" | "left" | "center"; //헤더 정렬 방식
}

type CustomTableProps = {
  colspanInfo?: ColSpanInfo[]; //헤더에 colSpan이 필요한 경우
  columns: CustomColumn[];
  rows: Record<string, unknown>[]; //json 배열
  loading?: boolean;
  onRowClick?: (row: unknown) => void;
  maxHeight?: number; //테이블 최대 높이
  sx?: React.CSSProperties;
};

export default function CustomTable(
  { colspanInfo, columns, rows, loading, sx }: CustomTableProps,
) {
  return (
    <TableContainer component={Paper} sx={{...sx}}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          {colspanInfo ? (
            <TableRow>
              {colspanInfo.map((colSpanInfo, idx) => (
                <TableCell
                  key={idx}
                  colSpan={colSpanInfo.colSpan}
                  align={colSpanInfo.align ? colSpanInfo.align : "center"}
                  sx={{
                    fontSize: "0.8rem",
                    fontWeight: "bold",
                    minWidth: colSpanInfo.minWidth
                      ? colSpanInfo.minWidth
                      : "auto",
                  }}
                >
                  {colSpanInfo.label}
                </TableCell>
              ))}
            </TableRow>
          ) : (
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.headerAlign ? column.headerAlign : column.align}
                  sx={{
                    minWidth: column.minWidth,
                    fontSize: "0.8rem",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          )}
        </TableHead>
        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell colSpan={columns.length} align="center">
                <CircularProgress size={24} />
              </TableCell>
            </TableRow>
          ) : rows.length > 0 ? (
            rows.map((row, idx) => (
              <TableRow hover role="checkbox" key={idx}>
                {columns.map((column, columnIndex) => {
                  const value = row[column.id];
                  const cell = column.getLabel(value, row);
                  return (
                    <TableCell
                      key={columnIndex}
                      align={column.align}
                      sx={{
                        minWidth: column.minWidth,
                        fontSize: "0.8rem",
                      }}
                    >
                      {cell}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} align="center">
                데이터가 존재하지 않습니다.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

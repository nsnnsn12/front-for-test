"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-roboto)",
  },
  cssVariables: true,
  palette: {
    primary: {
      light: "#757ce8",
      main: "#007bff",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#f5f5f5",
      main: "#f0f0f0",
      dark: "#c2c2c2",
      contrastText: "#000",
    },
    // 경고 색상
    warning: {
      main: "#ff9800", // 주황색 (Warning)
    },
    // 오류 색상
    error: {
      main: "#f44336", // 빨간색 (Error)
    },
    // 성공 색상
    success: {
      main: "#4caf50", // 초록색 (Success)
    },
    // 정보 색상
    info: {
      main: "#2196f3", // 파란색 (Info)
    },
  },
  components: {
    MuiTable: {
      styleOverrides: {
        root: {
          borderCollapse: "collapse", // 테이블의 border 중첩 문제 해결
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {},
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: "5px",
          borderInline: "1px solid #c2c2c2",
        },
        head: {
          padding: "3px",
          backgroundColor: "#f0f0f0",
          fontWeight: "bold",
        },
      },
    },
  },
});

export default theme;

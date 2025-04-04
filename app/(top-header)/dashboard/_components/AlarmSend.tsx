"use client";
import AppBoard, { AppBoardProps } from "@/_components/AppBoard/AppBoard";
import ModeOutlinedIcon from "@mui/icons-material/ModeOutlined";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextareaAutosize,
} from "@mui/material";
import NextLink from "next/link";
const APP_BOARD_TITLE = "알림톡발송";
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
      알림톡발송
    </Button>,
  ],
} as AppBoardProps;

export default function AlarmSend() {
  return (
    <AppBoard {...searchHistoryProps} sx={{ height: "100%" }}>
      <Box padding={1} sx={{ display: "flex" }}>
        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell rowSpan={3} width={"50%"}>
                  <TextareaAutosize
                    aria-label="empty textarea"
                    className="border-2 border-gray-300 rounded-md w-full min-h-[150px]"
                  />
                </TableCell>
                <TableCell
                  width={"15%"}
                  align="center"
                  sx={{ backgroundColor: "#c2c2c2" }}
                >
                  안내문
                </TableCell>
                <TableCell>
                  <FormControl
                    sx={{ minWidth: 80, width: "100%" }}
                    size="small"
                  >
                    <InputLabel id="demo-select-small-label">Age</InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      label="Age"
                      autoWidth
                      onChange={(event) => console.log(event.target.value)}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" sx={{ backgroundColor: "#c2c2c2" }}>
                  수신자
                </TableCell>
                <TableCell>
                  <FormControl
                    sx={{ minWidth: 80, width: "100%" }}
                    size="small"
                  >
                    <InputLabel id="demo-select-small-label">Age</InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      label="Age"
                      autoWidth
                      onChange={(event) => console.log(event.target.value)}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" sx={{ backgroundColor: "#c2c2c2" }}>
                  발신자
                </TableCell>
                <TableCell>
                  <FormControl
                    sx={{ minWidth: 80, width: "100%" }}
                    size="small"
                  >
                    <InputLabel id="demo-select-small-label">Age</InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      label="Age"
                      autoWidth
                      onChange={(event) => console.log(event.target.value)}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </AppBoard>
  );
}

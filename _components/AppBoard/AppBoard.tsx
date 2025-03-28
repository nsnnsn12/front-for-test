import * as React from "react";
import { Box, Divider, Paper } from "@mui/material";
import AppBoardHeader from "./_components/AppBoardHeader";

export interface AppBoardProps {
    title: string; //보드 제목
    titleIcon?: React.ReactNode; // 보드 제목 아이콘
    buttonList?: React.ReactNode[]; // 보드 버튼 리스트
    children: React.ReactNode; // 보드 내용
    sx?: React.CSSProperties; // 스타일 속성
}

export default function AppBoard({ children, ...props }: AppBoardProps) {
    return (
        <Paper square={false} sx={{ ...props.sx, }}>
            <AppBoardHeader text={props.title} icon={props?.titleIcon} buttonList={props?.buttonList}/>
            <Divider />
            <Box>{children}</Box> {/* children 사용 */}
        </Paper>
    );
}

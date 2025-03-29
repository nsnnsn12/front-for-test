"use client";

import { Box, Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

interface HoverMenuProps {
  children?: React.ReactNode;
}
export default function HoverMenu({ children }: HoverMenuProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLElement>) => {
    console.log("mouseleave", event);
    if(anchorEl === event.currentTarget) {
      return;
    }
    setAnchorEl(null); // 마우스를 떼면 서브 메뉴가 닫힙니다.
  };

  return (
    <Box onMouseLeave={handleMouseLeave}>
      <Button
        onMouseEnter={handleMouseEnter} // 버튼 위로 마우스를 올리면 서브 메뉴가 나타납니다.
        // onMouseLeave={handleMouseLeave} // 버튼에서 마우스를 떼면 서브 메뉴가 사라집니다.
        id="hover-menu" onMouseLeave={handleMouseLeave}
      >
        메뉴
      </Button>

      {/* 서브 메뉴 */}
      <Menu
        anchorEl={anchorEl} // anchorEl에 마우스가 올려진 버튼을 설정
        open={open} // anchorEl이 null이 아니면 서브 메뉴가 열림
        onClose={handleMouseLeave} // 서브 메뉴 밖을 클릭하거나 마우스를 떼면 메뉴가 닫힙니다.
        // slots prop removed as it is invalid
        slotProps={{
          list: {
            onMouseLeave: handleMouseLeave, // 서브 메뉴 리스트에서 마우스를 떼면 메뉴가 닫힙니다.
          },
        }}
      >
        <MenuItem>서브 메뉴 1</MenuItem>
        <MenuItem>서브 메뉴 2</MenuItem>
        <MenuItem>서브 메뉴 3</MenuItem>
      </Menu>
    </Box>
  );
}

"use client";

import NextLink from "next/link";
import {
  Button,
  MenuItem,
  MenuList,
  styled,
  Tooltip,
  tooltipClasses,
  TooltipProps,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
export interface HoverMenuProps {
  menuTitle: string; // 메뉴 제목
  menuIcon: React.ReactNode;
  subMenus: HoverMenu[];
}

interface HoverMenu {
  text: string; // 메뉴 텍스트
  link: string; // 메뉴 링크
}
const HoverTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip
    {...props}
    classes={{ popper: className }}
    placement="bottom-start"
  />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

export default function HoverMenu({ menuIcon, menuTitle, subMenus }: HoverMenuProps) {
  return (
    <div>
      <HoverTooltip
        title={
          <MenuList>
            {subMenus.map((item, idx) => (
              <MenuItem key={idx}>
                <Button
                  startIcon={<IndeterminateCheckBoxIcon />}
                  component={NextLink}
                  href={item.link}
                >
                  {item.text}
                </Button>
              </MenuItem>
            ))}
          </MenuList>
        }
      >
        <Button
          color="secondary"
          startIcon={menuIcon}
          endIcon={<KeyboardArrowDownIcon />}
        >
          {menuTitle}
        </Button>
      </HoverTooltip>
    </div>
  );
}

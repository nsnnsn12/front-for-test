import type { Metadata } from "next";
import AppSubMenuBar from "@/_components/AppSubMenuBar";
import HoverMenu, { HoverMenuProps } from "@/_components/HoverMenu";
import PersonIcon from "@mui/icons-material/Person";
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import BusinessIcon from '@mui/icons-material/Business';
export const metadata: Metadata = {
  title: "노상 노외",
  description: "노상 노외 페이지",
};

const menus = [
  {
    menuTitle: "고객 관리",
    menuIcon: <PersonIcon />,
    subMenus: [
      { text: "고객정보", link: "#" },
      { text: "고객상태", link: "#" },
      { text: "배정자현황", link: "#" },
      { text: "SMS내용관리", link: "#" },
      { text: "SMS발송관리", link: "#" },
      { text: "중복고객리스트", link: "#" },
    ],
  },
  {
    menuTitle: "배정관리",
    menuIcon: <TimeToLeaveIcon />,
    subMenus: [
      { text: "배정/징수주기설정", link: "#" },
      { text: "순환배정", link: "#" },
      { text: "구간별 대기/배정자 현황", link: "#" },
      { text: "안내문발송", link: "#" },
      { text: "배정이관", link: "#" },
      { text: "배정처리", link: "#" },
    ],
  },
  {
    menuTitle: "수납관리",
    subMenus: [
      { text: "납부고지", link: "#" },
      { text: "입금관리", link: "#" },
      { text: "납부현황", link: "#" },
      { text: "환불관리", link: "#" },
    ],
  },
  {
    menuTitle: "시설물관리",
    menuIcon: <BusinessIcon />,
    subMenus: [
      { text: "주차선관리", link: "#" },
      { text: "게시판", link: "#" },
    ],
  },
  {
    menuTitle: "통 계",
    subMenus: [
      { text: "대기자 현황", link: "#" },
      { text: "기간별 수익금 현황", link: "#" },
      { text: "배정 통계", link: "#" },
      { text: "거주자 배정자 현황", link: "#" },
      { text: "납부 방법별 수익금 현황", link: "#" },
      { text: "거주자 우선주차 구획현황", link: "#" },
      { text: "거주자 감면 대상자 현황", link: "#" },
      { text: "거주자 구획 변동 현황", link: "#" },
    ],
  },
  {
    menuTitle: "정보변경 관리",
    menuIcon: <TimeToLeaveIcon />,
    subMenus: [
      { text: "차량변경 신청현황", link: "#" },
      { text: "임시차량 신청현황", link: "#" },
      { text: "정보변경 신청현황", link: "#" },
    ],
  },
] as HoverMenuProps[];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AppSubMenuBar>
        {menus.map((item, idx) => (
          <HoverMenu
            key={idx}
            menuIcon={item?.menuIcon}
            menuTitle={item.menuTitle}
            subMenus={item.subMenus}
          />
        ))}
      </AppSubMenuBar>
      {children}
    </>
  );
}

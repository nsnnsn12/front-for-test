import type { Metadata } from "next";
import { Link } from "@mui/material";
import AppSubMenuBar from "@/_components/AppSubMenuBar";
import NextLink from "next/link";
import HoverMenu from "@/_components/HoverMenu";

export const metadata: Metadata = {
  title: "노상 노외",
  description: "노상 노외 페이지",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AppSubMenuBar>
        <HoverMenu />
        <Link href="/" component={NextLink} underline="hover" color="white">
          월정기고객관리
        </Link>
      </AppSubMenuBar>
      {children}
    </>
  );
}

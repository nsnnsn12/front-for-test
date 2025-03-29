import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../lib/theme";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});
import "./globals.css";
import { Container } from "@mui/material";
import AppHeader from "./_components/AppHeader";

export const metadata: Metadata = {
  title: "서대문구도시관리공단",
  description: "서대문구도시관리공단 관리자 페이지",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.variable} style={{ backgroundColor: "#c2c2c2" }}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Container
              maxWidth={false}
              sx={{
                paddingY: 2,
                paddingTop: 0,
              }}
            >
              <AppHeader />
              {children}
            </Container>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

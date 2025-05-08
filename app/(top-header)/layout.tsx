"use client";
import { SnackbarProvider } from "notistack";
import AppHeader from "./_components/AppHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AppHeader />
      <SnackbarProvider maxSnack={3}>{children}</SnackbarProvider>
    </>
  );
}

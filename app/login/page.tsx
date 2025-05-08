"use client";
import { SnackbarProvider } from "notistack";
import SignIn from "./_components/SignIn/SignIn";

export default function Login() {
  return (
    <SnackbarProvider maxSnack={3}>
      <SignIn />
    </SnackbarProvider>
  );
}

import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/app/Theme/theme";
import useAxiosDefaults from "@/app/Hooks/useAxiosDefaults";
import AuthProvider from "@/app/Providers/AuthContextProvider";

export default function App({ Component, pageProps }: AppProps) {
  useAxiosDefaults();
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
}

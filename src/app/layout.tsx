import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import Footer from "app/components/Footer";
import Header from "app/components/Header";
import theme from "app/ui/theme";
import "./globals.css";
import ReduxProvider from "app/components/redux";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body content="width=device-width, initial-scale=1.0">
        <AppRouterCacheProvider>
          <ReduxProvider>
            <ThemeProvider theme={theme}>
              <Header />
              {children}
              <Footer />
            </ThemeProvider>
          </ReduxProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
